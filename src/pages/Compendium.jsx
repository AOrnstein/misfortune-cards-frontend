import { useState } from "react";
import { useCards } from "../contexts/useCards";
import "../styles/pages/Compendium.css";
import CardTile from "../components/CardTile";

export default function Compendium() {
  const { cards } = useCards();

  // Filter state
  const [query, setQuery] = useState("");

  // Handle the changing input value
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // Filter items based on the search query (case-insensitive)
  const filteredItems = cards.filter((card) =>
    card.name.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <section className="compendium-page">
      <div className="page-header">
        <h1>Compendium</h1>
      </div>

      <input
        className="search-input"
        type="search"
        placeholder="Search cards..."
        value={query}
        onChange={handleInputChange}
      />

      <div className="card-grid">
        {filteredItems.map((card) => (
          <CardTile key={card.id} card={card} label={card.name} />
        ))}
      </div>
    </section>
  );
}
