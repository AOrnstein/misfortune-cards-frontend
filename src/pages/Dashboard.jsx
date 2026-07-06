import { Link } from "react-router";

import { useCards } from "../contexts/useCards";

export default function Dashboard() {
  const { cards } = useCards();
  return (
    <section className="compendium-page">
      <div className="page-header">
        <h1>Dashboard</h1>
        <p className="muted">Track your decks, games, and card library.</p>
      </div>

      <div className="detail-panel">
        <h2>Compendium</h2>
        <p>{cards.length} cards are available to browse.</p>
      </div>

      <Link className="button" to="/compendium">
        Browse cards
      </Link>
    </section>
  );
}
