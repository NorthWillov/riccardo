import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { ToastContext } from "../contexts/ToastContext";
import { MENU } from "../utils/constants";
import { formatter } from "../utils/formatter";
import { Row, Col, Button, Card } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/lunchesListStyles";

function StartersList(props) {
  const { cart, setCart } = useContext(CartContext);
  const { show, toggleShow } = useContext(ToastContext);

  const { classes } = props;

  const handleStarterPick = (starter) => {
    let newStarter = { ...starter, quantity: 1, uniqId: uuidv4() };
    setCart([...cart, newStarter]);
    !show && toggleShow();
  };

  return (
    <section id="startery">
      <h3 className="pt-5 mb-4">Startery:</h3>
      <Row>
        {MENU.starters.map((starter) => (
          <React.Fragment key={starter.name}>
            <Col xs={6} md={4} lg={4} xl={3}>
              <Card className="mb-3">
                <Card.Img
                  variant="top"
                  src={starter.image}
                  alt={starter.name}
                />
                <Card.Body
                  className={classes.CardBody}
                  style={{ height: "120px" }}
                >
                  <Card.Title className={classes.title}>
                    {starter.id}. {starter.name}
                  </Card.Title>
                  <Card.Subtitle
                    className="mb-2 text-muted"
                    style={{ fontSize: "12px" }}
                  >
                    {starter.desc}
                  </Card.Subtitle>
                </Card.Body>
                <Card.Footer style={{ padding: "12px" }}>
                  <div className={classes.checkout}>
                    <p className={classes.checkoutPrice}>
                      {formatter.format(starter.price)}zł
                    </p>
                    <Button
                      variant="success"
                      onClick={() => handleStarterPick(starter)}
                      type="button"
                      size="sm"
                      className="ml-2"
                    >
                      Dodaj
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

export default withStyles(styles)(StartersList);
