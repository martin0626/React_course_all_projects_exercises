import { Fragment } from "react";
import { redirect } from "react-router-dom";
import TodoModal from "../components/NewTodo/NewTodoForm";

let NewTodoPage = () => {
  return (
    <Fragment>
      <TodoModal></TodoModal>
    </Fragment>
  );
};

export default NewTodoPage;

export const action = async ({ request, params }) => {
  let data = await request.formData();
  let text = data.get("todo");

  if (text.trim() === "") {
    return redirect("/new");
  }

  let todo = {
    id: Math.random(),
    text: text,
    isDone: false,
    isImportant: false,
  };

  const requestData = await fetch(
    "https://jstest-47ca2-default-rtdb.europe-west1.firebasedatabase.app/Todos.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    }
  );

  if (!requestData.ok) {
    // TODO
  }

  return redirect("/");
};
