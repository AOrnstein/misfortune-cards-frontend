import { cards } from "../data/cards";

export default function DeckBuilder() {
  return (
    <section className="compendium-page">
      <div className="page-header">
        <h1>Deck Builder</h1>
        <p className="muted">Choose cards for your next session.</p>
      </div>

      <div className="card-grid">
        {cards.map((card) => (
          <article className="card-tile" key={card.id}>
            <div className="card-art">{card.image}</div>
            <div className="card-info">
              <h2>{card.name}</h2>
              <p>{card.type}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
