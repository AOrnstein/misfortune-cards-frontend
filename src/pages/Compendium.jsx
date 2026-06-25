import "../styles/pages/Compendium.css";

const cards = [
  {
    id: "sun",
    name: "The Sun",
    type: "Treasure",
    image: "☀",
  },
  {
    id: "jester",
    name: "The Jester",
    type: "Trap",
    image: "☽",
  },
  {
    id: "moon",
    name: "The Moon",
    type: "Other",
    image: "◐",
  },
  {
    id: "rogue",
    name: "The Rogue",
    type: "Creature",
    image: "✦",
  },
];

export default function Compendium() {
  return (
    <section className="compendium-page">
      <div className="page-header">
        <h1>Compendium</h1>
        <p className="muted">Browse the cards in the deck.</p>
      </div>

      <input
        className="search-input"
        type="search"
        placeholder="Search cards..."
      />

      <div className="filter-list">
        <button className="filter active">All</button>
        <button className="filter">Treasure</button>
        <button className="filter">Trap</button>
        <button className="filter">Creature</button>
        <button className="filter">Other</button>
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