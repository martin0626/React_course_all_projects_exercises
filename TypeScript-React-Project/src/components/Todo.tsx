import React from "react";
import TodoClass from "../models/todo";
import TodoItem from "./TodoItem";

const Todo: React.FC<{ todos: TodoClass[] }> = (props) => {
  return (
    <div>
      <ul>
        {props.todos.map((todo) => (
          <TodoItem todo={todo}></TodoItem>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
