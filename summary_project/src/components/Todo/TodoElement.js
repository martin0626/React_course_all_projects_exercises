import classes from "./TodoElement.module.css";

const TodoElement = (props) => {
  const todo = props.todo;
  return (
    <div
      key={todo.id}
      onClick={() => {
        props.openModalHandler(todo.id);
      }}
      className={`${classes.todo} ${
        todo.isDone ? classes.done : classes["not-done"]
      }`}
    >
      <li key={todo.id}>{todo.text}</li>{" "}
      {todo.isDone ? <span>&#10004;</span> : <span>&#10006;</span>}
    </div>
  );
};

export default TodoElement;
