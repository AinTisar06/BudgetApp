import firebase from "../firebase/firebase";

const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense,
});

const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      amount = 0,
      note = "",
      description = "",
      createdAt = 0,
    } = expenseData;
    const expense = { amount, note, description, createdAt };
    firebase
      .database()
      .ref("expenses")
      .push(expense)
      .then((ref) => {
        // dispatch(addExpense({id: ref.key, ...expense}))
        dispatch({ type: "ADD_EXPENSE", expense: { id: ref.key, ...expense } });
      })
      .catch((err) => {
        console.log("Something went wrong!", err);
      });
  };
};

const removeExpense = (id) => ({
  type: "REMOVE_EXPENSE",
  id,
});

const editExpense = (id, changeObj) => ({
  type: "EDIT_EXPENSE",
  id,
  changeObj,
});

export { removeExpense, editExpense, startAddExpense, addExpense };
