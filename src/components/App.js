import React from "react";
import MainNavbar from "./MainNavbar";
import Routes from "./Routes";
import { CartProvider } from "../contexts/CartContext";
import { ToastProvider } from "../contexts/ToastContext";
import { NewPizzaProvider } from "../contexts/NewPizzaContext";
import { CurrIngredientsProvider } from "../contexts/CurrIngredientsContext";
import { Container } from "react-bootstrap";
import "../styles/App.css";

function App() {
  return (
    <CartProvider>
      <ToastProvider>
        <NewPizzaProvider>
          <CurrIngredientsProvider>
            <div className="App" id="home">
              <MainNavbar />
              <Container fluid="lg">
                <Routes />
              </Container>
            </div>
          </CurrIngredientsProvider>
        </NewPizzaProvider>
      </ToastProvider>
    </CartProvider>
  );
}

export default App;
