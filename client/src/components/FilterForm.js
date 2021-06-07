import React, { Component } from "react";
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

class FilterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focusedInput: null,
    };
  }

  handleInput = (e) => {
    const userInput = e.target.value;
    this.props.dispatch(setTextFilter(userInput));
  };

  handleSelect = (e) => {
    const selected = e.target.value;
    if (selected === "date") {
      this.props.dispatch(sortByDate());
    } else if (selected === "amount") {
      this.props.dispatch(sortByAmount());
    }
  };

  onDatesChange = ({ startDate, endDate }) => {
    console.log(startDate, endDate);
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="filter"
          onChange={this.handleInput}
          value={this.props.filters.text}
        />
        <select onChange={this.handleSelect} value={this.props.filters.sortBy}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>

        <DateRangePicker
          startDate={this.props.filters.startDate}
          startDateId="baslangic_id"
          endDate={this.props.filters.endDate}
          endDateId="bitis_id"
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.focusedInput}
          onFocusChange={(focusedInput) => this.setState({ focusedInput })}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters,
});

export default connect(mapStateToProps)(FilterForm);
