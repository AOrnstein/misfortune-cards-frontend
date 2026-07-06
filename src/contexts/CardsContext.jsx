import { useEffect, useState } from "react";
import { getCards } from "../api/cards";
import cardImgUrl from "../utils/cardImgUrl";
import { CardsContext } from "./cards-context";

// Fallback category has a local default card back url
const FALLBACK_CATEGORY = { card_back_url: "/src/data/cardback.webp" };

export function CardsProvider({ children }) {
  const [cards, setCards] = useState([]);
  const [cardsCategory, setCardsCategory] = useState(FALLBACK_CATEGORY);

  // Initialize the default cards and card category
  useEffect(() => {
    const syncCards = async () => {
      const data = await getCards();

      // construct the URL for the card back image
      if (data.category) {
        data.category.card_back_url = cardImgUrl(data.category.card_back_url);
        setCardsCategory(data.category);
      } else {
        setCardsCategory(FALLBACK_CATEGORY);
      }

      // construct the URL for each card image
      data.cards.forEach((card) => {
        card.card_front_url = cardImgUrl(card.card_front_url);
      });
      setCards(data.cards);
    };
    syncCards();
  }, []);

  const value = { cardsCategory, cards };
  return (
    <CardsContext.Provider value={value}>{children}</CardsContext.Provider>
  );
}
