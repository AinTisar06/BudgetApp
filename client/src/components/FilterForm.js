import React from "react";
import { connect } from "react-redux";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
} from "../actions/filtersAction";

function FilterForm(props) {
  const handleInput = (e) => {
    const userInput = e.target.value;
    props.dispatch(setTextFilter(userInput));
  };

  const handleSelect = (e) => {
    const selected = e.target.value;
    if (selected === "date") {
      props.dispatch(sortByDate());
    } else if (selected === "amount") {
      props.dispatch(sortByAmount());
    }
  };

  return (
    <div>
      <input
        type="text"
        name="filter"
        onChange={handleInput}
        value={props.filters.text}
      />
      <select onChange={handleSelect} value={props.filters.sortBy}>
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
    </div>
  );
}

const mapStateToProps = (state) => ({
  filters: state.filters,
});

export default connect(mapStateToProps)(FilterForm);
