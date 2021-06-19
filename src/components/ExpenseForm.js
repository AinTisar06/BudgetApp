import React, { useState } from "react";
import moment from "moment";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

function ExpenseForm(props) {
  const [description, setDescription] = useState(
    props.expense ? props.expense.description : ""
  );
  const [note, setNote] = useState(props.expense ? props.expense.note : "");
  const [amount, setAmount] = useState(
    props.expense ? props.expense.amount : 0
  );
  const [createdAt, setCreatedAt] = useState(
    props.expense ? moment(props.expense.createdAt) : moment()
  );
  const [focused, setFocused] = useState(false);
  const [error, setError] = useState("");

  const handleDescription = (e) => {
    const description = e.target.value;
    setDescription(description);
  };

  const handleAmount = (e) => {
    const amount = e.target.value;
    // Regular Expression for Money
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      setAmount(amount);
    }
  };

  const handleNote = (e) => {
    const note = e.target.value;
    setNote(note);
  };

  const onDateChange = (date) => {
    setCreatedAt(date);
  };

  const onFocusChange = ({ focused }) => {
    setFocused(focused);
  };

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (!description || !amount) {
      setError("Please provide description and amount!");
    } else {
      setError("");
      props.onSubmit({
        description,
        note,
        amount: parseFloat(amount),
        createdAt: createdAt.valueOf(),
      });
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={handleAddExpense}>
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={description}
          onChange={handleDescription}
          autoFocus
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={amount}
          onChange={handleAmount}
        />
        <SingleDatePicker
          date={createdAt}
          onDateChange={onDateChange}
          focused={focused}
          onFocusChange={onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          id="murat"
        />
        <textarea
          name="note"
          placeholder="Note"
          value={note}
          onChange={handleNote}
        />
        <button type="submit">
          {props.expense ? "Edit Expense" : "Add Expense"}
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm;
