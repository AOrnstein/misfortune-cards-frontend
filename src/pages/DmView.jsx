import { cards } from "../data/cards";

export default function DmView() {
  return (
    <section className="compendium-page">
      <div className="page-header">
        <h1>DM View</h1>
        <p className="muted">Manage draws and reveal outcomes.</p>
      </div>

      <button type="button">Draw a card</button>

      <div className="detail-panel">
        <h2>Deck status</h2>
        <p>{cards.length} cards are ready in the deck.</p>
      </div>
    </section>
  );
}
