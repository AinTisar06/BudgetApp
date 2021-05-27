import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashBoard from "./pages/Dashboard";
import Home from "./pages/Home";
import Create from "./pages/Create";

import "./styles/style.scss";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact  path="/" component={Home} />
        <Route path="/dashboard" component={DashBoard} />
        <Route path="/create" component={Create} />
      </Switch>
    </Router>
  );
}
