import { Route, Routes } from "react-router";

import Login from "./auth/Login";
import Register from "./auth/Register";
import Layout from "./layout/Layout";

import Welcome from "./pages/Welcome";
import Dashboard from "./pages/Dashboard";
import Compendium from "./pages/Compendium";
import CardDetails from "./pages/CardDetails";
import DeckBuilder from "./pages/DeckBuilder";
import Games from "./pages/Games";
import GameDetails from "./components/games/GameDetails";
import PlayerView from "./pages/PlayerView";
import DmView from "./pages/DmView";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/compendium" element={<Compendium />} />
        <Route path="/cards/:cardId" element={<CardDetails />} />
        <Route path="/deck-builder" element={<DeckBuilder />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/:id" element={<GameDetails />} />
        <Route path="/game/player" element={<PlayerView />} />
        <Route path="/game/dm" element={<DmView />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}
