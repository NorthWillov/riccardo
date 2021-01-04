import React, { useContext, useState } from "react";
import PizzasList from "./PizzasList";
import LunchesList from "./LunchesList";
import MakaronsList from "./MakaronsList";
import SaladsList from "./SaladsList";
import PancakesSweetList from "./PancakesSweetList";
import PancakesSaltList from "./PancakesSaltList";
import StartersList from "./StartersList";
import SousesList from "./SousesList";
import DrinksList from "./DrinksList";
import PizzaOrderModal from "./PizzaOrderModal";
import SaladsOrderModal from "./SaladsOrderModal";
import LunchesOrderModal from "./LunchesOrderModal";
import PancakesOrderModal from "./PancakesOrderModal";
import About from "./About";
import Promotions from "./Promotions";
import Contact from "./Contact";
import { CurrIngredientsContext } from "../contexts/CurrIngredientsContext";
import { NewItemContext } from "../contexts/NewItemContext";
import { ToastContext } from "../contexts/ToastContext";
import Popular from "./Popular";

function Landing(props) {
  const [lunchModalShow, setLunchModalShow] = useState(false);
  const [pizzaModalShow, setPizzaModalShow] = useState(false);
  const [saladModalShow, setSaladModalShow] = useState(false);
  const [pancakeModalShow, setPancakeModalShow] = useState(false);

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
  const handlePancakeModalOpen = (item) => {
    show && toggleShow();
    setNewItem(item);
    setPancakeModalShow(true);
  };

  return (
    <>
      <Promotions />

      <Popular handlePizzaClick={handlePizzaClick} />

      <PizzasList handlePizzaClick={handlePizzaClick} />

      <LunchesList handleLunchModalOpen={handleLunchModalOpen} />

      <MakaronsList />

      <SaladsList handleSaladModalOpen={handleSaladModalOpen} />

      <PancakesSweetList handlePancakeModalOpen={handlePancakeModalOpen} />

      <PancakesSaltList handlePancakeModalOpen={handlePancakeModalOpen} />

      <StartersList />

      <SousesList />

      <DrinksList />

      <About />

      <Contact />

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
          <PancakesOrderModal
            pancake={newItem}
            show={pancakeModalShow}
            onHide={() => setPancakeModalShow(false)}
          />
        </>
      )}
    </>
  );
}

export default Landing;
