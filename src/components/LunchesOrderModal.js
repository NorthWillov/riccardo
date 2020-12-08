import React, { useState, useContext } from "react";
import { ToastContext } from "../contexts/ToastContext";
import { MENU } from "../utils/constants";
import { formatter } from "../utils/formatter";
import { v4 as uuidv4 } from "uuid";
import { Modal, Container, Row, Col, Button, Form } from "react-bootstrap";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/lunchesOrderModalStyles";

function LunchesOrderModal(props) {
  const { toggleShow } = useContext(ToastContext);

  const { classes } = props;

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size="lg"
    >
      <Modal.Header closeButton>
        <h4>{props.lunch.name}</h4>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col lg={7} style={{ display: "flex" }}>
              <img
                className={classes.modalLunchImage}
                src={props.lunch.image}
              />
            </Col>
            <Col lg={5}>
              <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>dodatek do dania:</Form.Label>
                  <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <span className="modal-price">
          {formatter.format(props.lunch.price)}zł
        </span>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default withStyles(styles)(LunchesOrderModal);
