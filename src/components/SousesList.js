import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { ToastContext } from "../contexts/ToastContext";
import { MENU } from "../utils/constants";
import { formatter } from "../utils/formatter";
import { Row, Col, Button, Card } from "react-bootstrap";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/lunchesListStyles";

function SousesList(props) {
  const { cart, setCart } = useContext(CartContext);
  const { show, toggleShow } = useContext(ToastContext);

  const { classes } = props;

  const handleSousPick = (sous) => {
    setCart([...cart, sous]);
    !show && toggleShow();
  };

  return (
    <div id="sosy">
      <h3 className="pt-5 mb-4">Sosy:</h3>
      <Row>
        {MENU.souses.map((sous) => (
          <React.Fragment key={sous.name}>
            <Col sm={6} md={6} lg={4} xl={3}>
              <Card className="mb-3">
                <Card.Img variant="top" src={sous.image} alt={sous.name} />
                <Card.Body
                  className={classes.CardBody}
                  style={{ height: "100%" }}
                >
                  <Card.Title>
                    {sous.id}. {sous.name}
                  </Card.Title>
                </Card.Body>
                <Card.Footer>
                  <div className={classes.checkout}>
                    <p className={classes.checkoutPrice}>
                      {formatter.format(sous.price)}pln
                    </p>
                    <Button
                      variant="outline-dark"
                      onClick={() => handleSousPick(sous)}
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

export default withStyles(styles)(SousesList);
