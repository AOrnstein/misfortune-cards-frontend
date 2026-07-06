import { NavLink } from "react-router";

import { useAuth } from "../auth/useAuth";

export default function Navbar() {
  const { token, logout } = useAuth();

  return (
    <nav id="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/compendium">Cards</NavLink>
      <NavLink to="/deck-builder">Decks</NavLink>
      <NavLink to="/games">Games</NavLink>

      {token ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
    </nav>
  );
}
