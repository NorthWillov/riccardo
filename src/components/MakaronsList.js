import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { ToastContext } from "../contexts/ToastContext";
import { MENU } from "../utils/constants";
import { formatter } from "../utils/formatter";
import { Row, Col, Button, Card } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/lunchesListStyles";

function MakaronsList(props) {
  const { cart, setCart } = useContext(CartContext);
  const { show, toggleShow } = useContext(ToastContext);

  const { classes } = props;

  const handleMakaronPick = (makaron) => {
    let newMakaron = { ...makaron, quantity: 1, uniqId: uuidv4() };
    setCart([...cart, newMakaron]);
    !show && toggleShow();
  };

  return (
    <section id="makarony">
      <h3 className="pt-5 mb-4">Makarony:</h3>
      <Row>
        {MENU.makarons.map((makaron) => (
          <React.Fragment key={makaron.name}>
            <Col xs={6} md={4} lg={4} xl={3}>
              <Card className="mb-3">
                <Card.Img
                  variant="top"
                  src={makaron.image}
                  alt={makaron.name}
                />
                <Card.Body className={classes.CardBody}>
                  <Card.Title className={classes.title}>
                    {makaron.id}. {makaron.name}
                  </Card.Title>
                </Card.Body>
                <Card.Footer style={{ padding: "12px" }}>
                  <div className={classes.checkout}>
                    <p className={classes.checkoutPrice}>
                      {formatter.format(makaron.price)}zł
                    </p>
                    <Button
                      variant="success"
                      onClick={() => handleMakaronPick(makaron)}
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

export default withStyles(styles)(MakaronsList);
