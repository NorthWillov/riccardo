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
import { CartContext } from "../contexts/CartContext";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/mainNavbarStyles";

function MainNavbar(props) {
  const { cart } = useContext(CartContext);
  const { show, toggleShow } = useContext(ToastContext);
  const { newPizza } = useContext(NewPizzaContext);

  const { classes } = props;

  return (
    <Navbar
      className={classes.navbar}
      bg="light"
      variant="light"
      expand="lg"
      sticky="top"
      collapseOnSelect
    >
      <Container style={{ position: "relative" }} fluid="lg">
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
          <img className={classes.logo} srcSet={logo} alt="riccardo-logo" />
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
              onClick={() => console.log(cart)}
              className="mr-3 ml-2"
              style={{ maxWidth: "120px" }}
              variant="dark"
            >
              Koszyk {cart.length === 0 ? "" : `| ${cart.length} `}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default withStyles(styles)(MainNavbar);
