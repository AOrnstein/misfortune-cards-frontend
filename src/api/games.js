const API = import.meta.env.VITE_API;

export async function getGames() {
  try {
    const response = await fetch(API + "/users/:id/games");
    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
    return [];
  }
}

export async function getGame(id) {
  try {
    const response = await fetch(API + "/games/" + id);
    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
    return null;
  }
}

export async function createGame() {
  try {
    const response = await fetch(API + "/games");
    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
    return [];
  }
}

export async function dismissPlayer(id) {
  try {
    const response = await fetch(API + "/games/" + id);
    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
    return null;
  }
}
