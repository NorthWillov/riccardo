import React from "react";
import { MENU } from "../utils/constants";
import { formatter } from "../utils/formatter";
import { Row, Col, Card } from "react-bootstrap";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/popularStyles";

function Popular(props) {
  const { handlePizzaClick, classes } = props;
  return (
    <>
      <h3 className="mt-5 mb-4">Popularne:</h3>
      <Row>
        <Col xs={6} sm={4} md={3}>
          <Card
            className={classes.popularCard}
            onClick={() => handlePizzaClick(MENU.pizzas[0])}
          >
            <Row noGutters="true">
              <Col md={5}>
                <Card.Img src={MENU.pizzas[0].image} alt="pizza" />
              </Col>
              <Col md={7} style={{ display: "flex" }}>
                <Card.Body className={classes.cardBodyPopular}>
                  <Card.Title className={classes.cardTitlePopular}>
                    {MENU.pizzas[0].name}
                  </Card.Title>
                  <Card.Text>
                    Od {formatter.format(MENU.pizzas[0].price["20cm"])}zł
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col xs={6} sm={4} md={3}>
          <Card
            className={classes.popularCard}
            onClick={() => handlePizzaClick(MENU.pizzas[2])}
          >
            <Row noGutters="true">
              <Col md={5}>
                <Card.Img src={MENU.pizzas[2].image} alt="pizza" />
              </Col>
              <Col md={7} style={{ display: "flex" }}>
                <Card.Body className={classes.cardBodyPopular}>
                  <Card.Title className={classes.cardTitlePopular}>
                    {MENU.pizzas[2].name}
                  </Card.Title>
                  <Card.Text>
                    Od {formatter.format(MENU.pizzas[2].price["20cm"])}zł
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={6} sm={4} md={3}>
          <Card
            className={classes.popularCard}
            onClick={() => handlePizzaClick(MENU.pizzas[13])}
          >
            <Row noGutters="true">
              <Col md={5}>
                <Card.Img src={MENU.pizzas[13].image} alt="pizza" />
              </Col>
              <Col md={7} style={{ display: "flex" }}>
                <Card.Body className={classes.cardBodyPopular}>
                  <Card.Title className={classes.cardTitlePopular}>
                    {MENU.pizzas[13].name}
                  </Card.Title>
                  <Card.Text>
                    Od {formatter.format(MENU.pizzas[13].price["20cm"])}zł
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={6} sm={4} md={3}>
          <Card
            className={classes.popularCard}
            onClick={() => handlePizzaClick(MENU.pizzas[10])}
          >
            <Row noGutters="true">
              <Col md={5}>
                <Card.Img src={MENU.pizzas[10].image} alt="pizza" />
              </Col>
              <Col md={7} style={{ display: "flex" }}>
                <Card.Body className={classes.cardBodyPopular} ƒ>
                  <Card.Title className={classes.cardTitlePopular}>
                    {MENU.pizzas[10].name}
                  </Card.Title>
                  <Card.Text>
                    Od {formatter.format(MENU.pizzas[10].price["20cm"])}zł
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default withStyles(styles)(Popular);
