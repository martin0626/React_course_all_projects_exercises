import TodoClass from "../models/todo";
import React from "react";

const TodoItem: React.FC<{ todo: TodoClass }> = (props) => {
  return <li key={props.todo.id}>{props.todo.text}</li>;
};

export default TodoItem;
