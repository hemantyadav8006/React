import React, { useEffect, useState } from "react";
import axios from "axios";

interface TodoItems {
  body: string;
  id: number;
  title: string;
  userId: number;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoItems[]>([]);
  useEffect(() => {
    axios
      .get<TodoItems[]>("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setTodos(response.data);
        console.log(response.data);
      });
  }, []);
  return (
    <>
      <div className="color">
        <h1>
          Request Fetched from
          <code>"https://jsonplaceholder.typicode.com/posts"</code>
        </h1>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              id: {todo.id}, body: {todo.body}, title: {todo.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
