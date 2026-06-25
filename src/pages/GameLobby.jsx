import { Link } from "react-router";

export default function GameLobby() {
  return (
    <section className="compendium-page">
      <div className="page-header">
        <h1>Game Lobby</h1>
        <p className="muted">Start a table or join as a player.</p>
      </div>

      <div className="welcome-actions">
        <Link className="button" to="/game/dm">
          DM View
        </Link>
        <Link className="button secondary" to="/game/player">
          Player View
        </Link>
      </div>
    </section>
  );
}
