import { SudokuProvider } from "../../context/SudokuContext";
import GameControls from "./GameControls";
import GameHeader from "./GameHeader";
import NumberPad from "./NumberPad";
import SudokuBoard from "./SudokuBoard";

function SudokuGameContent({ title, subtitle, badgeLabel }) {
  return (
    <>
      <GameHeader title={title} subtitle={subtitle} badgeLabel={badgeLabel} />

      <div className="sudoku-container">
        <SudokuBoard />
        <NumberPad />
        <GameControls />
      </div>
    </>
  );
}

export default function SudokuGame({ mode, title, subtitle, badgeLabel }) {
  return (
    <SudokuProvider mode={mode}>
      <SudokuGameContent
        title={title}
        subtitle={subtitle}
        badgeLabel={badgeLabel}
      />
    </SudokuProvider>
  );
}
