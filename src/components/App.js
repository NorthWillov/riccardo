import React, { useState } from "react";
import Navbar from "./Navbar";
import PizzasList from "./PizzasList";
import { ToastProvider } from "../contexts/ToastContext";
import { NewPizzaProvider } from "../contexts/NewPizzaContext";
import "../styles/App.css";

function App() {
  const [cart, setCart] = useState([]);

  const handleModalSubmit = (newItem) => {
    setCart([...cart, newItem]);
  };

  return (
    <div className="App">
      <ToastProvider>
        <NewPizzaProvider>
          <Navbar cart={cart} />
          <div className="container-lg">
            <PizzasList cart={cart} handleModalSubmit={handleModalSubmit} />
          </div>
        </NewPizzaProvider>
      </ToastProvider>
    </div>
  );
}

export default App;
