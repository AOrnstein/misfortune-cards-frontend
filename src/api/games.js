const API = import.meta.env.VITE_API;

export async function getGames(token) {
  try {
    const response = await fetch(API + "/games", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
    return [];
  }
}

export async function getGame(token, id) {
  try {
    const response = await fetch(API + "/games/" + id, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
    return null;
  }
}

export async function createGame(token, name) {
  try {
    const response = await fetch(API + "/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name }),
    });
    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
    return null;
  }
}

export async function joinGame(token, inviteCode) {
  try {
    const response = await fetch(API + "/games/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ inviteCode }),
    });
    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
    return null;
  }
}

export async function regenerateCode(token, id) {
  try {
    const response = await fetch(API + "/games/" + id + "/invite-code", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    });
    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
    return null;
  }
}

export async function dismissPlayer(token, gameId, playerId) {
  const response = await fetch(
    API + "/games/" + gameId + "/players/" + playerId,
    {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    },
  );

  if (!response.ok) {
    const result = await response.json();
    throw Error(result.message);
  }
}

export async function deleteGame(token, gameId) {
  const response = await fetch(API + "/games/" + gameId, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) {
    const result = await response.json();
    throw Error(result.message);
  }
}
