import React from "react";
import "./style.css";

interface TodoItemsProps {
  options?: string;
}

const TodoItems: React.FC<TodoItemsProps> = (props) => {
  return <li>{props.options}</li>;
};

export default TodoItems;
