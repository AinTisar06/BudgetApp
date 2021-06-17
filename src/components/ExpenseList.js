import React from "react";
import { connect } from "react-redux";
import Expense from "./Expense";
import FilterForm from "./FilterForm";
import getVisibleExpenses from "../selectors/expensesSelector";
import expensesTotal from "../selectors/expensesTotal";

function ExpenseList(props) {
  return (
    <div>
      <h1>ExpenseList</h1>
      <h3>Expense count: {props.expenses.length}</h3>
      <h3>Expenses total: {expensesTotal(props.expenses)}</h3>
      {props.expenses.map((expense) => (
        <Expense key={expense.id} expense={expense} />
      ))}
      <FilterForm />
    </div>
  );
}

const mapStateToProps = (state) => ({
  expenses: getVisibleExpenses(state.expenses, state.filters),
});

export default connect(mapStateToProps)(ExpenseList);
