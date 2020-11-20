import React from "react";
import { MENU } from "../utils/constants";

export default function PizzasList(props) {
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
                  <button
                    onClick={() => props.handleClick(pizza)}
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
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="pizzas-img">
                        <img srcSet="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg" />
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="pizzas-choices">
                        <div className="pizzas-choices-header">
                          <h4>Margherita</h4>
                          <p>20cm</p>
                          <p>sos, ser, oregano</p>
                          <div className="pizza-choices-size">
                            <div className="form-check form-check-inline">
                              Rozmiar:
                              <input
                                className="form-check-input"
                                type="radio"
                                name="size"
                                id="size1"
                                value="option1"
                                defaultChecked
                              />
                              <label
                                className="form-check-label"
                                htmlFor="size1"
                              >
                                20cm
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="size"
                                id="size2"
                                value="option2"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="size2"
                              >
                                28cm
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="size"
                                id="size3"
                                value="option3"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="size3"
                              >
                                50cm
                              </label>
                            </div>
                          </div>
                          <div className="pizza-choices-dough">
                            <div className="form-check form-check-inline">
                              Ciasto:
                              <input
                                className="form-check-input"
                                type="radio"
                                name="dough"
                                id="dough1"
                                value="option1"
                                defaultChecked
                              />
                              <label
                                className="form-check-label"
                                htmlFor="dough1"
                              >
                                cieńkie
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="dough"
                                id="dough2"
                                value="option2"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="dough2"
                              >
                                średnie
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="dough"
                                id="dough3"
                                value="option3"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="dough3"
                              >
                                duże
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="pizzas-choices-footer">
                          <div className="checkout checkout-modal">
                            <span>9.50 PLN</span>
                            <button type="button" className="btn btn-success">
                              Dodaj do koszyka
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
      </div>
    </>
  );
}
