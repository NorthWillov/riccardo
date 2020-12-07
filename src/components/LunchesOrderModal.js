import React, { useState, useContext } from "react";
import { ToastContext } from "../contexts/ToastContext";
import { MENU } from "../utils/constants";
import { formatter } from "../utils/formatter";
import { v4 as uuidv4 } from "uuid";
import { Modal, Container, Row, Col, Button } from "react-bootstrap";
import "../styles/lunchOrderModal.css";

export default function LunchesOrderModal(props) {
  const { toggleShow } = useContext(ToastContext);

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
              <img className="modal-lunch-image" src={props.lunch.image} />
            </Col>
            <Col lg={5}></Col>
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
