import { Link } from "react-router";

export default function CardTile({ card, to }) {
  const content = (
    <>
      <div className="card-art">{card.image}</div>

      <div className="card-info">
        <h2>{card.name}</h2>
        <p>{card.type}</p>
      </div>
    </>
  );

  if (to) {
    return (
      <Link className="card-tile" to={to}>
        {content}
      </Link>
    );
  }

  return <article className="card-tile">{content}</article>;
}