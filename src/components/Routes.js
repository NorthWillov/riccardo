import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import Landing from "./Landing";
import About from "./About";

function Routes(props) {
  return (
    <Switch>
      <Route
        exact
        path="/riccardo"
        render={() => (
          <Landing
            cart={props.cart}
            handleModalSubmit={props.handleModalSubmit}
          />
        )}
      />
      <Route exact path="/riccardo/about" render={() => <About />} />
      <Route
        exact
        path="/riccardo/promocje"
        render={() => (
          <h1>
            This page is in progress{" "}
            <Spinner animation="grow" variant="warning" />
          </h1>
        )}
      />
      <Route
        exact
        path="/riccardo/contact"
        render={() => (
          <h1>
            This page is in progress <Spinner animation="grow" variant="dark" />
          </h1>
        )}
      />
      <Redirect to="/riccardo" />
    </Switch>
  );
}

export default Routes;
