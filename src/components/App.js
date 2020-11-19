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
        <div className="row">
          {MENU.pizzas.map((pizza) => (
            <div className="col-md-4" key={pizza.id}>
              <div className="pizza-card">
                <img srcSet={pizza.image} alt={pizza.name}></img>
                <h1>{pizza.name}</h1>
                <p>Od {pizza.price.small} pln</p>
                <div>
                  {pizza.ingredients.map((i) => (
                    <span key={i}>{i + " "}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
