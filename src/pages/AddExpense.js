import { React } from "react";
import ExpenseForm from "../components/ExpenseForm";
import { useDispatch } from "react-redux";
import { addExpense } from "../actions/expensesAction";

function AddExpense(props) {

  const dispatch = useDispatch();
  return (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm
        onSubmit={(expense) => {
          dispatch(addExpense(expense));
          props.history.push("/dashboard");
        }}
      />
    </div>
  );
}

export default AddExpense;