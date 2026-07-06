import { Link } from "react-router";
import { useAuth } from "../auth/AuthContext";

export default function Games() {
  const { token } = useAuth();

  return (
    <article>
      {token ? (
        <>
          <h1>Join Game</h1>
          <Link to={"/game/dm"}>I'm the DM</Link>
          <Link to={"/game/player"}>I'm the Player</Link>
        </>
      ) : (
        <Link to={"/login"}>Log in to join game</Link>
      )}
    </article>
  );
}
