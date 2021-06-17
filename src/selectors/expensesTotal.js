const expensesTotal = (expenses) => {
  return expenses.reduce((acc, current) => {
    return parseFloat(current.amount) + acc;
  }, 0);
};

export default expensesTotal;
