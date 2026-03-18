import { useSudoku } from "../../context/SudokuContext";

export default function GameControls() {
  const { resetGame, startNewGame } = useSudoku();

  return (
    <div className="game-footer-controls">
      <button type="button" className="btn btn-secondary" onClick={resetGame}>
        Reset
      </button>
      <button type="button" className="btn btn-primary" onClick={startNewGame}>
        New Game
      </button>
    </div>
  );
}
