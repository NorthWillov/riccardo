import React from "react";
import MainNavbar from "./MainNavbar";
import Routes from "./Routes";
import { CartProvider } from "../contexts/CartContext";
import { ToastProvider } from "../contexts/ToastContext";
import { NewItemProvider } from "../contexts/NewItemContext";
import { CurrIngredientsProvider } from "../contexts/CurrIngredientsContext";
import { Container } from "react-bootstrap";
import "../styles/App.css";

function App() {
  return (
    <CartProvider>
      <ToastProvider>
        <NewItemProvider>
          <CurrIngredientsProvider>
            <div className="App" id="home">
              <MainNavbar />
              <Container fluid="lg">
                <Routes />
              </Container>
            </div>
          </CurrIngredientsProvider>
        </NewItemProvider>
      </ToastProvider>
    </CartProvider>
  );
}

export default App;
