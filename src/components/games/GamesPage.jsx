import { useState, useEffect } from "react";
import { useAuth } from "../../auth/AuthContext";
import { getGames, createGame } from "../../api/games";

import GamesList from "./GamesList";

export default function GamesPage() {
  const { token } = useAuth();
  const [games, setGames] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const syncGames = async () => {
      const data = await getGames();
      setGames(data);
    };
    syncGames;
  }, []);

  const tryCreateGame = async (name) => {
    try {
      await createGame(token, name);
    } catch (e) {
      setError(e.message);
    }
  };

  const tryJoinGame = async (inviteCode) => {
    try {
      await joinGame(token, inviteCode);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <h1>Games</h1>
      <GamesList games={games} />
      <form>
        // text input for game name
        <button onClick={() => tryCreateGame()}>Create Game</button>
        {error && <p role="alert">{error}</p>}
      </form>
      <form>Join Game</form>
    </>
  );
}
