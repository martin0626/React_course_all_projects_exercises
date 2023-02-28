import { useDispatch } from "react-redux";
import { Form, Link } from "react-router-dom";
import classes from "./NewTodoForm.module.css";

const TodoModal = (props) => {
  const dispatch = useDispatch();

  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        <h1 htmlFor="todo">Add New Todo</h1>

        <Form className={classes.form} method="post">
          <div className={classes.input}>
            <input
              className={classes["input-field"]}
              id="todo"
              name="todo"
              type="text"
              required
            ></input>
          </div>

          <button className={classes.button} type="submit">
            Create
          </button>
        </Form>

        <Link className={classes.close} to="/">
          <span>&#10006;</span>
        </Link>
      </div>
    </div>
  );
};

export default TodoModal;
