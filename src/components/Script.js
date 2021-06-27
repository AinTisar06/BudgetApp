import React, { useState } from "react";
import { useDispatch } from "react-redux";
import firebase from "../firebase/firebase";

import { login } from "../actions/authAction";

const Script = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "name") {
      const name = e.target.value;
      setName(name);
    } else {
      const surname = e.target.value;
      setSurname(surname);
    }
  };

  const handleSubmit = () => {
    const personRef = firebase.database().ref();
    const person = {
      name,
      surname,
      job: {
        title: "Software Engineer",
        company: "Google",
      },
      stressLevel: 6,
      location: {
        city: "Ankara",
        country: "Turkey",
      },
    };
    personRef
      .set(person)
      .then(() => {
        console.log("Data is saved");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSet = () => {
    const personRef = firebase.database().ref("expenses/-Mcmt6sSTmTAl5Tk53zy");

    personRef
      .update({
        note: "update",
        amount: 98.5,
      })
      .then(() => {
        console.log("Data is changed");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRemove = () => {
    firebase
      .database()
      .ref("expenses/-McmqnZyM8VO9Q8P6cf7")
      .remove()
      .then(() => {
        console.log("Data removed");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGet = () => {
    const cb = firebase
      .database()
      .ref("expenses")
      .on(
        "value",
        (snapshot) => {
          const expenses = [];
          snapshot.forEach((childSnapshot) => {
            expenses.push({
              id: childSnapshot.key,
              ...childSnapshot.val(),
            });
          });
          console.log(expenses);
        },
        (err) => {
          console.log(err);
        }
      );

    // For only once fetch data
    // firebase
    //   .database()
    //   .ref()
    //   .once("value")
    //   .then((snapshot) => {
    //     const val = snapshot.val();
    //     console.log(val);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  const dispatch = useDispatch();

  const handleStore = () => {
    dispatch(login("ngZjEqhSvIMx6n05R96iMKy8StA3"));
  }

  return (
    <div>
      <input
        type="text"
        placeholder="name"
        value={name}
        name="name"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="surname"
        value={surname}
        name="surname"
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Add</button>
      <button onClick={handleSet}>Update</button>
      <button onClick={handleRemove}>Remove</button>
      <button onClick={handleGet}>Get</button>
      <button onClick={handleStore}>Store</button>
    </div>
  );
};

export default Script;