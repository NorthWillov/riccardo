import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Landing from "./Landing";
import PizzasList from "./PizzasList";

function Routes(props) {
  return (
    <Switch>
      <Route exact path="/riccardo" render={() => <Landing />} />
      <Route
        exact
        path="/riccardo/pizzas"
        render={() => (
          <PizzasList
            cart={props.cart}
            handleModalSubmit={props.handleModalSubmit}
          />
        )}
      />
      <Redirect to="/riccardo/pizzas" />
    </Switch>
  );
}

export default Routes;
