import React from "react";
import Navbar from "./Navbar";
import { MENU } from "../utils/constants";
import "../styles/App.css";

function App() {
  console.log(MENU);
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        {MENU.pizzas.map((pizza) => (
          <div>
            <img srcSet={pizza.image}></img>
            <h1>{pizza.name}</h1>
            <p>Od {pizza.price.small} pln</p>
            <div>
              {pizza.ingredients.map((i) => (
                <span>{i + " "}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
