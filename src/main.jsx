import { scan } from "react-scan";
scan({ enabled: true });

import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import "./globals/global.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
