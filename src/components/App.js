import React, { useState } from "react";
import Navbar from "./Navbar";
import PizzasList from "./PizzasList";
import "../styles/App.css";

function App() {
  const [cart, setCart] = useState([]);

  const handleModalSubmit = (newItem) => {
    setCart([...cart, newItem]);
  };

  return (
    <div className="App">
      <div className="container-lg">
        <Navbar cart={cart} />
        <PizzasList cart={cart} handleModalSubmit={handleModalSubmit} />
      </div>
    </div>
  );
}

export default App;
