import React, { Component } from "react";
import moment from "moment";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

export default class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    const defaultStateObj = {
      description: "",
      note: "",
      amount: "",
      createdAt: moment(),
      focused: false,
      error: "",
    };

    this.state = props.expense
      ? {
          ...props.expense,
          createdAt: moment(props.expense.createdAt),
          focused: false,
          error: "",
        }
      : defaultStateObj;
  }

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ focused }));
  };

  handleDescription = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  handleAmount = (e) => {
    const amount = e.target.value;
    // Regular Expression for Money
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  handleNote = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  handleAddExpense = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: "Please provide description and amount!",
      }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount),
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
      });
      this.setState(() => ({
        description: "",
        note: "",
        amount: "",
        createdAt: moment(),
      }));
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddExpense}>
          <input
            type="text"
            placeholder="Description"
            name="description"
            value={this.state.description}
            onChange={this.handleDescription}
            autoFocus
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.handleAmount}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.focused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            name="note"
            placeholder="Note"
            value={this.state.note}
            onChange={this.handleNote}
          />
          <button type="submit">
            {this.props.expense ? "Edit Expense" : "Add Expense"}
          </button>
        </form>
      </div>
    );
  }
}
