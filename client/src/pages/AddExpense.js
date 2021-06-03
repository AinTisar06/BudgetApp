import { React } from "react";
import ExpenseForm from "../components/ExpenseForm";
import { connect } from "react-redux";
import { addExpense } from "../actions/expensesAction";

function AddExpense(props) {
  return (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm
        onSubmit={(expense) => {
          props.dispatch(addExpense(expense));
          props.history.push("/");
        }}
      />
    </div>
  );
}

export default connect()(AddExpense);
