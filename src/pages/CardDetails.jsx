import { Link, useParams } from "react-router";

import { cards } from "../data/cards";
import "../styles/pages/CardDetails.css";

export default function CardDetails() {
  const { cardId } = useParams();
  const card = cards.find((item) => item.id === cardId);

  if (!card) {
    return (
      <section className="card-details-page">
        <div className="page-header">
          <h1>Card not found</h1>
          <p className="muted">This card is not in the compendium.</p>
        </div>
        <Link className="button secondary" to="/compendium">
          Back to cards
        </Link>
      </section>
    );
  }

  return (
    <section className="card-details-page">
      <Link className="back-link" to="/compendium">
        Back to cards
      </Link>

      <div className="detail-card-art">{card.image}</div>

      <div className="page-header">
        <p className="card-type">{card.type}</p>
        <h1>{card.name}</h1>
      </div>

      <div className="detail-panel">
        <h2>Upright</h2>
        <p>{card.meaning}</p>
      </div>

      <div className="detail-panel">
        <h2>Reversed</h2>
        <p>{card.reverseMeaning}</p>
      </div>
    </section>
  );
}
