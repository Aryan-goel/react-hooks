import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  return (
    <>
      {/* // <h1>{firstValue}</h1>
      // <h1>value:{secondValue}</h1> */}
      <h1>{text || "Aryan "}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {text && <h1> hello</h1>}
      {isError && <h1> Error...</h1>}
      {isError ? (
        <p>there is an error</p>
      ) : (
        <div>
          <h2>there is no error</h2>
        </div>
      )}
      {/* if only text it available then only the hello will be printed */}
    </>
  );
};

export default ShortCircuit;
