import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QuizContextProvider } from "./QuizContext/QuizContext.jsx";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QuizContextProvider>
      <App />
    </QuizContextProvider>
  </StrictMode>
);
