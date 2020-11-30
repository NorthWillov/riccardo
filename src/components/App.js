import React, { useState } from "react";
import Navbar from "./Navbar";
import Routes from "./Routes";
import { ToastProvider } from "../contexts/ToastContext";
import { NewPizzaProvider } from "../contexts/NewPizzaContext";
import "../styles/App.css";

function App() {
  const [cart, setCart] = useState([]);

  const handleModalSubmit = (newItem) => {
    setCart([...cart, newItem]);
  };

  return (
    <ToastProvider>
      <NewPizzaProvider>
        <div className="App">
          <Navbar cart={cart} />
          <div className="container-lg">
            <Routes cart={cart} handleModalSubmit={handleModalSubmit} />
          </div>
        </div>
      </NewPizzaProvider>
    </ToastProvider>
  );
}

export default App;
