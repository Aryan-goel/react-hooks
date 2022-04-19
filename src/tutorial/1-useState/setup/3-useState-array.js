import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const removeItems = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    //?filtering the array based on id
    //? if the id we passed is not equal to the array elements id we return it
    setPeople(newPeople);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;

        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button className="btn" onClick={() => removeItems(id)}>
              clear
            </button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        remove
      </button>
    </>
  );
};

export default UseStateArray;
