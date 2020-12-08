import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/pizzaOrderModalSizeAndDoughStyles";

function PizzaOrderModalSizeAndDough(props) {
  const {
    size,
    dough,
    newPizza,
    handleSizeChange,
    handleDoughChange,
    classes,
  } = props;

  return (
    <>
      <h6>Rozmiar:</h6>
      <div className={classes.group} onChange={handleSizeChange}>
        <input
          className={classes.input}
          type="radio"
          name="rb-size"
          id="rb1"
          checked={size === "20cm"}
          value="20cm"
          disabled={newPizza.name === "Calzone (Pierog)"}
          readOnly
        />
        <label className={classes.label} htmlFor="rb1">20cm</label>
        <input
          className={classes.input}
          type="radio"
          name="rb-size"
          id="rb2"
          value="28cm"
          checked={size === "28cm" || newPizza.name === "Calzone (Pierog)"}
          readOnly
        />
        <label className={classes.label} htmlFor="rb2">28cm</label>
        <input
          className={classes.input}
          type="radio"
          name="rb-size"
          id="rb3"
          value="50cm"
          checked={size === "50cm"}
          disabled={dough === "grube" || newPizza.name === "Calzone (Pierog)"}
          readOnly
        />
        <label className={classes.label} htmlFor="rb3">50cm</label>
      </div>
      <h6>Ciasto:</h6>
      <div className={classes.group} onChange={handleDoughChange}>
        <input
          className={classes.input}
          type="radio"
          name="rb-dough"
          id="rb4"
          value="cieńkie"
          checked={dough === "cieńkie"}
          disabled={newPizza.name === "Calzone (Pierog)"}
          readOnly
        />
        <label className={classes.label} htmlFor="rb4">cieńkie</label>
        <input
          className={classes.input}
          type="radio"
          name="rb-dough"
          id="rb5"
          value="średnie"
          checked={dough === "średnie" || newPizza.name === "Calzone (Pierog)"}
          readOnly
        />
        <label className={classes.label} htmlFor="rb5">średnie</label>
        <input
          className={classes.input}
          type="radio"
          name="rb-dough"
          id="rb6"
          value="grube"
          checked={dough === "grube"}
          disabled={size === "50cm" || newPizza.name === "Calzone (Pierog)"}
          readOnly
        />
        <label className={classes.label}ƒ htmlFor="rb6">grube</label>
      </div>
    </>
  );
}

export default withStyles(styles)(PizzaOrderModalSizeAndDough);
