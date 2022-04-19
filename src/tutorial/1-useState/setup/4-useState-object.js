import React, { useState } from "react";

const UseStateObject = () => {
  const [setPerson] = useState({
    name: "peter",
    age: 23,
    message: "random message",
  }); //! we can do this

  //! or we can create a diffrent state for each value like below

  const [name, setName] = useState("peter");
  const [age, setAge] = useState(23);
  const [message, setMessage] = useState("random message");
  const changeMessage = () => {
    // setPerson({ ...person, message: "hello bitch" });

    if (message === "hello there") {
      setMessage("random message");
    } else {
      setMessage("hello there");
    }
  };
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
