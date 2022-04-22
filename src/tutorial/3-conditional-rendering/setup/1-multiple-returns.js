import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/Aryan-goel";
const MultipleReturns = () => {
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((user) => console.log(user))
      .catch((error) => console.log(error));
  }, []);

  if (isLoading === true) {
    return (
      <div>
        <h1>loading...</h1>
      </div>
    );
  }
  if (isError === true) {
    return (
      <div>
        <h1>error...</h1>
      </div>
    );
  }
  return <h2>{user}</h2>;
};

export default MultipleReturns;
