import { useSudoku } from "../../context/SudokuContext";

export default function SudokuCell({
  rowIndex,
  columnIndex,
  value,
  isFixed,
  isInvalid,
  isSelected,
  isLocked,
}) {
  const { config, selectCell, updateCellValue } = useSudoku();

  const classNames = ["sudoku-cell"];

  if (isFixed) {
    classNames.push("prefilled");
  } else {
    classNames.push("sudoku-cell-editable");
  }

  if (isSelected) {
    classNames.push("sudoku-cell-selected");
  }

  if (isInvalid) {
    classNames.push("sudoku-cell-invalid");
  }

  if (isLocked) {
    classNames.push("sudoku-cell-locked");
  }

  return (
    <div className={classNames.join(" ")} onClick={() => selectCell(rowIndex, columnIndex)}>
      {isFixed ? (
        value
      ) : (
        <input
          type="text"
          inputMode="numeric"
          pattern={`[1-${config.size}]`}
          maxLength="1"
          aria-label={`Row ${rowIndex + 1} Column ${columnIndex + 1}`}
          value={value}
          disabled={isLocked}
          onFocus={() => selectCell(rowIndex, columnIndex)}
          onChange={(event) =>
            updateCellValue(rowIndex, columnIndex, event.target.value)
          }
        />
      )}
    </div>
  );
}
