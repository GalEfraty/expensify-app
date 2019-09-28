import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import moment from "moment";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

store.dispatch(
  addExpense({
    description: "Water bill",
    amount: 4500,
    createdAt: moment().valueOf()
  })
);
store.dispatch(
  addExpense({ description: "Gas bill", createdAt: moment().valueOf() })
);
store.dispatch(
  addExpense({
    description: "Rent",
    amount: 109500,
    createdAt: moment().valueOf()
  })
);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));