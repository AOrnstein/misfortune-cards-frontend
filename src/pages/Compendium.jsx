import { Link } from "react-router";

import { cards } from "../data/cards";
import "../styles/pages/Compendium.css";

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
          <Link className="card-tile" key={card.id} to={`/cards/${card.id}`}>
            <div className="card-art">{card.image}</div>
            <div className="card-info">
              <h2>{card.name}</h2>
              <p>{card.type}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
