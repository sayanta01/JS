import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
// import App from "./Event-Handling.jsx";
// import App from "./Exercise.jsx";
import App from "./Anecdotes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
