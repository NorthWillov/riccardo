import React, { useContext } from "react";
import logo from "../images/logo.png";
import {
  Toast,
  Navbar,
  NavDropdown,
  Nav,
  Container,
  Button,
} from "react-bootstrap";
import { ToastContext } from "../contexts/ToastContext";
import { NewPizzaContext } from "../contexts/NewPizzaContext";
import "../styles/navbar.css";

export default function MainNavbar(props) {
  const { show, toggleShow } = useContext(ToastContext);
  const { newPizza } = useContext(NewPizzaContext);

  return (
    <Navbar bg="light" expand="lg" sticky="top" collapseOnSelect>
      <Container style={{ position: "relative" }}>
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
        <Navbar.Brand href="#home">
          <img className="logo" srcSet={logo} alt="riccardo-logo" />
        </Navbar.Brand>
        <Navbar.Toggle className="mr-2" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="#pizzas">Pizza</NavDropdown.Item>
              <NavDropdown.Item href="#zestawy">
                Zestawy obiadowe
              </NavDropdown.Item>
              <NavDropdown.Item href="#makarony">Makarony</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#salatki">Sałatki</NavDropdown.Item>
              <NavDropdown.Item href="#nalesniki">Naleśniki</NavDropdown.Item>
              <NavDropdown.Item href="#sosy">Sosy</NavDropdown.Item>
              <NavDropdown.Item href="#startery">Startery</NavDropdown.Item>
              <NavDropdown.Item href="#Napoje">Napoje</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#about">O nas</Nav.Link>
            <Nav.Link href="#promocje">Promocje</Nav.Link>
            <Nav.Link href="#contact">Kontakt</Nav.Link>
          </Nav>
          <Nav>
            <Button
              className="mr-3 ml-2"
              style={{ maxWidth: "120px" }}
              variant="dark"
            >
              Koszyk {props.cart.length === 0 ? "" : `| ${props.cart.length} `}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
