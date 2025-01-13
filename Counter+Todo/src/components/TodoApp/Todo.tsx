import React from "react";
import "./style.css";
import TodoItems from "./TodoItems/TodoItems";

interface TodoItem {
  id: number;
  name: string;
}

interface TodoProps {
  items: TodoItem[];
}

const Todo: React.FC<TodoProps> = (props) => {
  return (
    <div>
      <ol>
        {props.items.map((item) => (
          <TodoItems key={item.id} options={item.name} />
        ))}
      </ol>
    </div>
  );
};

export default Todo;
