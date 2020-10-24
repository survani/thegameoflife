import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import LandingPage from "./components/landingpage/LandingPage";
import GamePage from "./components/gamepage/GamePage";
import About from "./components/about/About";

function App() {
  return (
    <>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route exact path="/game">
        <GamePage />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
    </>
  );
}

export default App;
