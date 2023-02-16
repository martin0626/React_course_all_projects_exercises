import TodoClass from "../models/todo";
import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  todo: TodoClass;
  removeTodoHandler: (text: string) => void;
}> = (props) => {
  const handler = () => {
    props.removeTodoHandler(props.todo.text);
  };
  return (
    <li onClick={handler} className={classes.item} key={props.todo.id}>
      {props.todo.text}
    </li>
  );
};

export default TodoItem;
