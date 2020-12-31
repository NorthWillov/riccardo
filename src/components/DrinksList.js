import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { ToastContext } from "../contexts/ToastContext";
import { MENU } from "../utils/constants";
import { formatter } from "../utils/formatter";
import { Row, Col, Button, Card } from "react-bootstrap";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/lunchesListStyles";

function DrinksList(props) {
  const { cart, setCart } = useContext(CartContext);
  const { show, toggleShow } = useContext(ToastContext);

  const { classes } = props;

  const handleDrinkPick = (drink) => {
    setCart([...cart, drink]);
    !show && toggleShow();
  };

  return (
    <div id="napoje">
      <h3 className="pt-5 mb-4">Napoje:</h3>
      <Row>
        {MENU.drinks.map((drink) => (
          <React.Fragment key={drink.name}>
            <Col sm={6} md={6} lg={4} xl={3}>
              <Card className="mb-3">
                <Card.Img variant="top" src={drink.image} alt={drink.name} />
                <Card.Body
                  className={classes.CardBody}
                  style={{ height: "100%" }}
                >
                  <Card.Title>
                    {drink.id}. {drink.name}
                  </Card.Title>
                </Card.Body>
                <Card.Footer>
                  <div className={classes.checkout}>
                    <p className={classes.checkoutPrice}>
                      {formatter.format(drink.price)}pln
                    </p>
                    <Button
                      variant="outline-dark"
                      onClick={() => handleDrinkPick(drink)}
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
    </div>
  );
}

export default withStyles(styles)(DrinksList);
