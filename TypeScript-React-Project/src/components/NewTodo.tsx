import React, { useContext, useRef } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  let todoRef = useRef<HTMLInputElement>(null);
  const todoCtx = useContext(TodosContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    todoCtx.onAddTodo(todoRef.current!.value);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Add Todo</label>
      <input type="text" ref={todoRef}></input>
      <button type="submit">Add</button>
    </form>
  );
};

export default NewTodo;
