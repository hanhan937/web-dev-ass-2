import { useSudoku } from "../../context/SudokuContext";

export default function GameHeader({ title, subtitle, badgeLabel }) {
  const { formattedTime, completionMessage, config } = useSudoku();

  return (
    <>
      <div className="page-title">
        <h1>
          {title}
          {badgeLabel ? <span className="easy-badge">{badgeLabel}</span> : null}
        </h1>
        <p>{subtitle}</p>
      </div>

      <div className="game-header">
        <div className="timer-card">
          <span className="timer-label">Time</span>
          <div className="timer">
            <span aria-hidden="true">⏱️</span>
            <span>{formattedTime}</span>
          </div>
        </div>

        <div className="game-status">
          <p className="game-status-title">{config.size}x{config.size} Puzzle</p>
          <p
            className={`game-status-message ${
              completionMessage ? "game-status-message-success" : ""
            }`}
          >
            {completionMessage ||
              "Fill every editable cell. Incorrect entries show in red."}
          </p>
        </div>
      </div>
    </>
  );
}
