import { StrictMode } from "react";
import  ReactDOM  from "react";
import "./style.css";
import App from "../App";
import { BrowserRouter as Router } from "react-router-dom";

// Wrap App components with Router components to enable the router features
ReactDOM.render(
  <StrictMode>
    <Router>
      <App/>
    </Router>
  </StrictMode>,
  document.getElementById("root")
);