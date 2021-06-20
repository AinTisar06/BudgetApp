import { React } from "react";
import ExpenseForm from "../components/ExpenseForm";
import { useDispatch } from "react-redux";
import { startAddExpense } from "../actions/expensesAction";

export default function AddExpense(props) {

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm
        onSubmit={(expense) => {
          dispatch(startAddExpense(expense));
          props.history.push("/");
        }}
      />
    </div>
  );
}