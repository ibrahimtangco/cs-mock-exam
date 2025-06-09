import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InvalidURL from "./pages/InvalidURL.jsx";
import ComingSoon from "./pages/ComingSoon.jsx";
import QuizPage from "./pages/QuizPage.jsx";
import ModePages from "./pages/ModesPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<App />} />
        <Route path="*" element={<InvalidURL />} />
        <Route path="/category/:slug" element={<ModePages />} />
        <Route path="/category/:slug/:mode" element={<QuizPage />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
