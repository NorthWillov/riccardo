import React from "react";
import { MENU } from "../utils/constants";
import { formatter } from "../utils/formatter";
import { Row, Col, Button, Card } from "react-bootstrap";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/pizzaListStyles";

function PizzasList(props) {
  const { classes } = props;

  return (
    <section id="pizzas">
      <h3 className="title pt-5 mb-4">Pizzy:</h3>
      <Row>
        {MENU.pizzas.map((pizza) => (
          <React.Fragment key={pizza.name}>
            <Col xs={6} md={4} lg={4} xl={3}>
              <Card className={`mb-3 ${classes.Card}`}>
                <Card.Img
                  style={{ cursor: "pointer" }}
                  variant="top"
                  src={pizza.image}
                  alt={pizza.name}
                  onClick={() => props.handlePizzaClick(pizza)}
                />
                <Card.Body className={classes.CardBody}>
                  <Card.Title className={classes.title}>
                    {pizza.id}. {pizza.name}
                  </Card.Title>
                  <Card.Subtitle
                    className={`mb-2 text-muted ${classes.subtitle}`}
                  >
                    {pizza.id !== 22
                      ? pizza.ingredients.map((i, idx) => (
                          <span key={i}>
                            {pizza.ingredients[idx + 1] ? i + ", " : i}
                          </span>
                        ))
                      : "sos, ser, +5 własnych składników do wyboru"}
                  </Card.Subtitle>
                </Card.Body>
                <Card.Footer style={{ padding: "12px" }}>
                  <div className={classes.checkout}>
                    <span className={classes.checkoutPrice}>
                      od{" "}
                      {pizza.id === 18
                        ? formatter.format(pizza.price)
                        : formatter.format(pizza.price["20cm"])}
                      zł
                    </span>
                    <Button
                      onClick={() => props.handlePizzaClick(pizza)}
                      variant="outline-dark"
                      size="sm"
                      className="ml-2"
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
    </section>
  );
}

export default withStyles(styles)(PizzasList);
