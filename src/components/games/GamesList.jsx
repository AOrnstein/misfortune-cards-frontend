import { Link } from "react-router";
import "../../styles/pages/GamesList.css";

export default function GamesList({ games }) {
  return (
    <ul id="games-list">
      {games.map((game) => (
        <GameListItem key={game.id} game={game} />
      ))}
    </ul>
  );
}

function GameListItem({ game }) {
  return (
    <li>
      <Link to={"/games/" + game.id}>{game.name}</Link>
      //Icon: if DM, add DM icon
    </li>
  );
}
