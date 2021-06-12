import moment from "moment";
import expensesReducer from "../../reducers/expensesReducer";
import expenses from "../fixtures/expenses";

test("Should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("Should add new expense to state", () => {
  const newExpense = {
    id: "4",
    description: "Test",
    note: "Test",
    amount: 9000,
    createdAt: moment(0).valueOf(),
  };
  const state = expensesReducer(expenses, {
    type: "ADD_EXPENSE",
    expense: newExpense,
  });
  expect(state).toEqual([...expenses, newExpense]);
});

test("Should remove expense by id", () => {
  const state = expensesReducer(expenses, { type: "REMOVE_EXPENSE", id: "2" });
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("Should'nt remove expense by wrong id", () => {
  const state = expensesReducer(expenses, { type: "REMOVE_EXPENSE", id: "4" });
  expect(state).toEqual(expenses);
});

test("Should edit expense with param", () => {
  const newExpense = {
    description: "Change",
    amount: 3000,
  };

  const state = expensesReducer(expenses, {
    type: "EDIT_EXPENSE",
    changeObj: newExpense,
    id: "3",
  });
  expect(state).toEqual([
    expenses[0],
    expenses[1],
    {
      id: "3",
      description: "Change",
      note: "En para",
      amount: 3000,
      createdAt: moment(0).add(3, "days").valueOf(),
    },
  ]);
});

test("Should'nt edit expense with wrong param", () => {
  const newExpense = {
    description: "Change",
    amount: 3000,
  };

  const state = expensesReducer(expenses, {
    type: "EDIT_EXPENSE",
    changeObj: newExpense,
    id: "5",
  });
  expect(state).toEqual(expenses);
});
