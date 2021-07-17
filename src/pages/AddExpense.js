import { React } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../actions/expensesAction";
import Header from "../components/Header";
import ExpenseForm from "../components/ExpenseForm";

function AddExpense(props) {
  const dispatch = useDispatch();
  return (
    <>
      <Header path={props.location.pathname} />
      <div className="container">
        <h1>Add Expense</h1>
        <ExpenseForm
          onSubmit={(expense) => {
            dispatch(addExpense(expense));
            props.history.push("/dashboard");
          }}
        />
      </div>
    </>
  );
}

export default AddExpense;
