import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router";
import { useAuth } from "../../auth/AuthContext";
import { getGame, dismissPlayer, deleteGame } from "../../api/games";
import "../../styles/pages/GameDetails.css";

export default function GameDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();
  const [game, setGame] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const syncGame = async () => {
      const data = await getGame(id);
      setGame(data);
    };
    syncGame();
  }, [id]);

	const tryRegenerateCode = async () => {
		setError(null);
		try {
			await regenerateCode(token);
		} catch (e) {
			setError(e.message);
		}
	};

  const tryQuitGame = async () => {
    setError(null);
    try {
      await quitGame(token);
    } catch (e) {
      setError(e.message);
    }
  };

  const tryDismissPlayer = async (playerId) => {
    setError(null);
    try {
      await dismissPlayer(token, playerId);
    } catch (e) {
      setError(e.message);
    }
  };

	const tryDeleteGame = async (gameId) => {
    setError(null);
    try {
      await deleteGame(token, gameId);
      const data = await getGames();
    } catch (e) {
		  setError(e.message);
	}

  if (!game) return <p>Loading...</p>;

  return (
    <article id="game-details">
      <h1>{game.name}</h1>
      <h2>{game.invite_code}</h2>
      <button>Copy Invite Code</button>
			{game.is_dm && <button onClick={() => tryRegenerateCode()}>Regenerate Invite Code</button>}
      <section>
        <p>Created: {game.created_at}</p>
        <p>DM: {game.dm}</p>
        <PlayerList
          players={game.players}
          tryDismissPlayer={tryDismissPlayer}
        />
      </section>
      <Link to="/games/:id/deck">Game Deck</Link>
      {game.is_dm ? <button onClick={() => tryDeleteGame(game.id)}>Delete Game</button> : <button onClick={() => tryQuitGame()}>Quit Game</button>}
      {error && <p role="alert">{error}</p>}
    </article>
  );
}

function PlayerList({ players, tryDismissPlayer }) {
  return (
    <ul id="players-list">
      {players.map((player) => (
        <PlayerListItem
          key={player.id}
          player={player}
          tryDismissPlayer={tryDismissPlayer}
        />
      ))}
    </ul>
  );
}

function PlayerListItem({ player, tryDismissPlayer }) {
  return (
    <li>
      <p>{player.name}</p>
      {game.is_dm && (
        <button onClick={() => tryDismissPlayer(player.id)}>
          Dismiss Player
        </button>
      )}
    </li>
  );
}