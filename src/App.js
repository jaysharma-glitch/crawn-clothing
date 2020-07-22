import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./page/homepage/homepage.components";
import "./App.css";

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
    </div>
  );
}

export default App;
