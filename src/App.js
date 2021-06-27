import { React } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setExpenses } from "./actions/expensesAction";
import { login, logout } from "./actions/authAction";

import AppRouter from "./routers/AppRouter";
import firebase from "./firebase/firebase";
import "./styles/style.scss";

function App() {
  const dispatch = useDispatch();
  const history = useHistory();

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      dispatch(login(user));
      dispatch(setExpenses());
      history.push("/dashboard");
    } else {
      dispatch(logout());
      history.push("/");
    }
  });

  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
