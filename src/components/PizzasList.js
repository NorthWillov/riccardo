import React from "react";
import { MENU } from "../utils/constants";

export default function PizzasList() {
  return (
    <>
      <h3 className="title">Pizzy</h3>
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
    </>
  );
}
