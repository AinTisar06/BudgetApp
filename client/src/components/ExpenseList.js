import React from "react";
import { connect } from "react-redux";

function ExpenseList(props) {
  return (
    <div>
      <h1>ExpenseList</h1>
      {props.filters.text}
      <p>{props.expenses.length}</p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  expenses: state.expenses,
  filters: state.filters,
});

export default connect(mapStateToProps)(ExpenseList);