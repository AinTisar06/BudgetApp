import React from "react";
import { useSelector } from "react-redux";
import getVisibleExpenses from "../selectors/expensesSelector";
import expensesTotal from "../selectors/expensesTotal";

function ExpensesSummary() {
  const visibleExpenses = useSelector((state) =>
    getVisibleExpenses(state.expenses, state.filters)
  );
  const expensesCount = visibleExpenses.length;
  const total = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
  }).format(expensesTotal(visibleExpenses));

  return (
    <>
      <p>
        Viewing: <strong>{` ${expensesCount}`}</strong>
        {expensesCount > 1 ? " expenses" : " expense"}. Totaling:
        <strong>{` ${total}`}</strong>
      </p>
    </>
  );
}

export default ExpensesSummary;
