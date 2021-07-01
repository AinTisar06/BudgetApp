import firebase from "../firebase/firebase";

const addExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const {
      amount = 0,
      note = "",
      description = "",
      createdAt = 0,
    } = expenseData;
    const expense = { amount, note, description, createdAt };
    const uid = getState().auth.uid;
    firebase
      .database()
      .ref(`users/${uid}/expenses`)
      .push(expense)
      .then((ref) => {
        dispatch({ type: "ADD_EXPENSE", expense: { id: ref.key, ...expense } });
      })
      .catch((err) => {
        console.log("Something went wrong!", err);
      });
  };
};

const editExpense = (id, changeObj) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    firebase
      .database()
      .ref(`users/${uid}/expenses/${id}`)
      .update(changeObj)
      .then(() => {
        dispatch({ type: "EDIT_EXPENSE", id, changeObj });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const removeExpense = (id) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    firebase
      .database()
      .ref(`users/${uid}/expenses/${id}`)
      .remove()
      .then(() => {
        dispatch({ type: "REMOVE_EXPENSE", id });
      })
      .catch((err) => console.error(err));
  };
};

// Initial fetch from firebase
const setExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    firebase
      .database()
      .ref(`users/${uid}/expenses`)
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
