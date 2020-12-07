import React, { useContext } from "react";
import { Carousel } from "react-bootstrap";
import { MENU } from "../utils/constants";
import { formatter } from "../utils/formatter";
import officeImg from "../images/office.jpg";
import studentsImg from "../images/students.jpg";
import familyImg from "../images/family.jpg";
import { NewPizzaContext } from "../contexts/NewPizzaContext";
import { CurrIngredientsContext } from "../contexts/CurrIngredientsContext";
import OrderModal from "./OrderModal";
import PizzasList from "./PizzasList";
import "../styles/landing.css";

function Landing(props) {
  const { newPizza, setNewPizza } = useContext(NewPizzaContext);
  const { currIngredients, setCurrIngredients } = useContext(
    CurrIngredientsContext
  );

  const handlePopularClick = (pizza) => {
    setCurrIngredients(pizza.ingredients);
    setNewPizza(pizza);
  };

  return (
    <>
      <Carousel>
        <Carousel.Item interval={5000}>
          <img className="d-block w-100" src={officeImg} alt="First slide" />
          <Carousel.Caption>
            <h3 className="mb-0">Rabaty dla firm</h3>
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
        <div className="col-6 col-sm-4 col-md-3">
          <div
            className="popular-card card mb-3"
            onClick={() => handlePopularClick(MENU.pizzas[0])}
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <div className="row no-gutters">
              <div className="col-md-5">
                <img
                  src={MENU.pizzas[0].image}
                  className="card-img"
                  alt="pizza"
                />
              </div>
              <div className="col-md-7" style={{ display: "flex" }}>
                <div className="card-body-popular card-body">
                  <h5 className="card-title-popular card-title">
                    {MENU.pizzas[0].name}
                  </h5>
                  <p className="card-text">
                    Od {formatter.format(MENU.pizzas[0].price["20cm"])}zł
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-4 col-md-3">
          <div
            className="popular-card card mb-3"
            onClick={() => handlePopularClick(MENU.pizzas[2])}
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <div className="row no-gutters">
              <div className="col-md-5">
                <img
                  src={MENU.pizzas[2].image}
                  className="card-img"
                  alt="pizza"
                />
              </div>
              <div className="col-md-7" style={{ display: "flex" }}>
                <div className="card-body-popular card-body">
                  <h5 className="card-title-popular card-title">
                    {MENU.pizzas[2].name}
                  </h5>
                  <p className="card-text">
                    Od {formatter.format(MENU.pizzas[2].price["20cm"])}zł
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-4 col-md-3">
          <div
            className="popular-card card mb-3"
            onClick={() => handlePopularClick(MENU.pizzas[13])}
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <div className="row no-gutters">
              <div className="col-md-5">
                <img
                  src={MENU.pizzas[13].image}
                  className="card-img"
                  alt="pizza"
                />
              </div>
              <div className="col-md-7" style={{ display: "flex" }}>
                <div className="card-body-popular card-body">
                  <h5 className="card-title-popular card-title">
                    {MENU.pizzas[13].name}
                  </h5>
                  <p className="card-text">
                    Od {formatter.format(MENU.pizzas[13].price["20cm"])}zł
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-4 col-md-3">
          <div
            className="popular-card card mb-3"
            onClick={() => handlePopularClick(MENU.pizzas[10])}
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <div className="row no-gutters">
              <div className="col-md-5">
                <img
                  src={MENU.pizzas[10].image}
                  className="card-img"
                  alt="pizza"
                />
              </div>
              <div className="col-md-7" style={{ display: "flex" }}>
                <div className="card-body-popular card-body">
                  <h5 className="card-title-popular card-title">
                    {MENU.pizzas[10].name}
                  </h5>
                  <p className="card-text">
                    Od {formatter.format(MENU.pizzas[10].price["20cm"])}zł
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PizzasList
        cart={props.cart}
        handleModalSubmit={props.handleModalSubmit}
      />

      {newPizza && (
        <OrderModal
          setCurrIngredients={setCurrIngredients}
          currIngredients={currIngredients}
          newPizza={newPizza}
          handleModalSubmit={props.handleModalSubmit}
        />
      )}
    </>
  );
}

export default Landing;
