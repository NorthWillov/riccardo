import React, { useContext, useState } from "react";
import { formatter } from "../utils/formatter";
import { Modal, Row, Col, Button, Form } from "react-bootstrap";
import { CartContext } from "../contexts/CartContext";
import { ToastContext } from "../contexts/ToastContext";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/lunchesOrderModalStyles";

function PancakesOrderModal(props) {
  const [pancakeAddition, setPancakeAddition] = useState({});

  const { cart, setCart } = useContext(CartContext);
  const { toggleShow } = useContext(ToastContext);

  const { classes, pancake, onHide } = props;

  const handleInputClick = (e) => {
    setPancakeAddition({ ...pancakeAddition, [e.target.name]: e.target.value });
  };

  const handleClick = (pancake) => {
    onHide();
    let newPancake = { ...pancake, ...pancakeAddition };
    setCart([...cart, newPancake]);
    setPancakeAddition({});
    toggleShow();
  };

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size="lg"
    >
      <Modal.Body>
        <Row>
          <Col lg={7} style={{ display: "flex" }}>
            <img
              className={classes.modalLunchImage}
              src={pancake.image}
              alt="obiad"
            />
          </Col>
          <Col
            lg={5}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Form>
              <h4>{pancake.name}</h4>
              <p style={{ color: "#6c757d" }}>{pancake.desc}</p>

              {pancake.id > 4 && (
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>sposób podania naleśnika:</Form.Label>
                  <Form.Control
                    name="sous"
                    as="select"
                    onChange={handleInputClick}
                  >
                    <option value="joghurt">
                      sos na bazie jogurtu naturalnego z odrobina czosnku
                    </option>
                    <option value="pomidorowy">sos pomidorowy</option>
                  </Form.Control>
                </Form.Group>
              )}

              {pancake.id === 1 && (
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>sposób podania naleśnika:</Form.Label>
                  <Form.Control
                    name="way"
                    as="select"
                    onChange={handleInputClick}
                  >
                    <option value="owoce_sezonowe">
                      z owowcami sezonowymi
                    </option>
                    <option value="konfitura_owocowa">konfitura owocowa</option>
                  </Form.Control>
                </Form.Group>
              )}

              {pancake.id === 5 && (
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>rodzaj dżemu:</Form.Label>
                  <Form.Control
                    name="jam"
                    as="select"
                    onChange={handleInputClick}
                  >
                    <option value="dzem_truskawkowy">dżem truskawkowy</option>
                    <option value="dzem_wisniowy">dżem wiśniowy</option>
                  </Form.Control>
                </Form.Group>
              )}

              {pancake.id <= 4 && (
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>dodatek do naleśników:</Form.Label>
                  <Form.Control
                    name="adds"
                    as="select"
                    onChange={handleInputClick}
                  >
                    <option value="bita_smietana">bita śmietana</option>
                    <option value="polewa_czekoladowa">
                      polewa czekoladowa
                    </option>
                    <option value="cukier_puder">cukier puder</option>
                  </Form.Control>
                </Form.Group>
              )}
            </Form>

            <div className={classes.checkout}>
              <Button variant="outline-secondary" onClick={onHide}>
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-arrow-left-short"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                  />
                </svg>
                Wroć
              </Button>
              <span className={classes.modalPrice}>
                {formatter.format(pancake.price)}zł
              </span>
              <Button
                variant="success"
                onClick={() => handleClick(pancake)}
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
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

export default withStyles(styles)(PancakesOrderModal);
