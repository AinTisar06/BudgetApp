const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});

const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
});

const sortByDate = () => ({
  type: "SORT_BY_DATE",
});

const setStartDate = (timestamp) => ({
  type: "SET_START_DATE",
  timestamp,
});

const setEndDate = (timestamp) => ({
  type: "SET_END_DATE",
  timestamp,
});

export { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate };
