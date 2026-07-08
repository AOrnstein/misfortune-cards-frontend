/**
 * Component for a single card
 * @param {{card: Object, cardsCategory:Object, label: string, orientation:"upright"|"reversed" }}}
 * @property {Object} card - card data
 * @property {Object} cardsCategory - card category data
 * @property {"upright"|"reversed"} [orientation] - orientation type
 * @property {string} [label] - label for the card
 * @property {string} [detail] - details for the card
 * @property {boolean} [faceDown] - card is face down, requires cardsCategory
 */
export default function CardTile({
  card,
  cardsCategory,
  orientation,
  label,
  detail,
  faceDown,
}) {
  const orientationCss = (orientation) =>
    orientation === "reversed" ? " reversed-card" : "";

  // Placeholder when no card is present
  if (!card) {
    return (
      <figure className="card-tile game-card-preview">
        <div className="card-art">?</div>

        <div className="card-info">
          <h2 className="center">No Card</h2>
          <p className="center">Draw from deck</p>
        </div>
      </figure>
    );
  }

  // Card is face down
  if (faceDown) {
    return (
      <figure className="card-tile game-card-preview">
        <img
          className="card-art"
          src={cardsCategory.card_back_url}
          alt="Facedown Card"
        />
        <div className="card-info">
          {label && <h2 className="center">?????</h2>}
          {detail && <p className="center">Facedown Card</p>}
        </div>
      </figure>
    );
  }

  // Card is face up
  return (
    <figure className="card-tile game-card-preview">
      <CardDetailsPopover card={card} orientation={orientation}>
        <img
          className={"card-art" + orientationCss(orientation)}
          src={card.card_front_url}
          alt={(card.name + " " + (orientation ?? "")).trim()}
        />
        <div className="card-info">
          {label && <h2>{label}</h2>}
          {detail && <p>{detail}</p>}
        </div>
      </CardDetailsPopover>
    </figure>
  );
}

/** Popover for card details */
export function CardDetailsPopover({ card, orientation, children }) {
  return (
    <>
      <button className="card-tile" popoverTarget={`card-${card.id}-dialog`}>
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
          {card && (!orientation || orientation === "upright") && (
            <CardOrientationDetails
              card={card}
              label="Upright"
              orientation="upright"
            />
          )}
          {card && (!orientation || orientation === "reversed") && (
            <CardOrientationDetails
              card={card}
              label="Reversed"
              orientation="reversed"
            />
          )}
        </div>
        <button
          className="popover-close"
          popoverTarget={`card-${card.id}-dialog`}
          popoverTargetAction="hide"
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
