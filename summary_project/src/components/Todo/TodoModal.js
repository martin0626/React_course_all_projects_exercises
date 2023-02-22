import { useState } from "react";
import classes from "./TodoModal.module.css";

const TodoModal = (props) => {
  const [todoInfo, setTodo] = useState(props.todo);
  // let todoInfo = props.todo;
  const onActionHandler = () => {
    let newTodo = {
      text: todoInfo.text,
      id: todoInfo.id,
      isDone: !todoInfo.isDone,
    };
    setTodo(newTodo);
    props.actionTodo(todoInfo.id);
  };

  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        <div className={classes.text}>
          <h2>{todoInfo.text}</h2>
          {todoInfo.isDone ? (
            <h1 className={classes.done}>
              <span>&#10004;</span>
            </h1>
          ) : (
            <h1 className={classes["not-done"]}>
              <span>&#10006;</span>
            </h1>
          )}
        </div>

        <div className={classes["btn-group"]}>
          <button
            className={classes.button}
            href="#"
            onClick={props.closeModal}
          >
            Close
          </button>
          <button className={classes.button} href="#" onClick={onActionHandler}>
            {todoInfo.isDone ? "Mark as Not Done" : "Mark As Done"}
          </button>
          <button
            className={classes.button}
            href="#"
            onClick={() => {
              props.deleteTodo(todoInfo.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoModal;
