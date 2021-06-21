import React from "react";
import { useSelector } from "react-redux";
import Expense from "./Expense";
import FilterForm from "./FilterForm";
import getVisibleExpenses from "../selectors/expensesSelector";
import ExpensesSummary from "./ExpensesSummary";

function ExpenseList(props) {
  const expenses = useSelector((state) =>
    getVisibleExpenses(state.expenses, state.filters)
  );
  return (
    <div>
      <h1>ExpenseList</h1>

      {expenses.length !== 0 ? <ExpensesSummary /> : <p>There is no expense</p>}
      {expenses.map((expense) => (
        <Expense key={expense.id} expense={expense} />
      ))}
      <FilterForm />
    </div>
  );
}

export default ExpenseList;
