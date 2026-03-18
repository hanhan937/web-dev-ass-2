const createRange = (length) => Array.from({ length }, (_, index) => index);

const shuffleArray = (items) => {
  const nextItems = [...items];

  for (let index = nextItems.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [nextItems[index], nextItems[swapIndex]] = [
      nextItems[swapIndex],
      nextItems[index],
    ];
  }

  return nextItems;
};

const reorderIndicesByGroups = (size, groupSize) => {
  const groups = createRange(size / groupSize).map((groupIndex) =>
    createRange(groupSize).map((offset) => groupIndex * groupSize + offset),
  );

  return shuffleArray(groups).flatMap((group) => shuffleArray(group));
};

const remapBoardValues = (board, size) => {
  const digits = shuffleArray(createRange(size).map((value) => value + 1));
  const digitMap = new Map(digits.map((digit, index) => [index + 1, digit]));

  return board.map((row) => row.map((cell) => digitMap.get(cell)));
};

const reorderBoard = (board, rowOrder, columnOrder) =>
  rowOrder.map((rowIndex) =>
    columnOrder.map((columnIndex) => board[rowIndex][columnIndex]),
  );

const createSolvedBoard = ({ size, rowGroupSize, columnGroupSize }) => {
  const baseBoard = createRange(size).map((rowIndex) =>
    createRange(size).map(
      (columnIndex) =>
        ((rowIndex * columnGroupSize +
          Math.floor(rowIndex / rowGroupSize) +
          columnIndex) %
          size) +
        1,
    ),
  );

  const rowOrder = reorderIndicesByGroups(size, rowGroupSize);
  const columnOrder = reorderIndicesByGroups(size, columnGroupSize);
  const shuffledBoard = reorderBoard(baseBoard, rowOrder, columnOrder);

  return remapBoardValues(shuffledBoard, size);
};

const cloneBoard = (board) => board.map((row) => [...row]);

const createEmptyBoard = (size, fillValue = "") =>
  createRange(size).map(() => createRange(size).map(() => fillValue));

const getPrefilledCount = (config) => {
  if (typeof config.prefilledCount === "number") {
    return config.prefilledCount;
  }

  const { min, max } = config.prefilledCountRange;

  return min + Math.floor(Math.random() * (max - min + 1));
};

const createPuzzleFromSolution = (solution, config) => {
  const size = solution.length;
  const totalCells = size * size;
  const prefilledCount = getPrefilledCount(config);
  const puzzle = createEmptyBoard(size, "");
  const fixedCells = createEmptyBoard(size, false);
  const keptIndices = new Set(
    shuffleArray(createRange(totalCells)).slice(0, prefilledCount),
  );

  createRange(totalCells).forEach((flatIndex) => {
    const rowIndex = Math.floor(flatIndex / size);
    const columnIndex = flatIndex % size;

    if (!keptIndices.has(flatIndex)) {
      return;
    }

    puzzle[rowIndex][columnIndex] = String(solution[rowIndex][columnIndex]);
    fixedCells[rowIndex][columnIndex] = true;
  });

  return { puzzle, fixedCells, prefilledCount };
};

export const MODE_CONFIGS = {
  easy: {
    key: "easy",
    size: 6,
    rowGroupSize: 2,
    columnGroupSize: 3,
    allowedValues: ["1", "2", "3", "4", "5", "6"],
    prefilledCount: 18,
    title: "Easy Game - 6x6",
    subtitle: "Beginner's Delight by Sarah Chen",
    difficultyLabel: "EASY",
  },
  normal: {
    key: "normal",
    size: 9,
    rowGroupSize: 3,
    columnGroupSize: 3,
    allowedValues: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    prefilledCountRange: { min: 28, max: 30 },
    title: "Normal Game - 9x9",
    subtitle: "Classic Challenge #42 by Alex Thompson",
    difficultyLabel: "NORMAL",
  },
};

export const createSudokuGame = (mode) => {
  const config = MODE_CONFIGS[mode];
  const solution = createSolvedBoard(config);
  const { puzzle, fixedCells, prefilledCount } = createPuzzleFromSolution(
    solution,
    config,
  );

  return {
    config,
    solution,
    initialBoard: puzzle,
    fixedCells,
    prefilledCount,
  };
};

export const sanitizeCellValue = (rawValue, allowedValues) => {
  if (rawValue === "") {
    return "";
  }

  const lastCharacter = String(rawValue).trim().slice(-1);

  return allowedValues.includes(lastCharacter) ? lastCharacter : "";
};

export const calculateInvalidCells = (board, solution) =>
  board.map((row, rowIndex) =>
    row.map(
      (value, columnIndex) =>
        value !== "" && value !== String(solution[rowIndex][columnIndex]),
    ),
  );

export const isBoardComplete = (board, solution) =>
  board.every((row, rowIndex) =>
    row.every(
      (value, columnIndex) =>
        value !== "" && value === String(solution[rowIndex][columnIndex]),
    ),
  );

export const formatElapsedTime = (elapsedSeconds) => {
  const minutes = Math.floor(elapsedSeconds / 60);
  const seconds = elapsedSeconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

export const cloneBoardState = cloneBoard;
