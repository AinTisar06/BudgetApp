import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import configStore from "./store/configStore";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

const store = configStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
