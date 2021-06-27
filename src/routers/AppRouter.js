import React from "react";
import { Switch, Route } from "react-router";
import { useSelector } from "react-redux";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import AddExpense from "../pages/AddExpense";
import Edit from "../pages/Edit";
import Help from "../pages/Help";
import NotFound from "../pages/NotFound";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AppRouter = () => {
  const isAuthenticated = useSelector((state) => !!state.auth.uid);

  return (
    <div>
      <Header isAuthenticated={isAuthenticated}/>
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
      <Footer />
    </div>
  );
};

export default AppRouter;
