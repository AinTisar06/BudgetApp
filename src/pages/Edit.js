import { React } from "react";
import { connect } from "react-redux";
import ExpenseForm from "../components/ExpenseForm";
import { editExpense, removeExpense } from "../actions/expensesAction";

function Edit(props) {
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(changeObj) => {
          props.dispatch(editExpense(props.match.params.id, changeObj));
          props.history.push("/");
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeExpense(props.match.params.id));
          props.history.push("/");
        }}
      >
        Remove
      </button>
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(
    (expense) => expense.id === props.match.params.id
  ),
});

export default connect(mapStateToProps)(Edit);
