import { games } from "../data/games";
import PageHeader from "../components/PageHeader";

export default function GameLobby() {
  return (
    <section className="compendium-page">
      <PageHeader
        title="Game Lobby"
        description="Start a table or join as a player."
      />

      <div className="game-list">
        {games.map((game) => (
          <article className="detail-panel" key={game.id}>
            <h2>{game.name}</h2>
            <p className="muted">DM: {game.dm}</p>
            <p>
              {game.players}/{game.maxPlayers} players
            </p>
            <p>{game.status}</p>
          </article>
        ))}
      </div>
    </section>
  );
}