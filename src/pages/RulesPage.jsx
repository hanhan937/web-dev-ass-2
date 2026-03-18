export default function RulesPage() {
  return (
    <>
      <div className="page-title">
        <h1>Rules</h1>
        <p>Learn the basics of Sudoku and how to play.</p>
      </div>

      <div className="rules-wrap">
        <div className="card rules-card">
          <div className="rules-grid">
            <section>
              <h2>How to Play</h2>
              <p>
                Sudoku is a logic puzzle. Fill the grid so that every row,
                column, and 3x3 box contains the numbers 1 through 9 exactly
                once.
              </p>
              <ol>
                <li>Each row must contain 1-9 with no repeats.</li>
                <li>Each column must contain 1-9 with no repeats.</li>
                <li>Each 3x3 box must contain 1-9 with no repeats.</li>
                <li>Given numbers cannot be changed.</li>
              </ol>
            </section>

            <section>
              <h2>Tips</h2>
              <ul>
                <li>Start with rows and columns that have many given numbers.</li>
                <li>
                  Use elimination: remove numbers that already exist in the
                  row, column, or box.
                </li>
                <li>Look for cells that have only one possible number.</li>
                <li>Take a short break if you get stuck.</li>
              </ul>
            </section>
          </div>

          <hr className="section-divider" />

          <section>
            <h2>Credits</h2>
            <p>
              This website was created as a class project using React.
            </p>
            <div className="credit-list">
              <a href="mailto:you@example.com">you@example.com</a>
              <a href="https://github.com/your-username" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/your-profile/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
