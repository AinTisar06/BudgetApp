import { React, useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setExpenses } from "./actions/expensesAction";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddExpense from "./pages/AddExpense";
import Edit from "./pages/Edit";
import Help from "./pages/Help";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

import firebase from "./firebase/firebase";
import "./styles/style.scss";

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isLoggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(setExpenses());
    }
  }, [isLoggedIn]);

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setLoggedIn(true);
      history.push("/dashboard");
    } else {
      setLoggedIn(false);
      history.push("/");
    }
  });

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/addExpense" component={AddExpense} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/help" component={Help} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
