import React, { useContext } from "react";
import OrderModal from "./OrderModal";
import { MENU } from "../utils/constants";
import { NewPizzaContext } from "../contexts/NewPizzaContext";
import { CurrIngredientsContext } from "../contexts/CurrIngredientsContext";
import { formatter } from "../utils/formatter";
import "../styles/pizzaList.css";

export default function PizzasList(props) {
  const { newPizza, setNewPizza } = useContext(NewPizzaContext);
  const { currIngredients, setCurrIngredients } = useContext(
    CurrIngredientsContext
  );

  const handleClick = (pizza) => {
    setCurrIngredients(pizza.ingredients);
    setNewPizza(pizza);
  };

  return (
    <>
      <h3 className="title">Pizzy</h3>
      <div className="row">
        {MENU.pizzas.map((pizza) => (
          <React.Fragment key={pizza.name}>
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
              <div className="card card-pizzas">
                <img
                  className="card-img-top"
                  srcSet={pizza.image}
                  alt={pizza.name}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {pizza.id}. {pizza.name}
                  </h5>
                  <p className="card-text card-text-pizzas">
                    {pizza.id !== 22
                      ? pizza.ingredients.map((i, idx) => (
                          <span key={i}>
                            {pizza.ingredients[idx + 1] ? i + ", " : i}
                          </span>
                        ))
                      : "sos, ser, +5 własnych składników do wyboru"}
                  </p>
                  <div className="checkout">
                    <p className="checkout-price">
                      od{" "}
                      {pizza.id === 18
                        ? formatter.format(pizza.price)
                        : formatter.format(pizza.price["20cm"])}
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
          </React.Fragment>
        ))}
        {newPizza && (
          <OrderModal
            setCurrIngredients={setCurrIngredients}
            currIngredients={currIngredients}
            newPizza={newPizza}
            handleModalSubmit={props.handleModalSubmit}
          />
        )}
      </div>
    </>
  );
}
