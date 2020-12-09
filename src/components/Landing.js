import React, { useContext, useState } from "react";
import { Carousel } from "react-bootstrap";
import officeImg from "../images/office.jpg";
import studentsImg from "../images/students.jpg";
import familyImg from "../images/family.jpg";
import PizzasList from "./PizzasList";
import LunchesList from "./LunchesList";
import LunchesOrderModal from "./LunchesOrderModal";
import { CurrIngredientsContext } from "../contexts/CurrIngredientsContext";
import { NewPizzaContext } from "../contexts/NewPizzaContext";
import { NewLunchContext } from "../contexts/NewLunchContext";
import { ToastContext } from "../contexts/ToastContext";
import PizzaOrderModal from "./PizzaOrderModal";
import Popular from "./Popular";

function Landing(props) {
  const [lunchModalShow, setLunchModalShow] = useState(false);
  const [pizzaModalShow, setPizzaModalShow] = useState(false);

  const { newLunch, setNewLunch } = useContext(NewLunchContext);
  const { newPizza, setNewPizza } = useContext(NewPizzaContext);
  const { setCurrIngredients } = useContext(CurrIngredientsContext);
  const { show, toggleShow } = useContext(ToastContext);

  const handlePizzaClick = (pizza) => {
    show && toggleShow();
    setNewLunch();
    setCurrIngredients(pizza.ingredients);
    setNewPizza(pizza);
    setPizzaModalShow(true);
  };

  const handleLunchModalOpen = (lunch) => {
    show && toggleShow();
    setNewPizza();
    setNewLunch(lunch);
    setLunchModalShow(true);
  };

  return (
    <>
      <Carousel>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={officeImg}
            alt="Rabaty dla firm"
          />
          <Carousel.Caption>
            <h3 className="mb-0">Rabaty dla firm</h3>
            <p>
              -5% na wszystkie dania. Przy większych zamówieniach negocjujemy
              ceny.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={studentsImg}
            alt="Studenci jedzą taniej"
          />
          <Carousel.Caption>
            <h3>Studenci jedzą taniej</h3>
            <p>-5% na wszystkie dania</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={familyImg}
            alt="Rodzinne obiadki"
          />
          <Carousel.Caption>
            <h3>Rodzinne obiadki</h3>
            <p>-5% przy zamówieniu powyżej 70 zł (w lokalu)</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Popular handlePizzaClick={handlePizzaClick} />

      <PizzasList handlePizzaClick={handlePizzaClick} />

      <LunchesList handleLunchModalOpen={handleLunchModalOpen} />

      {newPizza && (
        <PizzaOrderModal
          show={pizzaModalShow}
          onHide={() => setPizzaModalShow(false)}
        />
      )}

      {newLunch && (
        <LunchesOrderModal
          lunch={newLunch}
          show={lunchModalShow}
          onHide={() => setLunchModalShow(false)}
        />
      )}
    </>
  );
}

export default Landing;
