import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Navigation from "./components/Core/Navigation";
import Main from "./components/Core/Main";
import Notification from "./components/Core/Notification";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Main />
        <Notification />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
