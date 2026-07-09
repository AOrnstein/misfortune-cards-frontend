const API = import.meta.env.VITE_API;

/** Receives the user's token and the game ID. */
export async function getDeck(token, gameId) {
    if (!token) {
        throw Error("You must be signed in to view the deck.");
    }

    const response = await fetch(API + "/games/" + gameId + "/deck", {
      headers: { 
        Authorization: "Bearer " + token,
      },
    });
    
    if (!response.ok) {
        const result = await response.json();
        throw Error(result.message);
    }

    return await response.json();
}

/**  */
export async function addCardToDeck(token, gameId, cardId) {
    if (!token) {
        throw Error("You must be signed in to add a card to the deck.");
    }

    const response = await fetch(API + "/games/" + gameId + "/deck", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
        body: JSON.stringify({ cardId }),
    });

    if (!response.ok) {
        const result = await response.json();
        throw Error(result.message);
    }

    return await response.json();
}
    
export async function removeCardFromDeck(token, gameId, cardId) {
    if (!token) {
        throw Error("You must be signed in to remove a card from the deck.");
    }

    const response = await fetch(
        API + "/games/" + gameId + "/deck/" + cardId, 
        {
            method: "DELETE",
            headers: { 
                Authorization: "Bearer " + token, 
            },
        }
    );

    if (!response.ok) {
        const result = await response.json();
        throw Error(result.message);
    }

}