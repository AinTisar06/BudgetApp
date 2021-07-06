import { React } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import ExpenseForm from "../components/ExpenseForm";
import { editExpense, removeExpense } from "../actions/expensesAction";

function Edit(props) {
  const expense = useSelector((state) => {
    return state.expenses.find(
      (expense) => expense.id === props.match.params.id
    );
  });
  const dispatch = useDispatch();

  return (
    <div>
      <Header path={props.location.pathname} />
      <ExpenseForm
        expense={expense}
        onSubmit={(changeObj) => {
          dispatch(editExpense(props.match.params.id, changeObj));
          props.history.push("/dashboard");
        }}
      />
      <button
        onClick={() => {
          dispatch(removeExpense(props.match.params.id));
          props.history.push("/dashboard");
        }}
      >
        Remove
      </button>
    </div>
  );
}

export default Edit;
