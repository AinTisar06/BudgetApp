import moment from "moment";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from "../../actions/filtersAction";

test("Should setup setTextFilter action object with params", () => {
  const action = setTextFilter("test");
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "test",
  });
});

test("Should setup setTextFilter action object with default", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "",
  });
});
test("Should setup sortByAmount action object", () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: "SORT_BY_AMOUNT",
  });
});
test("Should setup sortByDate action object", () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: "SORT_BY_DATE",
  });
});

test("Should setup setStartDate action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    momentObj: moment(0),
  });
});
test("Should setup setEndDate action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    momentObj: moment(0),
  });
});
