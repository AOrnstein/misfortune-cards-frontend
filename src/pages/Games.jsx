import { useState, useEffect } from "react";
import { useAuth } from "../auth/useAuth";
import { getGames, createGame, joinGame } from "../api/games";

import GamesList from "../components/games/GamesList";

export default function GamesPage() {
  const { token } = useAuth();
  const [games, setGames] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const syncGames = async () => {
      const data = await getGames(token);
      setGames(data);
    };
    syncGames();
  }, [token]);

  const tryCreateGame = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("gameName");
    try {
      await createGame(token, name);
      event.target.reset();
      const data = await getGames(token);
      setGames(data);
    } catch (e) {
      setError(e.message);
    }
  };

  const tryJoinGame = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const code = formData.get("inviteCode");
    try {
      await joinGame(token, code);
      event.target.reset();
      const data = await getGames(token);
      setGames(data);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <section className="games-page">
      <div className="page-header">
        <h1>Games</h1>
      </div>
      <div className="games-list">
        <GamesList games={games} />
      </div>
      <div className="games-options">
        <form onSubmit={tryCreateGame}>
          <input type="text" name="gameName" placeholder="Game name" />
          <button type="submit">Create Game</button>
        </form>
        <form onSubmit={tryJoinGame}>
          <input type="text" name="inviteCode" placeholder="Invite code" />
          <button type="submit">Join Game</button>
        </form>
        {error && <p role="alert">{error}</p>}
      </div>
    </section>
  );
}
