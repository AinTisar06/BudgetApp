import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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

function FilterForm() {
  const [state, setState] = useState({
    focusedInput: null,
  });
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const handleInput = (e) => {
    const userInput = e.target.value;
    dispatch(setTextFilter(userInput));
  };

  const handleSelect = (e) => {
    e.target.value === "date"
      ? dispatch(sortByDate())
      : dispatch(sortByAmount());
  };

  const onDatesChange = ({ startDate, endDate }) => {
    dispatch(setStartDate(startDate));
    dispatch(setEndDate(endDate));
  };

  const onFocusChange = (focusedInput) => {
    setState(() => ({ focusedInput }));
  };

  return (
    <div>
      <fieldset className="filter container">
        <legend>Filter Your expenses</legend>
        <section>
          <input
            type="text"
            name="filter"
            onChange={handleInput}
            value={filters.text}
            placeholder="Search"
            className="filter-text"
          />
          <select
            onChange={handleSelect}
            value={filters.sortBy}
            className="filter-select"
          >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>
        </section>

        <DateRangePicker
          startDate={filters.startDate}
          startDateId="baslangic_id"
          endDate={filters.endDate}
          endDateId="bitis_id"
          onDatesChange={onDatesChange}
          focusedInput={state.focusedInput}
          onFocusChange={onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </fieldset>
    </div>
  );
}

export default FilterForm;
