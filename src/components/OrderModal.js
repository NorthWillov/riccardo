import React, { useState, useContext } from "react";
import { ToastContext } from "../contexts/ToastContext";
import "../styles/orderModal.css";

export default function OrderModal(props) {
  const [size, setSize] = useState("20cm");
  const [dough, setDough] = useState("cieńkie");
  const { toggleShow } = useContext(ToastContext);

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleDoughChange = (e) => {
    setDough(e.target.value);
  };

  const handleModalClose = (e) => {
    if (
      e.target.className === "modal fade" ||
      e.target.className === "close-btn" ||
      e.target.className === "close"
    ) {
      setSize("20cm");
      setDough("cieńkie");
    }
  };

  const handleModalSubmit = () => {
    let newItem = {};

    if (props.newPizza.id === 18) {
      newItem = newPizza;
    } else {
      newItem = {
        ...props.newPizza,
        size,
        dough,
        price:
          (size === "20cm" && newPizza.price.small) ||
          (size === "28cm" && newPizza.price.medium) ||
          (size === "50cm" && newPizza.price.big),
      };
    }

    props.handleModalSubmit(newItem);
    setSize("20cm");
    setDough("cieńkie");
    toggleShow();
  };

  const { newPizza } = props;
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
                <div className="col-lg-7">
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
                      <p>
                        {newPizza.ingredients.map((i, idx) => (
                          <span key={i}>
                            {newPizza.ingredients[idx + 1] ? i + ", " : i}
                          </span>
                        ))}
                      </p>
                    </div>
                    <h6>Rozmiar:</h6>
                    <div className="group" onChange={handleSizeChange}>
                      <input
                        type="radio"
                        name="rb-size"
                        id="rb1"
                        checked={size === "20cm"}
                        value="20cm"
                        disabled={newPizza.name === "Calzone (Pierog)"}
                        readOnly
                      />
                      <label htmlFor="rb1">20cm</label>
                      <input
                        type="radio"
                        name="rb-size"
                        id="rb2"
                        value="28cm"
                        checked={
                          size === "28cm" ||
                          newPizza.name === "Calzone (Pierog)"
                        }
                        readOnly
                      />
                      <label htmlFor="rb2">28cm</label>
                      <input
                        type="radio"
                        name="rb-size"
                        id="rb3"
                        value="50cm"
                        checked={size === "50cm"}
                        disabled={
                          dough === "grube" ||
                          newPizza.name === "Calzone (Pierog)"
                        }
                        readOnly
                      />
                      <label htmlFor="rb3">50cm</label>
                    </div>
                    <h6>Ciasto:</h6>
                    <div className="group" onChange={handleDoughChange}>
                      <input
                        type="radio"
                        name="rb-dough"
                        id="rb4"
                        value="cieńkie"
                        checked={dough === "cieńkie"}
                        disabled={newPizza.name === "Calzone (Pierog)"}
                        readOnly
                      />
                      <label htmlFor="rb4">cieńkie</label>
                      <input
                        type="radio"
                        name="rb-dough"
                        id="rb5"
                        value="średnie"
                        checked={
                          dough === "średnie" ||
                          newPizza.name === "Calzone (Pierog)"
                        }
                        readOnly
                      />
                      <label htmlFor="rb5">średnie</label>
                      <input
                        type="radio"
                        name="rb-dough"
                        id="rb6"
                        value="grube"
                        checked={dough === "grube"}
                        disabled={
                          size === "50cm" ||
                          newPizza.name === "Calzone (Pierog)"
                        }
                        readOnly
                      />
                      <label htmlFor="rb6">grube</label>
                    </div>
                    <div className="pizzas-choices-footer">
                      <div className="checkout checkout-modal">
                        <span className="modal-price">
                          {newPizza.id === 18
                            ? newPizza.price
                            : size === "20cm"
                            ? newPizza.price.small
                            : size === "28cm"
                            ? newPizza.price.medium
                            : size === "50cm"
                            ? newPizza.price.big
                            : null}
                          pln
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
