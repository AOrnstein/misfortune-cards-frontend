import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router";
import { useAuth } from "../../auth/useAuth";
import {
  getGame,
  regenerateCode,
  dismissPlayer,
  deleteGame,
} from "../../api/games";
import "../../styles/pages/GameDetails.css";

export default function GameDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();
  const [game, setGame] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const syncGame = async () => {
      const data = await getGame(token, id);
      setGame(data);
    };
    syncGame();
  }, [id, token]);

  const tryRegenerateCode = async () => {
    setError(null);
    try {
      await regenerateCode(token, game.id);
      const data = await getGame(token, id);
      setGame(data);
    } catch (e) {
      setError(e.message);
    }
  };

  const tryDismissPlayer = async (playerId) => {
    setError(null);
    try {
      await dismissPlayer(token, game.id, playerId);
      const data = await getGame(token, id);
      setGame(data);
    } catch (e) {
      setError(e.message);
    }
  };

  const tryDeleteGame = async (gameId) => {
    setError(null);
    try {
      await deleteGame(token, gameId);
      navigate("/games");
    } catch (e) {
      setError(e.message);
    }
  };

  const tryQuitGame = async () => {
    setError(null);
    try {
      await dismissPlayer(token, game.id, game.user_id);
      navigate("/games");
    } catch (e) {
      setError(e.message);
    }
  };

  if (!game) return <p>Loading...</p>;

  return (
    <section id="game-details">
      <h1>{game.name}</h1>
      <p>Created: {new Date(game.created_at).toLocaleString()}</p>
      <h2>{game.invite_code}</h2>
      <div className="invite-actions">
        <button onClick={() => navigator.clipboard.writeText(game.invite_code)}>
          Copy Invite Code
        </button>
        {game.is_dm && (
          <button onClick={() => tryRegenerateCode(game.id)}>
            Regenerate Invite Code
          </button>
        )}
      </div>
      <div className="game-personnel">
        <h3>Dungeon Master</h3>
        <p>{game.dm}</p>
        <h3>Players</h3>
        <PlayerList
          players={game.players.filter((p) => !p.is_dm)}
          isDm={game.is_dm}
          tryDismissPlayer={tryDismissPlayer}
        />
      </div>
      <div className="game-links">
        <Link to={"/games/" + game.id + "/table"} className="btn">
          Join Table
        </Link>
        <Link to={"/games/" + game.id + "/deck"} className="btn">
          Game Deck
        </Link>
      </div>
      <div className="game-actions">
        {game.is_dm ? (
          <button onClick={() => tryDeleteGame(game.id)}>Delete Game</button>
        ) : (
          <button onClick={tryQuitGame}>Quit Game</button>
        )}
        {error && <p role="alert">{error}</p>}
      </div>
    </section>
  );
}

function PlayerList({ players, isDm, tryDismissPlayer }) {
  return (
    <ul id="players-list">
      {players.map((player) => (
        <PlayerListItem
          key={player.id}
          player={player}
          isDm={isDm}
          tryDismissPlayer={tryDismissPlayer}
        />
      ))}
    </ul>
  );
}

function PlayerListItem({ player, isDm, tryDismissPlayer }) {
  return (
    <li>
      <p>{player.name}</p>
      {isDm && (
        <button onClick={() => tryDismissPlayer(player.id)}>
          Dismiss Player
        </button>
      )}
    </li>
  );
}
