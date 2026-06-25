import { Link } from "react-router";

import "../styles/pages/Welcome.css";

export default function Welcome() {
  return (
    <section className="welcome-page">
      <div className="welcome-card">
        <p className="welcome-mark">✦</p>

        <div className="welcome-art">
          <div className="card-back">
            <span>☉</span>
          </div>
        </div>

        <div className="welcome-copy">
          <h1>Deck of Many Things</h1>
          <p className="muted">Fate is in the cards.</p>
        </div>

        <div className="welcome-actions">
          <Link className="button" to="/login">
            Get Started
          </Link>
          <Link className="button secondary" to="/compendium">
            Browse Cards
          </Link>
        </div>
      </div>
    </section>
  );
}