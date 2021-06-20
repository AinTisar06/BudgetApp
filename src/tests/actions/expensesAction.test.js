import {
  addExpense,
  removeExpense,
  editExpense,
} from "../../actions/expensesAction";
import expenses from "../fixtures/expenses";


test("Should setup remove expense action object", () => {
  const action = removeExpense("1235sfgfdSDA15");
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "1235sfgfdSDA15",
  });
});

test("Should setup edit expense action object", () => {
  const action = editExpense("123abc", { note: "deneme" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    changeObj: { note: "deneme" },
  });
});

test("Should setup add expense action object with params", () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[2],
  });
});

// test("Should setup add expense action object with defaults", () => {
//   const action = addExpense();
//   expect(action).toEqual({
//     type: "ADD_EXPENSE",
//     expense: {
//       id: expect.any(String),
//       amount: 0,
//       note: "",
//       description: "",
//       createdAt: 0,
//     },
//   });
// });
