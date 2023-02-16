import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import classes from "./Todo.module.css";
import { TodosContext } from "../store/todos-context";

const Todo: React.FC = () => {
  const todoCtx = useContext(TodosContext);

  return (
    <div className={classes.todo}>
      <ul>
        {todoCtx.todos.map((todo) => (
          <TodoItem
            removeTodoHandler={todoCtx.removeTodoHandler}
            todo={todo}
          ></TodoItem>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
