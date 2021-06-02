import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expensesAction";

function Expense({dispatch, id, description, amount, createdAt}) {
  const handleRemove = () => {
    dispatch(removeExpense(id));
  };
  return (
    <div>
      <h2>{description}</h2>
      <p>
        {amount} - {createdAt}
      </p>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}

export default connect()(Expense);
