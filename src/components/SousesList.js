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
                      variant="success"
                      onClick={() => handleSousPick(sous)}
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
