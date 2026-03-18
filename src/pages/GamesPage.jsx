import { Link } from "react-router-dom";

const games = [
  { title: "Classic Challenge #42", author: "Alex Thompson", mode: "Normal", to: "/games/normal" },
  { title: "Beginner's Delight", author: "Sarah Chen", mode: "Easy", to: "/games/easy" },
  { title: "Mind Bender", author: "Mike Johnson", mode: "Normal", to: "/games/normal" },
  { title: "Morning Warm-up", author: "Emily Davis", mode: "Easy", to: "/games/easy" },
  { title: "Expert's Paradise", author: "David Kim", mode: "Normal", to: "/games/normal" },
  { title: "Quick Puzzle", author: "Lisa Wang", mode: "Easy", to: "/games/easy" },
];

export default function GamesPage() {
  return (
    <>
      <div className="page-title">
        <h1>Select a Game</h1>
        <p>Choose a puzzle to solve</p>
      </div>

      <div className="difficulty-tabs">
        <span className="tab active">All Games</span>
        <span className="tab">Easy (6x6)</span>
        <span className="tab">Normal (9x9)</span>
      </div>

      <div className="game-list">
        {games.map((game) => (
          <Link key={`${game.title}-${game.mode}`} to={game.to} className="game-item">
            <div className="game-info">
              <h3>{game.title}</h3>
              <p>by {game.author}</p>
            </div>
            <div className="game-meta">
              <span
                className={`difficulty ${game.mode === "Easy" ? "easy" : "hard"}`}
              >
                {game.mode}
              </span>
              <span className="btn btn-primary">Play</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
