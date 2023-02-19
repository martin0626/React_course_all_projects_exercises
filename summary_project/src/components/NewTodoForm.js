import { Form } from "react-router-dom";

const NewTodoForm = () => {
  return (
    <Form method="post">
      <label htmlFor="todo">Todo</label>
      <input id="todo" name="todo" type="text" required></input>

      <button type="submit">Create</button>
    </Form>
  );
};

export default NewTodoForm;
