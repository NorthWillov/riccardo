import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";
import { MENU } from "../utils/constants";
import { Button, Form } from "react-bootstrap";
import { formatter } from "../utils/formatter";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/cartStyles";

function Cart(props) {
  const [sum, setSum] = useState(0);

  const { classes } = props;

  const { cart, setCart } = useContext(CartContext);
  console.log(cart);

  const incrementQuantity = (item) => {
    const updatedCart = cart.map((i) =>
      i.uniqId === item.uniqId ? { ...i, quantity: i.quantity + 1 } : i
    );
    setCart(updatedCart);
  };

  const removeItem = (item) => {
    const updatedCart = cart.filter((i) => i.uniqId !== item.uniqId);
    setCart(updatedCart);
  };

  const decrementQuantity = (item) => {
    if (item.quantity === 1) {
      removeItem(item);
    } else {
      const updatedCart = cart.map((i) =>
        i.uniqId === item.uniqId ? { ...i, quantity: i.quantity - 1 } : i
      );
      setCart(updatedCart);
    }
  };

  useEffect(() => {
    let counter = 0;
    cart.map(
      (product) => (counter = counter + product.price * product.quantity)
    );
    setSum(formatter.format(counter));
  }, [cart]);

  return (
    <div className={classes.root}>
      <h1 className="mt-5 mb-5">Koszyk:</h1>

      {cart.length === 0 && <h6>Koszyk jest pusty :(</h6>}

      {cart.map((item, idx) => (
        <div className={classes.item}>
          <div className={classes.itemCard}>
            <div className="mr-3">
              <img
                style={{ width: "100px", borderRadius: "0.5rem" }}
                src={item.image}
                alt="product"
              />
            </div>
            <div>
              <h6>{item.name}</h6>
              {item.type === "pizza" && (
                <>
                  <p>
                    {item.size}, {item.dough}
                  </p>
                  {MENU.pizzas[item.id - 1].ingredients !==
                    item.ingredients && (
                    <p>
                      Bez:{" "}
                      {MENU.pizzas[item.id - 1].ingredients.map((i) => {
                        return item.ingredients.includes(i) ? "" : i + " ";
                      })}
                    </p>
                  )}

                  {item.extras.length !== 0 && (
                    <p>
                      Dodaj:{" "}
                      {item.extras.map((e, idx) =>
                        item.extras[idx + 1] ? e.name + "," : e.name
                      )}
                    </p>
                  )}
                </>
              )}
              {item.type === "lunch" && (
                <>
                  {item.meat && <p>mięso: {item.meat}</p>}
                  <p>{item.first}</p>
                  <p>{item.second}</p>
                </>
              )}
              {item.type === "salad" && (
                <>
                  <p>{item.meat}</p>
                  <p>{item.sous}</p>
                </>
              )}
              {item.type === "sweetPancake" && (
                <>
                  <p>{item.way}</p>
                  <p>{item.jam}</p>
                  <p>{item.adds}</p>
                </>
              )}
              {item.type === "saltPancake" && (
                <>
                  <p>{item.sous}</p>
                </>
              )}
            </div>
          </div>
          <hr className="mt-3 mb-0" />
          <div className={classes.itemCheckout}>
            <h5 className={classes.productPrice}>
              {formatter.format(item.price * item.quantity)}PLN
            </h5>
            <div className={classes.productCount}>
              <Button
                onClick={() => decrementQuantity(item)}
                className={classes.buttonCount}
                variant="primary"
                size="sm"
              >
                -
              </Button>
              <Form.Control
                type="text"
                placeholder={item.quantity}
                className={classes.numberProduct}
                readOnly
              />

              <Button
                onClick={() => incrementQuantity(item)}
                variant="primary"
                size="sm"
                className={classes.buttonCount}
              >
                +
              </Button>
            </div>
          </div>
        </div>
      ))}

      <h4 className={classes.sumToPay}>Do zapłaty: {sum}PLN</h4>

      <hr className="mt-4" />

      <div className={classes.finalBtns}>
        <Button
          variant="outline-secondary"
          onClick={() => props.history.push("back")}
          className="mr-3"
          size="lg"
        >
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-arrow-left-short"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
            />
          </svg>
          Wroć
        </Button>
        <Button
          onClick={() =>
            alert(
              "****** HEY, THIS WEBSITE IS IN PROGRESS ****** TO ORDER A PIZZA USE OUR OLD WEBSITE http://riccardopizzeria.pl THANK YOU FOR UNDERSTANDING"
            )
          }
          size="lg"
          disabled={cart.length === 0}
          variant="success"
          type="button"
        >
          Zamawiam!
        </Button>
      </div>
    </div>
  );
}

export default withStyles(styles)(Cart);
