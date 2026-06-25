export default function PlayerList({ players = [] }) {
    if (players.length === 0) {
      return (
        <div className="detail-panel">
          <h2>No players yet</h2>
          <p>Players will appear here after they join the game.</p>
        </div>
      );
    }
  
    return (
      <div className="detail-panel">
        <h2>Players</h2>
  
        <ul className="player-list">
          {players.map((player) => (
            <li key={player.id} className="player-list-item">
              <span>{player.name}</span>
              <span className="muted">{player.status}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }