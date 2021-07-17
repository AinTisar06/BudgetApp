import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import gsap from "gsap";
import Expense from "./Expense";
import FilterForm from "./FilterForm";
import getVisibleExpenses from "../selectors/expensesSelector";
import ExpensesSummary from "./ExpensesSummary";

function ExpenseList() {
  const expenses = useSelector((state) =>
    getVisibleExpenses(state.expenses, state.filters)
  );
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".expense",
      {
        y: 10,
        opacity: 0,
      },
      {
        duration: 0.5,
        stagger: 0.1,
        opacity: 1,
        y: 0,
      }
    );
    return () => {
      tl.kill();
    };
  }, [expenses.length]);

  return (
    <div className="container">
      {expenses.length !== 0 ? <ExpensesSummary /> : <p>There is no expense</p>}
      <Link to="/addexpense" className="btn btn-add"></Link>

      <FilterForm />
      <div className="expenseList">
        <section className="expenseList-title">
          <h5>Date</h5>
          <h5>Description</h5>
          <h5>Note</h5>
          <h5>Amount</h5>
          <h5>Links</h5>
        </section>
        {expenses.map((expense) => (
          <Expense key={expense.id} expense={expense} />
        ))}
      </div>
    </div>
  );
}

export default ExpenseList;
