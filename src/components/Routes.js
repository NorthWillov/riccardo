import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Landing from "./Landing";

function Routes(props) {
  return (
    <Switch>
      <Route exact path="/riccardo" render={() => <Landing />} />
      <Redirect to="/riccardo" />
    </Switch>
  );
}

export default Routes;
