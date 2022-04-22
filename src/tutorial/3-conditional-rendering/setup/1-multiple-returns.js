import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [isLoading, setisLoading] = useState(true);
  const [isError, setisError] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          setisLoading(false);
          setisError(true);
          throw new Error(response.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setisLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>loading...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>error...</h1>
      </div>
    );
  }
  return <h2>{user}</h2>;
};

export default MultipleReturns;
