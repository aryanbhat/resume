import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter } from "react-router-dom";
import CursorFollower from "./components/CursorFollower.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CursorFollower />
      <Analytics />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
