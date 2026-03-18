import SudokuGame from "../components/sudoku/SudokuGame";

export default function EasyGamePage() {
  return (
    <SudokuGame
      mode="easy"
      title="Easy Game - 6x6"
      subtitle="Beginner's Delight by Sarah Chen"
      badgeLabel="EASY"
    />
  );
}
