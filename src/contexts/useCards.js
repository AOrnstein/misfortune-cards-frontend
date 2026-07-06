import { useContext } from "react";
import { CardsContext } from "./cards-context";

export function useCards() {
  const context = useContext(CardsContext);
  if (!context) throw Error("useCards must be used within CardsProvider");
  return context;
}
