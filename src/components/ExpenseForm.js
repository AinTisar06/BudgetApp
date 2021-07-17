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
    if (error) {
      setError("");
    }
    const description = e.target.value;
    setDescription(description);
  };

  const handleAmount = (e) => {
    if (error) {
      setError("");
    }
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
    if (!description || parseFloat(amount) <= 0) {
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
    <div className="expense-form">
      {error && <p className="expense-form-error">{error}</p>}
      <form onSubmit={handleAddExpense}>
        <input
          type="text"
          placeholder="Description"
          name="description"
          className="expense-form__desc"
          value={description}
          onChange={handleDescription}
          autoFocus
        />
        <input
          type="number"
          name="amount"
          className="expense-form__amount"
          placeholder="Amount"
          value={amount}
          onChange={handleAmount}
        />
        <textarea
          rows="5"
          name="note"
          placeholder="Note"
          className="expense-form__note"
          value={note}
          onChange={handleNote}
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
        <div className="expense-form__buttons">
          <button
            type="submit"
            className={props.expense ? "btn btn-edit" : "btn btn-add"}
          ></button>
          {props.delete && (
            <button
              className="btn btn-remove expense-form__remove"
              onClick={props.delete}
            ></button>
          )}
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
