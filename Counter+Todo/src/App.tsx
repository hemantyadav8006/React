import React, { useState } from "react";
import Todo from "./components/TodoApp/Todo";
import Counter from "./components/Counter/Counter";
import "./App.css";

// Array Response
const TodoArray = [
  {
    id: 1,
    name: "code",
  },
  {
    id: 2,
    name: "debug",
  },
  {
    id: 3,
    name: "repeat",
  },
  {
    id: 4,
    name: "practice",
  },
];
// const TodoArray1 = [
//   {
//     id: 1,
//     name: "practice",
//   },
//   {
//     id: 2,
//     name: "code",
//   },
//   {
//     id: 3,
//     name: "debug",
//   },
//   {
//     id: 4,
//     name: "practice",
//   },
// ];

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Todo items={TodoArray} />
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <Counter />
    </>
  );
};

export default App;
