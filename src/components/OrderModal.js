import React, { useState, useContext } from "react";
import OrderModalSizeAndDough from "./OrderModalSizeAndDough";
import { ToastContext } from "../contexts/ToastContext";
import { Form } from "react-bootstrap";
import { MENU } from "../utils/constants";
import { formatter } from "../utils/formatter";
import "../styles/orderModal.css";

export default function OrderModal(props) {
  const [size, setSize] = useState("20cm");
  const [dough, setDough] = useState("cieńkie");
  const [extras, setExtras] = useState([]);
  const [extrasSumPrice, setExtrasSumPrice] = useState(0);
  const { toggleShow } = useContext(ToastContext);

  const { newPizza, currIngredients, setCurrIngredients } = props;

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleDoughChange = (e) => {
    setDough(e.target.value);
  };

  const handleIngredientClick = (i) => {
    currIngredients.includes(i)
      ? setCurrIngredients(currIngredients.filter((ing) => ing !== i))
      : setCurrIngredients([...currIngredients, i]);
  };

  const handleExtraIngredientClick = (e) => {
    if (e.target.value !== "Dodaj składnik") {
      const newIngredient = MENU.pizzasIngredients.find(
        (ing) => ing.name === e.target.value
      );
      setExtras([...extras, newIngredient]);
      setExtrasSumPrice(extrasSumPrice + newIngredient.price);
      e.target.value = "Dodaj składnik";
    }
  };

  const handleModalClose = (e) => {
    if (
      e.target.className === "modal fade" ||
      e.target.className === "close-btn" ||
      e.target.className === "close"
    ) {
      setSize("20cm");
      setDough("cieńkie");
      setExtras([]);
      setCurrIngredients([]);
    }
  };

  const handleModalSubmit = () => {
    let newItem = {};

    if (newPizza.id === 18) {
      newItem = { ...newPizza, extras };
    } else {
      newItem = {
        ...newPizza,
        ingredients: currIngredients,
        size,
        dough,
        extras,
        price:
          (size === "20cm" && newPizza.price["20cm"] + extrasSumPrice) ||
          (size === "28cm" && newPizza.price["28cm"] + extrasSumPrice) ||
          (size === "50cm" && newPizza.price["50cm"] + extrasSumPrice),
      };
    }

    props.handleModalSubmit(newItem);
    setSize("20cm");
    setDough("cieńkie");
    setExtras([]);
    setCurrIngredients([]);
    toggleShow();
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      onClick={handleModalClose}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={handleModalClose}
          >
            <span className="close-btn" aria-hidden="true">
              &times;
            </span>
          </button>
          <div className="modal-body">
            <div className="container-fluid">
              <div className="row">
                <div style={{ display: "flex" }} className="col-lg-7">
                  <div className="pizzas-img">
                    <img
                      srcSet="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg"
                      alt="pizza-img"
                    />
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="pizzas-choices">
                    <div className="pizzas-choices-header mt-3 mb-4">
                      <h4>{newPizza.name}</h4>
                      <p>
                        {newPizza.id === 18
                          ? "28cm, średnie"
                          : `${size}, ${dough}`}
                      </p>
                      <ul className="modal-ingredients">
                        {newPizza.ingredients.map((i, idx) => (
                          <li
                            key={i}
                            value={i}
                            className="modal-ingredients-ingredient"
                            onClick={() => handleIngredientClick(i)}
                          >
                            {currIngredients.includes(i) ? (
                              <>
                                <span className="modal-ingredients-ingredient-name">
                                  {i}
                                </span>
                                <svg
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 16 16"
                                  className="bi bi-dash-circle"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
                                  />
                                </svg>
                              </>
                            ) : (
                              <>
                                <span className="modal-ingredients-ingredient-name-deleted">
                                  {i}
                                </span>
                                <svg
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 16 16"
                                  class="bi bi-arrow-return-left"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"
                                  />
                                </svg>
                              </>
                            )}

                            {newPizza.ingredients[idx + 1] && ","}
                          </li>
                        ))}
                      </ul>
                      {extras.length > 0 && (
                        <React.Fragment>
                          <h6>Dodatki:</h6>

                          <ul className="modal-ingredients">
                            {extras.map((el, idx) => (
                              <li
                                key={idx}
                                value={el}
                                className="modal-ingredients-ingredient"
                                onClick={() => console.log(el)}
                              >
                                <span className="modal-ingredients-ingredient-name">
                                  {`${el.name} (+${el.price}zł)`}
                                </span>
                                <svg
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 16 16"
                                  className="bi bi-dash-circle"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
                                  />
                                </svg>
                                {extras[idx + 1] && ","}
                              </li>
                            ))}
                          </ul>
                        </React.Fragment>
                      )}

                      <Form>
                        <Form.Group>
                          <Form.Control
                            onChange={handleExtraIngredientClick}
                            size="sm"
                            as="select"
                            disabled={extras.length >= 5}
                          >
                            <option>Dodaj składnik</option>
                            {MENU.pizzasIngredients.map((i, idx) => (
                              <option key={idx} value={i.name}>
                                {i.name} (+{i.price}pln)
                              </option>
                            ))}
                          </Form.Control>
                        </Form.Group>
                      </Form>
                    </div>

                    <OrderModalSizeAndDough
                      size={size}
                      dough={dough}
                      newPizza={newPizza}
                      handleSizeChange={handleSizeChange}
                      handleDoughChange={handleDoughChange}
                    />

                    <div className="pizzas-choices-footer">
                      <div className="checkout checkout-modal">
                        <span className="modal-price">
                          {newPizza.id === 18
                            ? formatter.format(newPizza.price + extrasSumPrice)
                            : size === "20cm"
                            ? formatter.format(
                                newPizza.price[size] + extrasSumPrice
                              )
                            : size === "28cm"
                            ? formatter.format(
                                newPizza.price[size] + extrasSumPrice
                              )
                            : size === "50cm"
                            ? formatter.format(
                                newPizza.price[size] + extrasSumPrice
                              )
                            : null}
                          zł
                        </span>
                        <button
                          onClick={handleModalSubmit}
                          type="button"
                          data-dismiss="modal"
                          aria-label="Close"
                          className="btn btn-success"
                          style={{ marginRight: "-15.88px" }}
                        >
                          Dodaj{" "}
                          <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            className="bi bi-cart2"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
