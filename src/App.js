import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import history from "./history";
import Login from "./components/Login";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
