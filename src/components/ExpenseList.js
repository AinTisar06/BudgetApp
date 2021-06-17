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
      {props.expenses.length !== 0 && (
        <>
          <h5>Expense count: {props.expenses.length}</h5>
          <h5>
            Expenses total:
            {new Intl.NumberFormat("tr-TR", {
              style: "currency",
              currency: "TRY",
            }).format(expensesTotal(props.expenses))}
          </h5>
          
        </>
      )}
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
