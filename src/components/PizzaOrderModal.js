import React, { useState, useContext } from "react";
import PizzaOrderModalSizeAndDough from "./PizzaOrderModalSizeAndDough";
import PizzaOrderModalIngredients from "./PizzaOrderModalIngredients";
import PizzaOrderModalFantazjaCase from "./PizzaOrderModalFantazjaCase";
import { CurrIngredientsContext } from "../contexts/CurrIngredientsContext";
import { NewPizzaContext } from "../contexts/NewPizzaContext";
import { CartContext } from "../contexts/CartContext";
import { ToastContext } from "../contexts/ToastContext";
import { Modal, Button, Row, Col } from "react-bootstrap";
import { MENU } from "../utils/constants";
import { formatter } from "../utils/formatter";
import { v4 as uuidv4 } from "uuid";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/pizzaOrderModalStyles";

function PizzaOrderModal(props) {
  const [size, setSize] = useState("20cm");
  const [dough, setDough] = useState("cieńkie");
  const [extras, setExtras] = useState([]);
  const [extrasSumPrice, setExtrasSumPrice] = useState(0);
  const [fantazjaExtras, setFantazjaExtras] = useState({});
  
  const { toggleShow } = useContext(ToastContext);
  const { cart, setCart } = useContext(CartContext);
  const { currIngredients, setCurrIngredients } = useContext(
    CurrIngredientsContext
  );
  const { newPizza } = useContext(NewPizzaContext);

  const { classes } = props;

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

  const handleExtraIngredientClick = (i) => {
    setExtras(extras.filter((ing) => ing.id !== i.id));
    setExtrasSumPrice(extrasSumPrice - i.price);
  };

  const handleExtraIngredientInputClick = (e) => {
    if (e.target.value !== "Dodaj składnik") {
      let newIngredient = MENU.pizzasIngredients.find(
        (ing) => ing.name === e.target.value
      );
      newIngredient = { ...newIngredient, id: uuidv4() };
      setExtras([...extras, newIngredient]);
      setExtrasSumPrice(extrasSumPrice + newIngredient.price);
      e.target.value = "Dodaj składnik";
    }
  };

  const handleFantazjaInputClick = (e) => {
    if (e.target.value !== "Wybierz składnik") {
      let newIngredient = MENU.pizzasIngredients.find(
        (ing) => ing.name === e.target.value
      );
      newIngredient = { ...newIngredient, id: uuidv4() };
      setFantazjaExtras({
        ...fantazjaExtras,
        [e.target.name]: newIngredient.name,
      });
    } else {
      setFantazjaExtras({
        ...fantazjaExtras,
        [e.target.name]: "",
      });
    }
  };

  const handleModalClose = () => {
    props.onHide();
    setSize("20cm");
    setDough("cieńkie");
    setExtras([]);
    setFantazjaExtras({});
    setExtrasSumPrice(0);
    setCurrIngredients([]);
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
        extras: newPizza.id === 22 ? Object.values(fantazjaExtras) : extras,
        price:
          (size === "20cm" && newPizza.price["20cm"] + extrasSumPrice) ||
          (size === "28cm" && newPizza.price["28cm"] + extrasSumPrice) ||
          (size === "50cm" && newPizza.price["50cm"] + extrasSumPrice),
      };
    }

    setCart([...cart, newItem]);
    props.onHide();
    setSize("20cm");
    setDough("cieńkie");
    setExtras([]);
    setExtrasSumPrice(0);
    setCurrIngredients([]);
    setFantazjaExtras({});
    toggleShow();
  };

  return (
    <Modal
      {...props}
      onHide={handleModalClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Row>
          <Col lg={7}>
            <img className={classes.modalPizzaImage} src={newPizza.image} />
          </Col>
          <Col
            lg={5}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Modal.Title>{newPizza.name}</Modal.Title>
              <p>
                {newPizza.id === 18 ? "28cm, średnie" : `${size}, ${dough}`}
              </p>
              {newPizza.id === 22 ? (
                <PizzaOrderModalFantazjaCase
                  extras={extras}
                  newPizza={newPizza}
                  currIngredients={currIngredients}
                  handleIngredientClick={handleIngredientClick}
                  handleFantazjaInputClick={handleFantazjaInputClick}
                  handleExtraIngredientClick={handleExtraIngredientClick}
                />
              ) : (
                <PizzaOrderModalIngredients
                  extras={extras}
                  handleIngredientClick={handleIngredientClick}
                  handleExtraIngredientInputClick={
                    handleExtraIngredientInputClick
                  }
                  handleExtraIngredientClick={handleExtraIngredientClick}
                />
              )}

              <PizzaOrderModalSizeAndDough
                size={size}
                dough={dough}
                newPizza={newPizza}
                handleSizeChange={handleSizeChange}
                handleDoughChange={handleDoughChange}
              />
            </div>

            <div className={classes.checkout}>
              <span className={classes.modalPrice}>
                {newPizza.id === 18
                  ? formatter.format(newPizza.price + extrasSumPrice)
                  : size === "20cm"
                  ? formatter.format(newPizza.price[size] + extrasSumPrice)
                  : size === "28cm"
                  ? formatter.format(newPizza.price[size] + extrasSumPrice)
                  : size === "50cm"
                  ? formatter.format(newPizza.price[size] + extrasSumPrice)
                  : null}
                zł
              </span>
              <Button
                variant="success"
                onClick={handleModalSubmit}
                type="button"
              >
                Dodaj{" "}
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className={`bi bi-cart2 ${classes.icon}`}
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
                  />
                </svg>
              </Button>
            </div>
          </Col>
        </Row>
      </Modal.Header>
    </Modal>
  );
}

export default withStyles(styles)(PizzaOrderModal);
