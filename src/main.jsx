import React from "react";
import ReactDom from "react-dom/client";
import "./style/index.css";
import "/src/Components/HeroCard/HeroCard.css";
import "/src/Components/HeroCard/HeroCard.jsx";
import App from "./App.jsx";

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
