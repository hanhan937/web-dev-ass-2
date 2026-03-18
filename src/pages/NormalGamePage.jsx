import SudokuGame from "../components/sudoku/SudokuGame";

export default function NormalGamePage() {
  return (
    <SudokuGame
      mode="normal"
      title="Normal Game - 9x9"
      subtitle="Classic Challenge #42 by Alex Thompson"
      badgeLabel=""
    />
  );
}
