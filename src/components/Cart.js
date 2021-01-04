import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { MENU } from "../utils/constants";

function Cart(props) {
  const { cart } = useContext(CartContext);
  console.log(cart);

  const findDeletedIngredients = (pizza, pizzaId) => {
    pizza.ingredients.map((i) => {
      return MENU.pizzas[pizzaId + 1].ingredients.includes(i) ? "" : i;
    });
  };

  return (
    <div>
      <h1>CART:</h1>

      {cart.map(
        (item, idx) =>
          item.type === "pizza" && (
            <div key={idx}>
              <img style={{ width: "50px" }} src={item.image} />
              <h6>{item.name}</h6>
              <p>{item.size}</p>
              <p>{item.dough}</p>
              <p>
                Bez:
                {MENU.pizzas[item.id - 1].ingredients.map((i) => {
                  return item.ingredients.includes(i) ? "" : i;
                })}
              </p>
              <p>Dodaj: {item.extras.map((e) => e.name)}</p>
              <h4>{item.price} PLN</h4>
            </div>
          )
      )}
    </div>
  );
}

export default Cart;
