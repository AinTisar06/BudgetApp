import React, { useState } from "react";
import firebase from "../firebase/firebase";

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
    const personRef = firebase.database().ref();

    personRef
      .update({
        stressLevel: 9,
        "job/company": "Amazon",
        "location/city": "Seattle",
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
      .ref()
      .remove()
      .then(() => {
        console.log("Data removed");
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
      <button onClick={handleSet}>Set</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default Script;
