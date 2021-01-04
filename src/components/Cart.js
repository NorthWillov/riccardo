import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

function Cart(props) {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h1>CART:</h1>
      {cart.map((item) => (
        <p>{item.name}</p>
      ))}
    </div>
  );
}

export default Cart;
