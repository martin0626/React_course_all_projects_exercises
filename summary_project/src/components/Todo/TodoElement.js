import classes from "./TodoElement.module.css";

const TodoElement = (props) => {
  const todo = props.todo;
  return (
    <div
      key={todo.id}
      // onClick={() => {
      //   props.openModalHandler(todo.id);
      // }}
      className={`${classes.todo} ${
        todo.isDone ? classes.done : classes["not-done"]
      }`}
    >
      <div className={classes["text-todo"]}>
        <li key={todo.id}>{todo.text}</li>
      </div>
      <div
        onClick={() => {
          props.addToImportant(todo);
        }}
        className={classes["add-todo"]}
      >
        <p>
          <span>&#9888;</span>
        </p>
      </div>
      <div
        onClick={() => {
          props.actionTodo(todo.id);
        }}
        className={classes["action-todo"]}
      >
        <p>{todo.isDone ? <span>&#9745;</span> : <span>&#9744;</span>}</p>
      </div>
      <span
        onClick={() => {
          props.deleteTodo(todo.id);
        }}
        className={classes.delete}
      >
        &#10006;
      </span>
    </div>
  );
};

export default TodoElement;
