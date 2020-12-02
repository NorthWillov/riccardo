import React, { useContext } from "react";
import logo from "../images/logo.png";
import { Navbar, Nav, Toast, Container } from "react-bootstrap";
import { ToastContext } from "../contexts/ToastContext";
import { NewPizzaContext } from "../contexts/NewPizzaContext";
import { NavLink, Link } from "react-router-dom";
import "../styles/navbar.css";

export default function NavbarMenu(props) {
  const { show, toggleShow } = useContext(ToastContext);
  const { newPizza } = useContext(NewPizzaContext);

  return (
    <Navbar
      collapseOnSelect
      sticky="top"
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container style={{ position: "relative" }}>
        <Navbar.Brand href="/riccardo">
          <img className="logo" srcSet={logo} alt="riccardo-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/riccardo/pizzas">Pizza</Nav.Link>
            <Nav.Link href="/riccardo/obiade">Zestawy obiade</Nav.Link>
            <Nav.Link href="/riccardo/napoje">Napoje</Nav.Link>
            <Nav.Link href="/riccardo/about">O nas</Nav.Link>
            <Nav.Link href="/riccardo/promocje">Promocje</Nav.Link>
            <Nav.Link href="/riccardo/contact">Kontakt</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/riccardo">
              <button
                onClick={() => console.log(props.cart)}
                className="btn btn-secondary cart mr-2"
              >
                Koszyk{" "}
                {props.cart.length === 0 ? "" : `| ${props.cart.length} `}
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

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
            <Toast
              transition={null} // GIVES WARNING WHILE TRANSITION IS ON
              show={show}
              onClose={toggleShow}
              delay={3000}
              autohide
            >
              <Toast.Header>
                <span style={{ color: "black", fontSize: "15px" }}>
                  +1 {newPizza.name}
                </span>
              </Toast.Header>
            </Toast>
          </div>
        )}
      </Container>
    </Navbar>
  );
}
