import React from "react";
import { MENU } from "../utils/constants";

export default function PizzasList() {
  return (
    <>
      <h3 className="title">Pizzy</h3>
      <div className="row">
        {MENU.pizzas.map((pizza) => (
          <div className="col-md-6 col-lg-4" key={pizza.name}>
            <div className="card">
              <img
                className="card-img-top"
                srcSet={pizza.image}
                alt={pizza.name}
              />
              <div className="card-body">
                <h5 className="card-title">{pizza.name}</h5>
                <p className="card-text">
                  {pizza.ingredients.map((i, idx) => (
                    <span key={i}>
                      {pizza.ingredients[idx + 1] ? i + ", " : i}
                    </span>
                  ))}
                </p>
                <div className="checkout">
                  <p className="checkout-price">od {pizza.price.small}pln</p>
                  <a href="#" className="btn btn-primary">
                    Wybierz
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
