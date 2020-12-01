import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import officeImg from "../images/office.jpg";
import studentsImg from "../images/students.jpg";
import familyImg from "../images/family.jpg";

function Landing(props) {
  return (
    <>
      <Link to="/riccardo/pizzas">Pizzas</Link>
      <Carousel>
        <Carousel.Item interval={5000}>
          <img className="d-block w-100" src={officeImg} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className="d-block w-100" src={studentsImg} alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className="d-block w-100" src={familyImg} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Landing;
