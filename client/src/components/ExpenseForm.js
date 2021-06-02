import React, { useState } from "react";
import { connect } from "react-redux";
import { addExpense } from "../actions/expensesAction";

function ExpenseForm(props) {
  const [state, setState] = useState({});

  const handleDescription = (e) => {
    const description = e.target.value;
    setState({ ...state, description });
  };

  const handleAmount = (e) => {
    let amount = e.target.value;
    // Regular Expression for Money 
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      setState({ ...state, amount });
    }
  };

  const handleNote = (e) => {
    const note = e.target.value;
    setState({ ...state, note });
  };

  const handleAddExpense = (e) => {
    e.preventDefault();
    props.dispatch(addExpense(state));
    setState({ description: "", note: "", amount: 0 });
  };

  return (
    <div>
      <form onSubmit={handleAddExpense}>
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={state.description || ""}
          onChange={handleDescription}
          autoFocus
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={state.amount || ""}
          onChange={handleAmount}
        />
        <textarea
          placeholder="Note"
          name="note"
          value={state.note || ""}
          onChange={handleNote}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default connect()(ExpenseForm);
