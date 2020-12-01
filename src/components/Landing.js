import React from "react";
import { Carousel } from "react-bootstrap";
import officeImg from "../images/office.jpg";
import studentsImg from "../images/students.jpg";
import familyImg from "../images/family.jpg";
import "../styles/landing.css";

function Landing(props) {
  return (
    <>
      <Carousel>
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
      <div className="row">
        <div className="col-md-3">
          <div className="popular-card card mb-3">
            <div className="row no-gutters">
              <div className="col-md-5">
                <img
                  src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg"
                  className="card-img"
                  alt="pizza"
                />
              </div>
              <div className="col-md-7" style={{ display: "flex" }}>
                <div className="card-body-popular card-body">
                  <h5 className="card-title-popular card-title">Margherita</h5>
                  <p className="card-text">Od 9.50zł</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="popular-card card mb-3">
            <div className="row no-gutters">
              <div className="col-md-5">
                <img
                  src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg"
                  className="card-img"
                  alt="pizza"
                />
              </div>
              <div className="col-md-7" style={{ display: "flex" }}>
                <div className="card-body-popular card-body">
                  <h5 className="card-title-popular card-title">Capricciosa</h5>
                  <p className="card-text">Od 14.50zł</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="popular-card card mb-3">
            <div className="row no-gutters">
              <div className="col-md-5">
                <img
                  src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg"
                  className="card-img"
                  alt="pizza"
                />
              </div>
              <div className="col-md-7" style={{ display: "flex" }}>
                <div className="card-body-popular card-body">
                  <h5 className="card-title-popular card-title">Saporito</h5>
                  <p className="card-text">Od 16.50zł</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="popular-card card mb-3">
            <div className="row no-gutters">
              <div className="col-md-5">
                <img
                  src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg"
                  className="card-img"
                  alt="pizza"
                />
              </div>
              <div className="col-md-7" style={{ display: "flex" }}>
                <div className="card-body-popular card-body">
                  <h5 className="card-title-popular card-title">Pepperone 🌶</h5>
                  <p className="card-text">Od 16.50zł</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
