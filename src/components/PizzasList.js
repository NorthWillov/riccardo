import React, { useContext } from "react";
import OrderModal from "./OrderModal";
import { MENU } from "../utils/constants";
import { ToastContext } from "../contexts/ToastContext";
import { NewPizzaContext } from "../contexts/NewPizzaContext";

export default function PizzasList(props) {
  const { newPizza, setNewPizza } = useContext(NewPizzaContext);
  const { toggleShow } = useContext(ToastContext);

  const handleClick = (pizza) => {
    setNewPizza(pizza);
  };

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
                  <p className="checkout-price">
                    od {pizza.id === 18 ? "23.50" : pizza.price.small}
                    pln
                  </p>
                  <button
                    onClick={() => handleClick(pizza)}
                    className="btn btn-outline-dark"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Wybierz
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {newPizza && (
          <OrderModal
            newPizza={newPizza}
            handleModalSubmit={(newItem) => {
              props.handleModalSubmit(newItem);
              toggleShow();
            }}
          />
        )}
      </div>
    </>
  );
}
