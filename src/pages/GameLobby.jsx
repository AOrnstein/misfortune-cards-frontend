import { useMemo } from "react";

import InvitationCard from "../components/InvitationCard";
import PageHeader from "../components/PageHeader";
import { cards } from "../data/cards";
import { games } from "../data/games";

export default function GameLobby() {
  const featuredGame = games[0];

  const randomizedDeck = useMemo(() => {
    return [...cards].sort(() => Math.random() - 0.5);
  }, []);

  return (
    <section className="compendium-page">
      <PageHeader
        title="Game Lobby"
        description="Start a table or join as a player."
      />

      <InvitationCard game={featuredGame} />

      <section className="deck-setup-panel">
        <div className="deck-setup-header">
          <h2>Deck Setup</h2>
          <p className="muted">Randomized cards for this game.</p>
        </div>

        <div className="deck-preview">
          {randomizedDeck.map((card) => (
            <article className="deck-preview-card" key={card.id}>
              <div className="deck-preview-art">{card.image}</div>
              <h3>{card.name}</h3>
              <p>{card.type}</p>
            </article>
          ))}
        </div>

        <button type="button">Set Game Deck</button>
      </section>

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