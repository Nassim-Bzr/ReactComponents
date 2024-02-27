import { useState } from "react";


import "./App.css";
import Instructions from "./components/Instructions";
import Ingredients from "./components/Ingredients";
import PreparationTime from "./components/PreparationTime";
import Header from "./components/Header";
import Nutrition from "./components/Nutrition";


function App() {
  return (
    <div className="div-home">
      <div className="container">
        <Header />
        <PreparationTime />
        <Ingredients />
        <Instructions />
        <Nutrition />
      </div>
    </div>
  );
}

export default App;
