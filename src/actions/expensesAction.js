import firebase from "../firebase/firebase";

const addExpense = (expenseData = {}) => {
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

const setExpenses = () => {
  return (dispatch) => {
    firebase
      .database()
      .ref("expenses")
      .once("value")
      .then((snapshot) => {
        const expenses = [];
        snapshot.forEach((childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        dispatch({
          type: "SET_EXPENSES",
          expenses,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export { removeExpense, editExpense, addExpense, setExpenses };
