import React from "react";
import { MENU } from "../utils/constants";
import { formatter } from "../utils/formatter";
import { Row, Col, Card } from "react-bootstrap";
import "../styles/popular.css";

function Popular(props) {
  const { handlePizzaClick } = props;
  return (
    <>
      <h3 className="mt-5 mb-4">Popularne:</h3>
      <Row>
        <Col xs={6} sm={4} md={3}>
          <Card
            className="popular-card mb-3"
            onClick={() => handlePizzaClick(MENU.pizzas[0])}
          >
            <Row noGutters="true">
              <Col md={5}>
                <Card.Img src={MENU.pizzas[0].image} alt="pizza" />
              </Col>
              <Col md={7} style={{ display: "flex" }}>
                <Card.Body className="card-body-popular">
                  <Card.Title className="card-title-popular">
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
            className="popular-card mb-3"
            onClick={() => handlePizzaClick(MENU.pizzas[2])}
          >
            <Row noGutters="true">
              <Col md={5}>
                <Card.Img src={MENU.pizzas[2].image} alt="pizza" />
              </Col>
              <Col md={7} style={{ display: "flex" }}>
                <Card.Body className="card-body-popular">
                  <Card.Title className="card-title-popular">
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
            className="popular-card mb-3"
            onClick={() => handlePizzaClick(MENU.pizzas[13])}
          >
            <Row noGutters="true">
              <Col md={5}>
                <Card.Img src={MENU.pizzas[13].image} alt="pizza" />
              </Col>
              <Col md={7} style={{ display: "flex" }}>
                <Card.Body className="card-body-popular">
                  <Card.Title className="card-title-popular">
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
            className="popular-card mb-3"
            onClick={() => handlePizzaClick(MENU.pizzas[10])}
          >
            <Row noGutters="true">
              <Col md={5}>
                <Card.Img src={MENU.pizzas[10].image} alt="pizza" />
              </Col>
              <Col md={7} style={{ display: "flex" }}>
                <Card.Body className="card-body-popular">
                  <Card.Title className="card-title-popular">
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

export default Popular;
