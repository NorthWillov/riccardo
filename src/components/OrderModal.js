import React, { useState } from "react";

export default function OrderModal(props) {
  const [size, setSize] = useState("20cm");
  const [dough, setDough] = useState("cieńkie");

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  const handleDoughChange = (e) => {
    setDough(e.target.value);
  };

  const { newPizza } = props;
  return (
    <>
      {newPizza && (
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
                          <h4>{newPizza.name}</h4>
                          <p>
                            {`${size}, ${dough}`}Î
                          </p>
                          <p>
                            {newPizza.ingredients.map((i, idx) => (
                              <span key={i}>
                                {newPizza.ingredients[idx + 1] ? i + ", " : i}
                              </span>
                            ))}
                          </p>

                          <div className="pizza-choices-size">
                            Rozmiar:
                            <div
                              className="form-check form-check-inline"
                              onChange={handleSizeChange}
                            >
                              <input
                                className="form-check-input"
                                type="radio"
                                name="size"
                                id="size1"
                                value="20cm"
                                checked={size === "20cm"}
                                defaultChecked
                              />
                              <label
                                className="form-check-label"
                                htmlFor="size1"
                              >
                                20cm
                              </label>
                            </div>
                            <div
                              className="form-check form-check-inline"
                              onChange={handleSizeChange}
                            >
                              <input
                                className="form-check-input"
                                type="radio"
                                name="size"
                                id="size2"
                                value="28cm"
                                checked={size === "28cm"}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="size2"
                              >
                                28cm
                              </label>
                            </div>
                            <div
                              className="form-check form-check-inline"
                              onChange={handleSizeChange}
                            >
                              <input
                                className="form-check-input"
                                type="radio"
                                name="size"
                                id="size3"
                                value="50cm"
                                checked={size === "50cm"}
                                disabled={dough === "grube"}
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
                            Ciasto:
                            <div
                              className="form-check form-check-inline"
                              onChange={handleDoughChange}
                            >
                              <input
                                className="form-check-input"
                                type="radio"
                                name="dough"
                                id="dough1"
                                value="cieńkie"
                                checked={dough === "cieńkie"}
                                defaultChecked
                              />
                              <label
                                className="form-check-label"
                                htmlFor="dough1"
                              >
                                cieńkie
                              </label>
                            </div>
                            <div
                              className="form-check form-check-inline"
                              onChange={handleDoughChange}
                            >
                              <input
                                className="form-check-input"
                                type="radio"
                                name="dough"
                                id="dough2"
                                value="średnie"
                                checked={dough === "średnie"}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="dough2"
                              >
                                średnie
                              </label>
                            </div>
                            <div
                              className="form-check form-check-inline"
                              onChange={handleDoughChange}
                            >
                              <input
                                className="form-check-input"
                                type="radio"
                                name="dough"
                                id="dough3"
                                value="grube"
                                checked={dough === "grube"}
                                disabled={size === "50cm"}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="dough3"
                              >
                                grube
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
      )}
    </>
  );
}
