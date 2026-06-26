import { useState } from "react";

import { cards } from "../data/cards";
import "../styles/pages/DmView.css";

export default function DmView() {
  const [drawnCard, setDrawnCard] = useState(null);
  const [autoConfirm, setAutoConfirm] = useState(false);


  const drawCard = () => {
    const randomCard = cards[Math.floor(Math.random() * cards.length)];
    setDrawnCard(randomCard);
  };

  return (
    <section className="compendium-page">
      <div className="page-header">
        <h1>DM View</h1>
        <p className="muted">Manage draws and reveal outcomes.</p>
      </div>

      <div className="game-board">
        <div className="draw-area">
        <div className="game-card-slot">
  {drawnCard ? (
    <article className="card-tile game-card-preview">
      <div className="card-art">{drawnCard.image}</div>

      <div className="card-info">
        <h2>{drawnCard.name}</h2>
        <p>{drawnCard.type}</p>
      </div>
    </article>
  ) : (
    <article className="card-tile game-card-preview">
      <div className="card-art">?</div>

      <div className="card-info">
        <h2>No Card</h2>
        <p>Draw from deck</p>
      </div>
    </article>
  )}
</div>
          <div className="deck-stack">⌁</div>
        </div>

        <button type="button" onClick={drawCard}>
          Draw
        </button>

        {drawnCard && (
          <div className="game-actions">
            <button type="button">Change</button>
            <button type="button">Confirm</button>
          </div>
        )}

        <label className="toggle-row">
          Auto Confirm
          <input
            type="checkbox"
            checked={autoConfirm}
            onChange={() => setAutoConfirm(!autoConfirm)}
          />
        </label>
      </div>

      <div className="detail-panel">
        <h2>Deck status</h2>
        <p>{cards.length} cards are ready in the deck.</p>
      </div>
    </section>
  );
}
