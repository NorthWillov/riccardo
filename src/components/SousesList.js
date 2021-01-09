import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { ToastContext } from "../contexts/ToastContext";
import { MENU } from "../utils/constants";
import { formatter } from "../utils/formatter";
import { Row, Col, Button, Card } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/lunchesListStyles";

function SousesList(props) {
  const { cart, setCart } = useContext(CartContext);
  const { show, toggleShow } = useContext(ToastContext);

  const { classes } = props;

  const handleSousPick = (sous) => {
    let newSous = { ...sous, quantity: 1, uniqId: uuidv4() };
    setCart([...cart, newSous]);
    !show && toggleShow();
  };

  return (
    <section id="sosy">
      <h3 className="pt-5 mb-4">Sosy:</h3>
      <Row>
        {MENU.souses.map((sous) => (
          <React.Fragment key={sous.name}>
            <Col xs={6} md={4} lg={4} xl={3}>
              <Card className="mb-3">
                <Card.Img variant="top" src={sous.image} alt={sous.name} />
                <Card.Body
                  className={classes.CardBody}
                  style={{ height: "100%" }}
                >
                  <Card.Title className={classes.title}>
                    {sous.id}. {sous.name}
                  </Card.Title>
                </Card.Body>
                <Card.Footer style={{ padding: "12px" }}>
                  <div className={classes.checkout}>
                    <p className={classes.checkoutPrice}>
                      {formatter.format(sous.price)}zł
                    </p>
                    <Button
                      variant="success"
                      onClick={() => handleSousPick(sous)}
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

export default withStyles(styles)(SousesList);
