import {  v4 as uuidv4 } from "uuid";

const addExpense = ({
  amount = 0,
  note = "",
  description = "",
  createdAt = 0,
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuidv4(),
    description,
    note,
    amount,
    createdAt,
  },
});

const removeExpense = (id) => ({
  type: "REMOVE_EXPENSE",
  id,
});

const editExpense = (id, changeObj) => ({
  type: "EDIT_EXPENSE",
  id,
  changeObj,
});

export { addExpense, removeExpense, editExpense };