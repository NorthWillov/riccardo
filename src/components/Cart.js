import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { MENU } from "../utils/constants";
import { Table } from "react-bootstrap";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/cartStyles";

function Cart(props) {
  const { classes } = props;

  const { cart } = useContext(CartContext);
  console.log(cart);

  return (
    <div>
      <h1>CART:</h1>

      {/* {cart.map(
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
      )} */}
      <Table responsive>
        <tbody>
          {cart.map(
            (item, idx) =>
              item.type === "pizza" && (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>
                    <img
                      style={{ width: "50px" }}
                      src={item.image}
                      alt="product"
                    />
                    <h6>{item.name}</h6>
                    <p>{item.size}</p>
                    <p>{item.dough}</p>
                    <p>
                      Bez:
                      {MENU.pizzas[item.id - 1].ingredients.map((i) => {
                        return item.ingredients.includes(i) ? "" : i;
                      })}
                    </p>
                    <p>
                      Dodaj:{" "}
                      {item.extras.map((e, idx) =>
                        item.extras[idx + 1] ? e.name + "," : e.name
                      )}
                    </p>
                  </td>
                  <td>
                    <div className={classes.productCount}>
                      <button className={classes.buttonCount}>-</button>
                      <input
                        type="text"
                        readOnly
                        className={classes.numberProduct}
                        value={item.quantity}
                      />
                      <button className={classes.buttonCount}>+</button>
                    </div>
                  </td>
                  <td>
                    <h5>{item.price} PLN</h5>
                  </td>
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash2-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z" />
                    </svg>
                  </td>
                </tr>
              )
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default withStyles(styles)(Cart);
