import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import "/src/Components/HeroCard/HeroCard.css";
import "/src/Components/HeroCard/HeroCard.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
