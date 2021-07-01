import { React } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../actions/expensesAction";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ExpenseForm from "../components/ExpenseForm";

function AddExpense(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <Header path={props.location.pathname}/>
      <h1>Add Expense</h1>
      <ExpenseForm
        onSubmit={(expense) => {
          dispatch(addExpense(expense));
          props.history.push("/dashboard");
        }}
      />
      <Footer />
    </div>
  );
}

export default AddExpense;
