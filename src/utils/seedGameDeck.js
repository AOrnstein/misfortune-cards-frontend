import { getDeck, addCardToDeck } from "../api/decks";
import { getCards } from "../api/cards";

export async function seedGameDeck(token, gameId) {
    const deck = await getDeck(token, gameId);

    if (deck.length > 0) {
            return deck;
    }

    const { cards } = await getCards();

    for (const card of cards) {
        await addCardToDeck(token, gameId, card.id);
    }

    return getDeck(token, gameId);
} 
