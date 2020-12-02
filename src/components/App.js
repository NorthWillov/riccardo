import React, { useState } from "react";
import NavbarMenu from "./Navbar";
import Routes from "./Routes";
import { ToastProvider } from "../contexts/ToastContext";
import { NewPizzaProvider } from "../contexts/NewPizzaContext";
import { CurrIngredientsProvider } from "../contexts/CurrIngredientsContext";
import "../styles/App.css";

function App() {
  const [cart, setCart] = useState([]);

  const handleModalSubmit = (newItem) => {
    setCart([...cart, newItem]);
  };

  return (
    <ToastProvider>
      <NewPizzaProvider>
        <CurrIngredientsProvider>
          <div className="App">
            <NavbarMenu cart={cart} />
            <div className="container-lg">
              <Routes cart={cart} handleModalSubmit={handleModalSubmit} />
            </div>
          </div>
        </CurrIngredientsProvider>
      </NewPizzaProvider>
    </ToastProvider>
  );
}

export default App;
