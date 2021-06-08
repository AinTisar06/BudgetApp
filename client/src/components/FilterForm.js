import React, { useState } from "react";
import { connect } from "react-redux";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from "../actions/filtersAction";

function FilterForm(props) {
  const [state, setState] = useState({
    focusedInput: null,
  });

  const handleInput = (e) => {
    const userInput = e.target.value;
    if (userInput) {
      props.dispatch(setTextFilter(userInput));
    }
  };

  const handleSelect = (e) => {
    e.target.value === "date"
      ? props.dispatch(sortByDate())
      : props.dispatch(sortByAmount());
  };

  const onDatesChange = ({ startDate, endDate }) => {
    props.dispatch(setStartDate(startDate));
    props.dispatch(setEndDate(endDate));
  };

  const onFocusChange = (focusedInput) => {
    setState(() => ({ focusedInput }));
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

      <DateRangePicker
        startDate={props.filters.startDate}
        startDateId="baslangic_id"
        endDate={props.filters.endDate}
        endDateId="bitis_id"
        onDatesChange={onDatesChange}
        focusedInput={state.focusedInput}
        onFocusChange={onFocusChange}
        showClearDates={true}
        numberOfMonths={1}
        isOutsideRange={() => false}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  filters: state.filters,
});

export default connect(mapStateToProps)(FilterForm);
