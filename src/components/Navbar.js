import React, { useContext } from "react";
import logo from "../images/logo.png";
import { Toast } from "react-bootstrap";
import { ToastContext } from "../contexts/ToastContext";
import { NewPizzaContext } from "../contexts/NewPizzaContext";
import { NavLink, Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar(props) {
  const { show, toggleShow } = useContext(ToastContext);
  const { newPizza } = useContext(NewPizzaContext);

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light">
      <div style={{ position: "relative"}} className="container-lg">
        {newPizza && (
          <div
            aria-live="polite"
            aria-atomic="true"
            style={{
              position: "absolute",
              right: "31px",
              top: "90px",
            }}
          >
            <Toast show={show} onClose={toggleShow} delay={3000} autohide>
              <Toast.Header>
                <span style={{ color: "black", fontSize: "15px" }}>
                  +1 {newPizza.name}
                </span>
              </Toast.Header>
            </Toast>
          </div>
        )}

        <Link className="navbar-brand" to="/riccardo">
          <img className="logo" srcSet={logo} alt="riccardo-logo" />
        </Link>

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
              <NavLink
                data-toggle={window.innerWidth > 992 ? "" : "collapse"}
                data-target={
                  window.innerWidth > 992 ? "" : "#navbarSupportedContent"
                }
                exact
                className="nav-link"
                to="/riccardo/pizzas"
              >
                Pizza
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                data-toggle={window.innerWidth > 992 ? "" : "collapse"}
                data-target={
                  window.innerWidth > 992 ? "" : "#navbarSupportedContent"
                }
                exact
                className="nav-link"
                to="/riccardo/obiade"
              >
                Zestawy obiadowe
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                data-toggle={window.innerWidth > 992 ? "" : "collapse"}
                data-target={
                  window.innerWidth > 992 ? "" : "#navbarSupportedContent"
                }
                exact
                className="nav-link"
                to="/riccardo/napoje"
              >
                Napoje
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                data-toggle={window.innerWidth > 992 ? "" : "collapse"}
                data-target={
                  window.innerWidth > 992 ? "" : "#navbarSupportedContent"
                }
                exact
                className="nav-link"
                to="/riccardo/about"
              >
                O nas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                data-toggle={window.innerWidth > 992 ? "" : "collapse"}
                data-target={
                  window.innerWidth > 992 ? "" : "#navbarSupportedContent"
                }
                exact
                className="nav-link"
                to="/riccardo/promocje"
              >
                Promocje
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                data-toggle={window.innerWidth > 992 ? "" : "collapse"}
                data-target={
                  window.innerWidth > 992 ? "" : "#navbarSupportedContent"
                }
                exact
                className="nav-link"
                to="/riccardo/contact"
              >
                Kontakt
              </NavLink>
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
