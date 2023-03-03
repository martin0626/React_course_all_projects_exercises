import { useDispatch } from "react-redux";
import { todosAction } from "../../store/todos";
import classes from "./ImportantElement.module.css";

const ImportantElement = (props) => {
  const todo = props.todo;
  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(todosAction.removeFromImportants(todo.id));
  };
  return (
    <div
      key={todo.id}
      className={`${classes.todo} ${
        todo.isDone ? classes.done : classes["not-done"]
      }`}
    >
      <div className={classes["text-todo"]}>
        <li key={todo.id}>{todo.text}</li>
      </div>
      <div onClick={removeHandler} className={classes["action-todo"]}>
        <p>
          <span>&#10006;</span>
        </p>
      </div>
    </div>
  );
};

export default ImportantElement;
