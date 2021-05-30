import React from "react";
import { createStore, combineReducers } from "redux";
import { v4 as uuidv4 } from "uuid";

const expensesReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.expense];
    case "REMOVE":
      return state.filter((item) => item.id !== action.id);
    case "EDIT":
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, ...action.changeObj };
        } else {
          return item;
        }
      });

    default:
      return state;
  }
};

const filtersReducerDefault = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};

const filtersReducer = (state = filtersReducerDefault, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  })
);

const addExpense = ({
  amount = 0,
  note = "",
  description = "",
  createdAt = 0,
} = {}) => ({
  type: "ADD",
  expense: {
    id: uuidv4(),
    description,
    note,
    amount,
    createdAt,
  },
});

const removeExpense = (id) => ({
  type: "REMOVE",
  id,
});

const editExpense = (id, changeObj) => ({
  type: "EDIT",
  id,
  changeObj,
});

store.subscribe(() => {
  console.log(store.getState());
});

const expenseOne = store.dispatch(
  addExpense({
    description: "Rent",
    amount: 300000,
  })
);
const expenseTwo = store.dispatch(
  addExpense({
    description: "Coffee",
    amount: 1000,
  })
);
store.dispatch(removeExpense(expenseOne.expense.id));

store.dispatch(editExpense(expenseTwo.expense.id, { amount: 850 }));

export default function Script() {
  return <div>Deneme</div>;
}
