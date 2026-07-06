const API = import.meta.env.VITE_API;

/** get card category and list of cards  */
export async function getCards() {
  try {
    const response = await fetch(API + "/cards");
    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
    return { category: null, cards: [] };
  }
}
