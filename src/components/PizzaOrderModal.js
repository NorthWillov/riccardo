import React, { useState, useContext } from "react";
import PizzaOrderModalSizeAndDough from "./PizzaOrderModalSizeAndDough";
import PizzaOrderModalIngredients from "./PizzaOrderModalIngredients";
import PizzaOrderModalFantazjaCase from "./PizzaOrderModalFantazjaCase";
import { CurrIngredientsContext } from "../contexts/CurrIngredientsContext";
import { NewItemContext } from "../contexts/NewItemContext";
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
  const { newItem } = useContext(NewItemContext);

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
        [e.target.name]: newIngredient,
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
    let newPosItem = {};

    if (newItem.id === 18) {
      newPosItem = { ...newItem, quantity: 1, extras, uniqId: uuidv4() };
    } else {
      newPosItem = {
        ...newItem,
        uniqId: uuidv4(),
        ingredients: currIngredients,
        size,
        dough,
        extras: newItem.id === 22 ? Object.values(fantazjaExtras) : extras,
        quantity: 1,
        price:
          (size === "20cm" && newItem.price["20cm"] + extrasSumPrice) ||
          (size === "28cm" && newItem.price["28cm"] + extrasSumPrice) ||
          (size === "50cm" && newItem.price["50cm"] + extrasSumPrice),
      };
    }

    setCart([...cart, newPosItem]);
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
      <Modal.Body>
        <Row>
          <Col lg={7} style={{ display: "flex" }}>
            <img
              className={`ml-2 ${classes.modalPizzaImage}`}
              src={newItem.image}
              alt="pizza"
            />
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
              <Modal.Title>{newItem.name}</Modal.Title>
              <p>{newItem.id === 18 ? "28cm, średnie" : `${size}, ${dough}`}</p>

              {newItem.id === 22 ? (
                <PizzaOrderModalFantazjaCase
                  extras={extras}
                  newItem={newItem}
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
                newItem={newItem}
                handleSizeChange={handleSizeChange}
                handleDoughChange={handleDoughChange}
              />
            </div>

            <div className={classes.checkout}>
              <Button
                variant="outline-secondary"
                onClick={handleModalClose}
                className="mr-3"
              >
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-arrow-left-short"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                  />
                </svg>
                Wroć
              </Button>
              <span className={classes.modalPrice}>
                {newItem.id === 18
                  ? formatter.format(newItem.price + extrasSumPrice)
                  : size === "20cm"
                  ? formatter.format(newItem.price[size] + extrasSumPrice)
                  : size === "28cm"
                  ? formatter.format(newItem.price[size] + extrasSumPrice)
                  : size === "50cm"
                  ? formatter.format(newItem.price[size] + extrasSumPrice)
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
      </Modal.Body>
    </Modal>
  );
}

export default withStyles(styles)(PizzaOrderModal);
