import { useState } from "react";
import { useCards } from "../contexts/useCards";
import CardTile from "../components/CardTile";

export default function GameTable() {
  const [drawnCard, setDrawnCard] = useState();
  const { cards, cardsCategory } = useCards();

  const ORIENTATIONS = ["upright", "reversed"];

  /** Draw a card at random facedown */
  const drawCard = () => {
    const randomCard = {
      card: cards[Math.floor(Math.random() * cards.length)],
      orientation: ORIENTATIONS[Math.floor(Math.random() * 2)],
      isRevealed: false,
    };
    setDrawnCard(randomCard);
  };

  /** Reveal a facedown card */
  const revealCard = () => {
    setDrawnCard({ ...drawnCard, isRevealed: true });
  };

  // States of the game on the table

  /** No cards on the table */
  const PLAY_STATE_CLEAR = "clear";
  /** Card is facedown on the table */
  const PLAY_STATE_FACEDOWN = "facedown";
  /** Card is faceup on the table */
  const PLAY_STATE_FACEUP = "faceup";

  const getPlayState = () => {
    switch (true) {
      case !drawnCard?.card:
        return PLAY_STATE_CLEAR;
      case !drawnCard.isRevealed:
        return PLAY_STATE_FACEDOWN;
      default:
        return PLAY_STATE_FACEUP;
    }
  };

  const isPlayState = (playState) => playState === getPlayState();

  return (
    <section className="compendium-page">
      <div className="page-header">
        <h1>Game</h1>
      </div>

      <div className="game-board">
        <div className="draw-area">
          <div className="game-card-slot">
            <CardTile
              card={drawnCard?.card}
              cardsCategory={cardsCategory}
              orientation={drawnCard?.orientation}
              label={drawnCard?.card.name}
              detail={drawnCard?.orientation.toUpperCase()}
              faceDown={isPlayState(PLAY_STATE_FACEDOWN)}
            />
          </div>
        </div>

        <div className="game-actions">
          {!isPlayState(PLAY_STATE_FACEDOWN) && (
            <button type="button" onClick={drawCard}>
              Draw
            </button>
          )}
          {isPlayState(PLAY_STATE_FACEDOWN) && (
            <button type="button" onClick={revealCard}>
              Reveal
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
