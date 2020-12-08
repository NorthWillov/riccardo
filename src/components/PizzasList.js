import React, { useContext, useState } from "react";
import { MENU } from "../utils/constants";
import { NewPizzaContext } from "../contexts/NewPizzaContext";
import { CurrIngredientsContext } from "../contexts/CurrIngredientsContext";
import { formatter } from "../utils/formatter";
import { Row, Col, Button, Card } from "react-bootstrap";
import PizzaOrderModal from "./PizzaOrderModal";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/pizzaListStyles";

function PizzasList(props) {
  const { newPizza, setNewPizza } = useContext(NewPizzaContext);
  const { setCurrIngredients } = useContext(CurrIngredientsContext);
  const [pizzaModalShow, setPizzaModalShow] = useState(false);

  const handleClick = (pizza) => {
    setCurrIngredients(pizza.ingredients);
    setNewPizza(pizza);
    setPizzaModalShow(true);
  };

  const { classes } = props;

  return (
    <>
      <h3 className="title pt-5" id="pizzas">
        Pizzy
      </h3>
      <Row>
        {MENU.pizzas.map((pizza) => (
          <React.Fragment key={pizza.name}>
            <Col sm={6} md={6} lg={4} xl={3}>
              <Card className="mb-3">
                <Card.Img
                  className="pl-3"
                  variant="top"
                  src={pizza.image}
                  alt={pizza.name}
                />
                <Card.Body className={classes.CardBody}>
                  <Card.Title>
                    {pizza.id}. {pizza.name}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {pizza.id !== 22
                      ? pizza.ingredients.map((i, idx) => (
                          <span key={i}>
                            {pizza.ingredients[idx + 1] ? i + ", " : i}
                          </span>
                        ))
                      : "sos, ser, +5 własnych składników do wyboru"}
                  </Card.Subtitle>
                </Card.Body>
                <Card.Footer>
                  <div className={classes.checkout}>
                    <p className={classes.checkoutPrice}>
                      od{" "}
                      {pizza.id === 18
                        ? formatter.format(pizza.price)
                        : formatter.format(pizza.price["20cm"])}
                      pln
                    </p>
                    <Button
                      onClick={() => handleClick(pizza)}
                      variant="outline-dark"
                    >
                      Wybierz
                    </Button>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          </React.Fragment>
        ))}
      </Row>

      {newPizza && (
        <PizzaOrderModal
          show={pizzaModalShow}
          onHide={() => setPizzaModalShow(false)}
        />
      )}
    </>
  );
}

export default withStyles(styles)(PizzasList);
