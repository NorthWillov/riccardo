import React, { useContext, useState } from "react";
import { formatter } from "../utils/formatter";
import { Modal, Row, Col, Button, Form } from "react-bootstrap";
import { CartContext } from "../contexts/CartContext";
import { ToastContext } from "../contexts/ToastContext";
import { v4 as uuidv4 } from "uuid";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/lunchesOrderModalStyles";

function SaladsOrderModal(props) {
  const [saladAddition, setSaladAddition] = useState({});

  const { cart, setCart } = useContext(CartContext);
  const { toggleShow } = useContext(ToastContext);

  const { classes, salad, onHide } = props;

  const handleInputClick = (e) => {
    setSaladAddition({ ...saladAddition, [e.target.name]: e.target.value });
  };

  const handleClick = (salad) => {
    onHide();
    let newSalad = {
      ...salad,
      ...saladAddition,
      quantity: 1,
      uniqId: uuidv4(),
    };
    setCart([...cart, newSalad]);
    setSaladAddition({});
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
              src={salad.image}
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
              <h4>{salad.name}</h4>
              <p style={{ color: "#6c757d" }}>{salad.desc}</p>

              {salad.id === 51 && (
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>sposób podania sałatki:</Form.Label>
                  <Form.Control
                    name="meat"
                    as="select"
                    onChange={handleInputClick}
                  >
                    <option value="podstawowa">podstawowa</option>
                    <option value="kurczak">z kurczakiem</option>
                    <option value="krewetki">z krewetkami</option>
                  </Form.Control>
                </Form.Group>
              )}

              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>sos do sałatki:</Form.Label>
                <Form.Control
                  name="sous"
                  as="select"
                  onChange={handleInputClick}
                >
                  <option value="vinaigrette">sos vinaigrette</option>
                  <option value="joghurt">
                    sos na bazie jogurtu naturalnego z odrobina czosnku
                  </option>
                  <option value="musztardowy">sos musztardowy</option>
                </Form.Control>
              </Form.Group>
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
                {formatter.format(salad.price)}zł
              </span>
              <Button
                variant="success"
                onClick={() => handleClick(salad)}
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

export default withStyles(styles)(SaladsOrderModal);
