import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import Landing from "./Landing";
import PizzasList from "./PizzasList";
import About from "./About";

function Routes(props) {
  return (
    <Switch>
      <Route
        exact
        path="/riccardo"
        render={() => <Landing handleModalSubmit={props.handleModalSubmit} />}
      />
      <Route
        exact
        path="/riccardo/obiade"
        render={() => (
          <h1>
            This page is in progress{" "}
            <Spinner animation="grow" variant="primary" />
          </h1>
        )}
      />
      <Route
        exact
        path="/riccardo/napoje"
        render={() => (
          <h1>
            This page is in progress{" "}
            <Spinner animation="grow" variant="success" />
          </h1>
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
      <Redirect to="/riccardo" />
    </Switch>
  );
}

export default Routes;
