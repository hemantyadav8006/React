import React, { useState } from "react";
import "./style.css";

const Counter: React.FC = () => {
  const [counter, setCounter] = useState(0);

  const IncrementHandler = () => {
    setCounter(counter + 1);
    console.log("Incremented", counter);
  };

  const decrementHandler = () => {
    if (counter === 0) {
      return alert("Counter can't be less than 0");
    }
    setCounter(counter - 1);
    console.log("Decremented", counter);
  };

  return (
    <div>
      <h1>Counter: {counter} </h1>
      <button
        style={{ backgroundColor: "green", color: "black" }}
        onClick={IncrementHandler}
      >
        Increment
      </button>
      <button style={{ backgroundColor: "tomato" }} onClick={decrementHandler}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
