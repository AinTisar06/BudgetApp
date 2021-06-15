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

const setStartDate = (momentObj) => ({
  type: "SET_START_DATE",
  momentObj,
});

const setEndDate = (momentObj) => ({
  type: "SET_END_DATE",
  momentObj,
});

export { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate };
