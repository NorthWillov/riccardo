import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { ToastContext } from "../contexts/ToastContext";
import { MENU } from "../utils/constants";
import { formatter } from "../utils/formatter";
import { Row, Col, Button, Card } from "react-bootstrap";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/lunchesListStyles";

function StartersList(props) {
  const { cart, setCart } = useContext(CartContext);
  const { show, toggleShow } = useContext(ToastContext);

  const { classes } = props;

  const handleStarterPick = (starter) => {
    setCart([...cart, starter]);
    !show && toggleShow();
  };

  return (
    <div id="startery">
      <h3 className="pt-5 mb-4">Startery:</h3>
      <Row>
        {MENU.starters.map((starter) => (
          <React.Fragment key={starter.name}>
            <Col sm={6} md={6} lg={4} xl={3}>
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
                  <Card.Title>
                    {starter.id}. {starter.name}
                  </Card.Title>
                  <Card.Subtitle
                    className="mb-2 text-muted"
                    style={{ fontSize: "12px" }}
                  >
                    {starter.desc}
                  </Card.Subtitle>
                </Card.Body>
                <Card.Footer>
                  <div className={classes.checkout}>
                    <p className={classes.checkoutPrice}>
                      {formatter.format(starter.price)}pln
                    </p>
                    <Button
                      variant="outline-dark"
                      onClick={() => handleStarterPick(starter)}
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

export default withStyles(styles)(StartersList);
