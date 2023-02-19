import { Fragment } from "react";
import { redirect } from "react-router-dom";
import NewTodoForm from "../components/NewTodoForm";

let NewTodoPage = () => {
  return (
    <Fragment>
      <NewTodoForm></NewTodoForm>
    </Fragment>
  );
};

export default NewTodoPage;

export const action = async ({ request, params }) => {
  let data = await request.formData();
  let text = data.get("todo");
  let todo = {
    id: Math.random(),
    text: text,
    isDone: false,
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
