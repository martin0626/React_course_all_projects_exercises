import classes from "./TodoElement.module.css";

const TodoElement = (props) => {
  const todo = props.todo;
  return (
    <div
      onClick={() => {
        props.delteHandler(todo.id);
      }}
      className={classes.todo}
      key={todo.id}
    >
      <li>{todo.text}</li> {todo.isDone ? "Yes" : "No"}
    </div>
  );
};

export default TodoElement;
