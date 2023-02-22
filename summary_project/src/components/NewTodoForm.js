import { Form } from "react-router-dom";
import classes from "./NewTodoForm.module.css";

const NewTodoForm = () => {
  return (
    <Form className={classes.form} method="post">
      <div className={classes.input}>
        <label htmlFor="todo">Todo</label>
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
  );
};

export default NewTodoForm;
