import React from "react";
import { MENU } from "../utils/constants";
import { formatter } from "../utils/formatter";
import "../styles/popular.css";

function Popular(props) {
  const { handlePopularClick } = props;
  return (
    <>
      <h3 className="mt-5 mb-4">Popularne:</h3>
      <div className="row">
        <div className="col-6 col-sm-4 col-md-3">
          <div
            className="popular-card card mb-3"
            onClick={() => handlePopularClick(MENU.pizzas[0])}
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <div className="row no-gutters">
              <div className="col-md-5">
                <img
                  src={MENU.pizzas[0].image}
                  className="card-img"
                  alt="pizza"
                />
              </div>
              <div className="col-md-7" style={{ display: "flex" }}>
                <div className="card-body-popular card-body">
                  <h5 className="card-title-popular card-title">
                    {MENU.pizzas[0].name}
                  </h5>
                  <p className="card-text">
                    Od {formatter.format(MENU.pizzas[0].price["20cm"])}zł
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-4 col-md-3">
          <div
            className="popular-card card mb-3"
            onClick={() => handlePopularClick(MENU.pizzas[2])}
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <div className="row no-gutters">
              <div className="col-md-5">
                <img
                  src={MENU.pizzas[2].image}
                  className="card-img"
                  alt="pizza"
                />
              </div>
              <div className="col-md-7" style={{ display: "flex" }}>
                <div className="card-body-popular card-body">
                  <h5 className="card-title-popular card-title">
                    {MENU.pizzas[2].name}
                  </h5>
                  <p className="card-text">
                    Od {formatter.format(MENU.pizzas[2].price["20cm"])}zł
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-4 col-md-3">
          <div
            className="popular-card card mb-3"
            onClick={() => handlePopularClick(MENU.pizzas[13])}
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <div className="row no-gutters">
              <div className="col-md-5">
                <img
                  src={MENU.pizzas[13].image}
                  className="card-img"
                  alt="pizza"
                />
              </div>
              <div className="col-md-7" style={{ display: "flex" }}>
                <div className="card-body-popular card-body">
                  <h5 className="card-title-popular card-title">
                    {MENU.pizzas[13].name}
                  </h5>
                  <p className="card-text">
                    Od {formatter.format(MENU.pizzas[13].price["20cm"])}zł
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-4 col-md-3">
          <div
            className="popular-card card mb-3"
            onClick={() => handlePopularClick(MENU.pizzas[10])}
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <div className="row no-gutters">
              <div className="col-md-5">
                <img
                  src={MENU.pizzas[10].image}
                  className="card-img"
                  alt="pizza"
                />
              </div>
              <div className="col-md-7" style={{ display: "flex" }}>
                <div className="card-body-popular card-body">
                  <h5 className="card-title-popular card-title">
                    {MENU.pizzas[10].name}
                  </h5>
                  <p className="card-text">
                    Od {formatter.format(MENU.pizzas[10].price["20cm"])}zł
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Popular;
