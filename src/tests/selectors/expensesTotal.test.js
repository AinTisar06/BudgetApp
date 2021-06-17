import expensesTotal from "../../selectors/expensesTotal";
import expenses from "../fixtures/expenses";

test("Should retun 0", () => {
  const result = expensesTotal([]);
  expect(result).toBe(0);
});

test("Should work with 1 expense", () => {
  const result = expensesTotal([expenses[0]]);
  expect(result).toBe(3000);
})

test("Should work with multi expense", () => {
  const result = expensesTotal(expenses);
  expect(result).toBe(3215.15);
})