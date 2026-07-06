import { Link } from "react-router";
import "../styles/pages/Games.css";

export default function Games() {
  return (
    <section className="games-page">
      <div className="page-header">
        <h1>Games</h1>
      </div>
      <div className="games-content">
        <h2>Join Game</h2>
        <div className="game-links">
          <Link to={"/game/dm"} className="btn">
            {`I'm the DM`}
          </Link>
          <Link to={"/game/player"} className="btn">
            {`I'm the Player`}
          </Link>
        </div>
      </div>
    </section>
  );
}
