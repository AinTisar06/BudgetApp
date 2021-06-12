import moment from "moment";
import filtersReducer from "../../reducers/filtersReducer";

test("Should setup default filter value", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  });
});

test("Should set text filter to value", () => {
  const currentState = {
    text: "Rent",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
  };
  const state = filtersReducer(currentState, {
    type: "SET_TEXT_FILTER",
    text: "test",
  });
  expect(state.text).toBe("test");
});

test("Should set sortBy to amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("Shoul set sortBy to date", () => {
  const currentState = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
  };
  const state = filtersReducer(currentState, { type: "SORT_BY_DATE" });
  expect(state.sortBy).toBe("date");
});

test("Should set startDate to value", () => {
  const currentState = {
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: undefined,
  };
  const state = filtersReducer(currentState, {
    type: "SET_START_DATE",
    momentObj: moment(0),
  });
  expect(state.startDate).toEqual(moment(0));
});

test("Should set endDate to value", () => {
  const currentState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: moment().endOf("month"),
  };
  const state = filtersReducer(currentState, {
    type: "SET_END_DATE",
    momentObj: moment(0),
  });
  expect(state.endDate).toEqual(moment(0));
});
