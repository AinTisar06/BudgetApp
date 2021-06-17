const expensesTotal = (expenses) => {
  return expenses.reduce((first, second) => {
    return first.amount + second.amount;
  }, 0);
};

export default expensesTotal;
