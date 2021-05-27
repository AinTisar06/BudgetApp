import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashBoard from "./pages/Dashboard";
import Home from "./pages/Home";
import AddExpense from "./pages/AddExpense";
import Edit from "./pages/Edit";
import Help from "./pages/Help";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";


import "./styles/style.scss";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact  path="/" component={Home} />
        <Route path="/dashboard" component={DashBoard} />
        <Route path="/addExpense" component={AddExpense} />
        <Route path="/edit" component={Edit} />
        <Route path="/help" component={Help} />
        <Route component={NotFound}/>
      </Switch>
      <Footer />
    </Router>
  );
}
