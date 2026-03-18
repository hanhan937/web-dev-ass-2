export default function ScoresPage() {
  return (
    <>
      <div className="page-title">
        <h1>High Scores</h1>
        <p>Leaderboard based on the number of puzzles completed.</p>
      </div>

      <div className="scores-wrap">
        <div className="card scores-card">
          <h2>Leaderboard</h2>
          <p># Usernames and scores are examples.</p>

          <div className="table-wrap" aria-label="High score table">
            <table>
              <thead>
                <tr>
                  <th style={{ width: "90px" }}>Rank</th>
                  <th>Username</th>
                  <th style={{ width: "180px" }}>Completed</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="rank">#1</td>
                  <td>Elisa</td>
                  <td className="completed">284</td>
                </tr>
                <tr>
                  <td className="rank">#2</td>
                  <td>Wong</td>
                  <td className="completed">251</td>
                </tr>
                {[3, 4, 5, 6, 7].map((rank) => (
                  <tr key={rank}>
                    <td className="rank">#{rank}</td>
                    <td></td>
                    <td className="completed"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
