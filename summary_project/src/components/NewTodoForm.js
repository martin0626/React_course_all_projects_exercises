import { Form } from "react-router-dom";
import classes from "./NewTodoForm.module.css";

const NewTodoForm = () => {
  return (
    <Form className={classes.form} method="post">
      <label htmlFor="todo">Todo</label>
      <input id="todo" name="todo" type="text" required></input>
      <button className={classes.button} type="submit">
        Create
      </button>
    </Form>
  );
};

export default NewTodoForm;
