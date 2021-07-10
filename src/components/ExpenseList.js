import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Expense from "./Expense";
import FilterForm from "./FilterForm";
import getVisibleExpenses from "../selectors/expensesSelector";
import ExpensesSummary from "./ExpensesSummary";

function ExpenseList() {
  const expenses = useSelector((state) =>
    getVisibleExpenses(state.expenses, state.filters)
  );
  return (
    <div className="container">
      {expenses.length !== 0 ? <ExpensesSummary /> : <p>There is no expense</p>}
      <Link to="/addexpense" className="btn btn-add"></Link>

      <FilterForm />
      <div className="expenseList">
        <div className="expenseList-title">
          <h5>Date</h5>
          <h5>Description</h5>
          <h5>Note</h5>
          <h5>Amount</h5>
          <h5>Links</h5>
        </div>
        {expenses.map((expense) => (
          <Expense key={expense.id} expense={expense} />
        ))}
      </div>
    </div>
  );
}

export default ExpenseList;
