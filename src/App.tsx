import React from "react";
import { Navigation } from "./views/Common-Components/Navigation/Navigation";
import Registration from "./views/Registration/Registration";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./views/Login/Login";
import Dashboard from "./views/Dashboard/Dashboard";

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/register">
            <Registration />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
