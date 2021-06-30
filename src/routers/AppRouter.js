import React from "react";
import { Switch, Route } from "react-router";
import { useSelector } from "react-redux";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import AddExpense from "../pages/AddExpense";
import Edit from "../pages/Edit";
import Help from "../pages/Help";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  const isAuthenticated = useSelector((state) => !!state.auth.uid);

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route
          path="/dashboard"
          component={isAuthenticated ? Dashboard : Login}
        />
        <Route
          path="/addexpense"
          component={isAuthenticated ? AddExpense : Login}
        />
        <Route path="/edit/:id" component={isAuthenticated ? Edit : Login} />
        <Route path="/help" component={Help} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default AppRouter;
