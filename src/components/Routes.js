import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Landing from "./Landing";
import Cart from "./Cart";

function Routes(props) {
  return (
    <Switch>
      <Route exact path="/riccardo" render={() => <Landing />} />
      <Route exact path="/riccardo/cart" render={() => <Cart />} />
      <Redirect to="/riccardo" />
    </Switch>
  );
}

export default Routes;
