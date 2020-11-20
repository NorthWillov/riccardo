import React from "react";
import Navbar from "./Navbar";
import PizzasList from "./PizzasList";
import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <div className="container-lg">
        <Navbar />
        <PizzasList />
      </div>
    </div>
  );
}

export default App;
