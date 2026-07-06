import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
import { AuthProvider } from "./auth/AuthContext.jsx";
import "./styles/index.css";
import { CardsProvider } from "./contexts/CardsContext.jsx";

createRoot(document.getElementById("root")).render(
  <CardsProvider>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </CardsProvider>,
);
