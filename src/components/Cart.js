import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { MENU } from "../utils/constants";
import { Table } from "react-bootstrap";
import { formatter } from "../utils/formatter";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/cartStyles";

function Cart(props) {
  const { classes } = props;

  const { cart, setCart } = useContext(CartContext);
  console.log(cart);

  const incrementQuantity = (item) => {
    const updatedCart = cart.map((i) =>
      i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
    );
    setCart(updatedCart);
  };

  const decrementQuantity = (item) => {
    const updatedCart = cart.map((i) =>
      i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
    );
    setCart(updatedCart);
  };

  const removeItem = (item) => {
    const updatedCart = cart.filter((i) => i.id !== item.id);
    setCart(updatedCart);
  };

  return (
    <div>
      <h1>CART:</h1>

      <Table responsive>
        <tbody>
          {cart.map((item, idx) => (
            <tr key={idx}>
              <td>
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
                              return item.ingredients.includes(i)
                                ? ""
                                : i + " ";
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
              </td>
              <td>
                <div className={classes.productCount}>
                  <button
                    onClick={() => decrementQuantity(item)}
                    disabled={item.quantity <= 1}
                    className={classes.buttonCount}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    readOnly
                    className={classes.numberProduct}
                    value={item.quantity}
                  />
                  <button
                    onClick={() => incrementQuantity(item)}
                    className={classes.buttonCount}
                  >
                    +
                  </button>
                </div>
              </td>
              <td>
                <h5 className={classes.productPrice}>
                  {formatter.format(item.price * item.quantity)}PLN
                </h5>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="black"
                  className={`${classes.trashIcon} bi bi-trash2-fill`}
                  viewBox="0 0 16 16"
                  onClick={() => removeItem(item)}
                >
                  <path d="M2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z" />
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default withStyles(styles)(Cart);
