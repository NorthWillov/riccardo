import React, { useContext, useState } from "react";
import { Carousel } from "react-bootstrap";
import officeImg from "../images/office.jpg";
import studentsImg from "../images/students.jpg";
import familyImg from "../images/family.jpg";
import PizzasList from "./PizzasList";
import LunchesList from "./LunchesList";
import MakaronsList from "./MakaronsList";
import SaladsList from "./SaladsList";
import PancakesSweetList from "./PancakesSweetList";
import PizzaOrderModal from "./PizzaOrderModal";
import SaladsOrderModal from "./SaladsOrderModal";
import LunchesOrderModal from "./LunchesOrderModal";
import PancakesSweetOrderModal from "./PancakesSweetOrderModal";
import { CurrIngredientsContext } from "../contexts/CurrIngredientsContext";
import { NewItemContext } from "../contexts/NewItemContext";
import { ToastContext } from "../contexts/ToastContext";
import Popular from "./Popular";

function Landing(props) {
  const [lunchModalShow, setLunchModalShow] = useState(false);
  const [pizzaModalShow, setPizzaModalShow] = useState(false);
  const [saladModalShow, setSaladModalShow] = useState(false);
  const [pancakeSweetModalShow, setPancakeSweetModalShow] = useState(false);

  const { newItem, setNewItem } = useContext(NewItemContext);
  const { setCurrIngredients } = useContext(CurrIngredientsContext);
  const { show, toggleShow } = useContext(ToastContext);

  const handlePizzaClick = (item) => {
    show && toggleShow();
    setCurrIngredients(item.ingredients);
    setNewItem(item);
    setPizzaModalShow(true);
  };

  const handleLunchModalOpen = (item) => {
    show && toggleShow();
    setNewItem(item);
    setLunchModalShow(true);
  };

  const handleSaladModalOpen = (item) => {
    show && toggleShow();
    setNewItem(item);
    setSaladModalShow(true);
  };
  const handlePancakeSweetModalOpen = (item) => {
    show && toggleShow();
    setNewItem(item);
    setPancakeSweetModalShow(true);
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

      <MakaronsList />

      <SaladsList handleSaladModalOpen={handleSaladModalOpen} />

      <PancakesSweetList
        handlePancakeSweetModalOpen={handlePancakeSweetModalOpen}
      />

      {newItem && (
        <>
          <PizzaOrderModal
            show={pizzaModalShow}
            onHide={() => setPizzaModalShow(false)}
          />
          <LunchesOrderModal
            lunch={newItem}
            show={lunchModalShow}
            onHide={() => setLunchModalShow(false)}
          />
          <SaladsOrderModal
            salad={newItem}
            show={saladModalShow}
            onHide={() => setSaladModalShow(false)}
          />
          <PancakesSweetOrderModal
            pancake={newItem}
            show={pancakeSweetModalShow}
            onHide={() => setPancakeSweetModalShow(false)}
          />
        </>
      )}
    </>
  );
}

export default Landing;
