import React from "react";
import { MENU } from "../utils/constants";
import { formatter } from "../utils/formatter";
import { Row, Col, Card } from "react-bootstrap";
import { withStyles } from "@material-ui/styles";
import { v4 as uuidv4 } from "uuid";
import styles from "../styles/popularStyles";

const popularItemsId = [1, 3, 14, 21];

function Popular(props) {
  const { handlePizzaClick, classes } = props;
  return (
    <>
      <h3 className="pt-5 mb-4">Popularne:</h3>
      <Row>
        {MENU.pizzas.map((pizza) =>
          popularItemsId.includes(pizza.id) ? (
            <Col key={uuidv4()} xs={6} sm={4} md={3}>
              <Card
                className={classes.popularCard}
                onClick={() => handlePizzaClick(pizza)}
              >
                <Row noGutters="true">
                  <Col md={5}>
                    <Card.Img
                      className={classes.image}
                      src={pizza.image}
                      alt="pizza"
                    />
                  </Col>
                  <Col md={7} style={{ display: "flex" }}>
                    <Card.Body className={classes.cardBodyPopular}>
                      <Card.Title className={classes.cardTitlePopular}>
                        {pizza.name}
                      </Card.Title>
                      <Card.Text>
                        Od {formatter.format(pizza.price["20cm"])}zł
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ) : null
        )}
      </Row>
    </>
  );
}

export default withStyles(styles)(Popular);
