import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import officeImg from "../images/office.jpg";
import studentsImg from "../images/students.jpg";
import familyImg from "../images/family.jpg";
import "../styles/landing.css";

function Landing(props) {
  return (
    <>
      <Carousel className="Carousel">
        <Carousel.Item interval={5000}>
          <img className="d-block w-100" src={officeImg} alt="First slide" />
          <Carousel.Caption>
            <h3>Rabaty dla firm</h3>
            <p>
              -5% na wszystkie dania. Przy większych zamówieniach negocjujemy
              ceny.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className="d-block w-100" src={studentsImg} alt="Second slide" />
          <Carousel.Caption>
            <h3>Studenci jedzą taniej</h3>
            <p>-5% na wszystkie dania</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className="d-block w-100" src={familyImg} alt="Third slide" />
          <Carousel.Caption>
            <h3>Rodzinne obiadki</h3>
            <p>-5% przy zamówieniu powyżej 70 zł (w lokalu)</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h3 className="mt-5">Popularne:</h3>
    </>
  );
}

export default Landing;
