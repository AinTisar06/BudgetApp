import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import configStore from "./store/configStore";
import { addExpense } from "./actions/expensesAction";

import Home from "./pages/Home";
import AddExpense from "./pages/AddExpense";
import Edit from "./pages/Edit";
import Help from "./pages/Help";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./styles/style.scss";

const store = configStore();

// store.subscribe(() => {
//   console.log(store.getState());
// });

store.dispatch(addExpense({ description: "Water bill", amount: 120 }));
store.dispatch(addExpense({ description: "Gas bill" }));
store.dispatch(addExpense({ description: "Rent", amount: 109500 }));

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/addExpense" component={AddExpense} />
          <Route path="/edit/:id" component={Edit} />
          <Route path="/help" component={Help} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}
