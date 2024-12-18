import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import "./Pages/Dashboard/dashboard.css";
import "./Pages/Website/Auth/login.css";
import "./Components/Header/navbar.css";
import "./all.min.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Router>
      <App />
    </Router>
  </div>
);
