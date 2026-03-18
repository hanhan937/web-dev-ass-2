import { useSudoku } from "../../context/SudokuContext";
import SudokuCell from "./SudokuCell";

export default function SudokuBoard() {
  const { board, config, fixedCells, invalidCells, isComplete, selectedCell } =
    useSudoku();

  if (board.length === 0) {
    return null;
  }

  return (
    <div className={`sudoku-grid grid-${config.size}x${config.size}`}>
      {board.map((row, rowIndex) =>
        row.map((value, columnIndex) => (
          <SudokuCell
            key={`${rowIndex}-${columnIndex}`}
            rowIndex={rowIndex}
            columnIndex={columnIndex}
            value={value}
            isFixed={fixedCells[rowIndex][columnIndex]}
            isInvalid={invalidCells[rowIndex][columnIndex]}
            isSelected={
              selectedCell?.rowIndex === rowIndex &&
              selectedCell?.columnIndex === columnIndex
            }
            isLocked={isComplete}
          />
        )),
      )}
    </div>
  );
}
