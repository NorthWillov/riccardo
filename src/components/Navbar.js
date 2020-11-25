import React, { useContext, useState } from "react";
import logo from "../images/logo.png";
import { Toast } from "react-bootstrap";
import { ToastContext } from "../contexts/ToastContext";
import { NewPizzaContext } from "../contexts/NewPizzaContext";

export default function Navbar(props) {
  const { show, toggleShow } = useContext(ToastContext);
  const { newPizza } = useContext(NewPizzaContext);

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light">
      <div className="container-lg">
        {newPizza && (
          <div
            aria-live="polite"
            aria-atomic="true"
            style={{
              position: "fixed",
              top: "11%",
              right: "12.5%",
            }}
          >
            <Toast
              show={show}
              onClose={() => toggleShow()}
              delay={3000}
              autohide
            >
              <Toast.Header>
                <strong className="mr-auto">+1 {newPizza.name}</strong>
              </Toast.Header>
            </Toast>
          </div>
        )}

        <a className="navbar-brand" href="#">
          <img className="logo" srcSet={logo} alt="riccardo-logo" />
        </a>
        <button
          className="navbar-toggler mr-1"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Zamów online
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                O nas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Promocje
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Kontakt
              </a>
            </li>
          </ul>
          <button
            onClick={() => console.log(props.cart)}
            className="btn btn-secondary cart mr-3"
          >
            Koszyk {props.cart.length === 0 ? "" : `| ${props.cart.length} `}
          </button>
        </div>
      </div>
    </nav>
  );
}
