import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { ToastContext } from "../contexts/ToastContext";
import { MENU } from "../utils/constants";
import { formatter } from "../utils/formatter";
import { Row, Col, Button, Card } from "react-bootstrap";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/lunchesListStyles";

function MakaronsList(props) {
  const { cart, setCart } = useContext(CartContext);
  const { show, toggleShow } = useContext(ToastContext);

  const { classes } = props;

  const handleMakaronPick = (makaron) => {
    setCart([...cart, makaron]);
    !show && toggleShow();
  };

  return (
    <div id="makarony">
      <h3 className="pt-5 mb-4">Makarony:</h3>
      <Row>
        {MENU.makarons.map((makaron) => (
          <React.Fragment key={makaron.name}>
            <Col sm={6} md={6} lg={4} xl={3}>
              <Card className="mb-3">
                <Card.Img
                  variant="top"
                  src={makaron.image}
                  alt={makaron.name}
                />
                <Card.Body className={classes.CardBody}>
                  <Card.Title>
                    {makaron.id}. {makaron.name}
                  </Card.Title>
                </Card.Body>
                <Card.Footer>
                  <div className={classes.checkout}>
                    <p className={classes.checkoutPrice}>
                      {formatter.format(makaron.price)}pln
                    </p>
                    <Button
                      variant="success"
                      onClick={() => handleMakaronPick(makaron)}
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
    </div>
  );
}

export default withStyles(styles)(MakaronsList);
