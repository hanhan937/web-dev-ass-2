import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <h1 className="hero-title">Sudoku Master</h1>
        <p className="hero-subtitle">
          Challenge your mind with the classic number puzzle. Train your brain
          with Easy and Normal modes!
        </p>

        <div className="hero-grid">
          {["5", "3", "7", "6", "9", "1", "4", "8", "2"].map((value) => (
            <div key={value} className="hero-cell">
              {value}
            </div>
          ))}
        </div>

        <div className="cta-buttons">
          <Link to="/games" className="btn btn-primary">
            Start Playing
          </Link>
          <Link to="/rules" className="btn btn-secondary">
            Learn Rules
          </Link>
        </div>
      </section>

      <section className="features">
        <div className="card feature-card">
          <div className="feature-icon" aria-hidden="true">
            🎮
          </div>
          <h3>Multiple Modes</h3>
          <p>Choose between Easy 6x6 grids or challenging Normal 9x9 puzzles</p>
        </div>
        <div className="card feature-card">
          <div className="feature-icon" aria-hidden="true">
            ⏱️
          </div>
          <h3>Timed Challenges</h3>
          <p>Race against the clock and compete for the best times</p>
        </div>
        <div className="card feature-card">
          <div className="feature-icon" aria-hidden="true">
            🏆
          </div>
          <h3>Leaderboards</h3>
          <p>Compare your scores with players from around the world</p>
        </div>
      </section>
    </>
  );
}
