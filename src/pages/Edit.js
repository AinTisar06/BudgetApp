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
    <>
      <Header path={props.location.pathname} />
      <div className="container">
        <h1>Edit Expense</h1>
        <ExpenseForm
          expense={expense}
          onSubmit={(changeObj) => {
            dispatch(editExpense(props.match.params.id, changeObj));
            props.history.push("/dashboard");
          }}
          delete={() => {
            dispatch(removeExpense(props.match.params.id));
            props.history.push("/dashboard");
          }}
        />
      </div>
    </>
  );
}

export default Edit;
