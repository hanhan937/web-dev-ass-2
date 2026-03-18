import { useSudoku } from "../../context/SudokuContext";

export default function NumberPad() {
  const { config, selectedCell, applyNumberPadValue, isComplete } = useSudoku();

  const gridClassName =
    config.key === "normal" ? "number-pad number-pad-normal" : "number-pad";

  return (
    <div className="number-pad-wrap">
      <div className={gridClassName}>
        {config.allowedValues.map((value) => (
          <button
            key={value}
            type="button"
            className="number-btn"
            onClick={() => applyNumberPadValue(value)}
            disabled={isComplete}
          >
            {value}
          </button>
        ))}
      </div>

      <p className="number-pad-hint">
        {selectedCell
          ? "Tip: click a number to fill the selected cell."
          : "Select an editable cell, then type or use the number pad."}
      </p>
    </div>
  );
}
