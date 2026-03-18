import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  calculateInvalidCells,
  cloneBoardState,
  createSudokuGame,
  formatElapsedTime,
  isBoardComplete,
  MODE_CONFIGS,
  sanitizeCellValue,
} from "../utils/sudoku";

const SudokuContext = createContext(null);

const createFalseGrid = (size) =>
  Array.from({ length: size }, () => Array.from({ length: size }, () => false));

export function SudokuProvider({ mode, children }) {
  const config = MODE_CONFIGS[mode];
  const [board, setBoard] = useState([]);
  const [initialBoard, setInitialBoard] = useState([]);
  const [solution, setSolution] = useState([]);
  const [fixedCells, setFixedCells] = useState([]);
  const [invalidCells, setInvalidCells] = useState([]);
  const [selectedCell, setSelectedCell] = useState(null);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const startNewGame = () => {
    const nextGame = createSudokuGame(mode);
    const emptyInvalidCells = createFalseGrid(nextGame.config.size);

    setBoard(cloneBoardState(nextGame.initialBoard));
    setInitialBoard(cloneBoardState(nextGame.initialBoard));
    setSolution(nextGame.solution);
    setFixedCells(nextGame.fixedCells);
    setInvalidCells(emptyInvalidCells);
    setSelectedCell(null);
    setElapsedSeconds(0);
    setIsComplete(false);
  };

  const resetGame = () => {
    if (initialBoard.length === 0) {
      return;
    }

    setBoard(cloneBoardState(initialBoard));
    setInvalidCells(calculateInvalidCells(initialBoard, solution));
    setSelectedCell(null);
    setElapsedSeconds(0);
    setIsComplete(false);
  };

  const selectCell = (rowIndex, columnIndex) => {
    if (fixedCells[rowIndex]?.[columnIndex] || isComplete) {
      setSelectedCell(null);
      return;
    }

    setSelectedCell({ rowIndex, columnIndex });
  };

  const updateCellValue = (rowIndex, columnIndex, rawValue) => {
    if (
      isComplete ||
      fixedCells[rowIndex]?.[columnIndex] ||
      solution.length === 0
    ) {
      return;
    }

    const nextValue = sanitizeCellValue(rawValue, config.allowedValues);
    const nextBoard = cloneBoardState(board);
    nextBoard[rowIndex][columnIndex] = nextValue;

    const nextInvalidCells = calculateInvalidCells(nextBoard, solution);
    const nextIsComplete = isBoardComplete(nextBoard, solution);

    setBoard(nextBoard);
    setInvalidCells(nextInvalidCells);
    setIsComplete(nextIsComplete);

    if (nextIsComplete) {
      setSelectedCell(null);
    }
  };

  const applyNumberPadValue = (value) => {
    if (!selectedCell) {
      return;
    }

    updateCellValue(selectedCell.rowIndex, selectedCell.columnIndex, value);
  };

  useEffect(() => {
    startNewGame();
  }, [mode]);

  useEffect(() => {
    if (board.length === 0 || isComplete) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setElapsedSeconds((currentValue) => currentValue + 1);
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [board.length, isComplete]);

  const value = useMemo(
    () => ({
      mode,
      config,
      board,
      initialBoard,
      fixedCells,
      invalidCells,
      selectedCell,
      elapsedSeconds,
      formattedTime: formatElapsedTime(elapsedSeconds),
      isComplete,
      completionMessage: isComplete
        ? "Congratulations! You solved the puzzle."
        : "",
      startNewGame,
      resetGame,
      selectCell,
      updateCellValue,
      applyNumberPadValue,
    }),
    [
      mode,
      config,
      board,
      initialBoard,
      fixedCells,
      invalidCells,
      selectedCell,
      elapsedSeconds,
      isComplete,
    ],
  );

  return (
    <SudokuContext.Provider value={value}>{children}</SudokuContext.Provider>
  );
}

export function useSudoku() {
  const context = useContext(SudokuContext);

  if (!context) {
    throw new Error("useSudoku must be used inside a SudokuProvider");
  }

  return context;
}
