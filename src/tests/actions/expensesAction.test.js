import { removeExpense, editExpense } from "../../actions/expensesAction";

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
