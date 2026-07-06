import { useState } from "react";
import { useCards } from "../contexts/useCards";
import "../styles/pages/Compendium.css";

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
          <CardDetailsPopover key={card.id} card={card}>
            <img
              className="card-art"
              src={card.card_front_url}
              alt={card.name}
            />
            <div className="card-info">
              <h2>{card.name}</h2>
            </div>
          </CardDetailsPopover>
        ))}
      </div>
    </section>
  );
}

/** Popover for card details */
export function CardDetailsPopover({ card, children }) {
  return (
    <>
      <button className="card-tile" popovertarget={`card-${card.id}-dialog`}>
        {children}
      </button>

      {/* Dialog Element */}
      <dialog
        id={`card-${card.id}-dialog`}
        className="card-popover"
        popover="auto"
      >
        <div className="card-info">
          <h2>{card.name}</h2>
          <p>{card.content.description}</p>
          <CardOrientationDetails
            card={card}
            label="Upright"
            orientation="upright"
          />
          <CardOrientationDetails
            card={card}
            label="Reversed"
            orientation="reversed"
          />
        </div>
        <button
          className="popover-close"
          popovertarget={`card-${card.id}-dialog`}
          popovertargetaction="hide"
          autoFocus
        >
          Close
        </button>
      </dialog>
    </>
  );
}

/**
 * Component for card details for an orientation
 * @param {{card: Object, label: string, orientation:"upright"|"reversed" }}}
 * @property {Object} card - card data
 * @property {string} label - orentation details section label
 * @property {"upright"|"reversed"} orientation - orientation type
 */
function CardOrientationDetails({ card, label, orientation }) {
  return (
    <>
      <h3>{label}</h3>
      <ul>
        <li>
          <p>
            <span className="card-property-label">Person - </span>
            <span>{card.content[orientation].person}</span>
          </p>
        </li>
        <li>
          <p>
            <span className="card-property-label">Creature or Trap - </span>
            <span>{card.content[orientation].creature_or_trap}</span>
          </p>
        </li>
        <li>
          <p>
            <span className="card-property-label">Place - </span>
            <span>{card.content[orientation].place}</span>
          </p>
        </li>
        <li>
          <p>
            <span className="card-property-label">Treasure - </span>
            <span>{card.content[orientation].treasure}</span>
          </p>
        </li>
        <li>
          <p>
            <span className="card-property-label">Situation - </span>
            <span>{card.content[orientation].situation}</span>
          </p>
        </li>
      </ul>
    </>
  );
}
