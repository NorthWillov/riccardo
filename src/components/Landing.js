import React, { useContext, useState } from "react";
import { Carousel } from "react-bootstrap";
import officeImg from "../images/office.jpg";
import studentsImg from "../images/students.jpg";
import familyImg from "../images/family.jpg";
import { NewPizzaContext } from "../contexts/NewPizzaContext";
import { CurrIngredientsContext } from "../contexts/CurrIngredientsContext";
import PizzaOrderModal from "./PizzaOrderModal";
import PizzasList from "./PizzasList";
import LunchesList from "./LunchesList";
import LunchesOrderModal from "./LunchesOrderModal";
import Popular from "./Popular";

function Landing(props) {
  const { newPizza, setNewPizza } = useContext(NewPizzaContext);
  const [newLunch, setNewLunch] = useState();
  const { currIngredients, setCurrIngredients } = useContext(
    CurrIngredientsContext
  );
  const [modalShow, setModalShow] = useState(false);

  const handlePopularClick = (pizza) => {
    setCurrIngredients(pizza.ingredients);
    setNewPizza(pizza);
  };

  const handleLunchModalOpen = (lunch) => {
    console.log(lunch);
    setNewLunch(lunch);
    setModalShow(true);
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

      <Popular handlePopularClick={handlePopularClick} />

      <PizzasList
        cart={props.cart}
        handleModalSubmit={props.handleModalSubmit}
      />

      <LunchesList handleLunchModalOpen={handleLunchModalOpen} />

      {newLunch && (
        <LunchesOrderModal
          lunch={newLunch}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      )}

      {newPizza && (
        <PizzaOrderModal
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
