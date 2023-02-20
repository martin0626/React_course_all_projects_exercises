import { Fragment } from "react";
import { useLoaderData } from "react-router-dom";
import AllTodos from "../components/Todo/AllTodos";

const TodoPage = () => {
  const todos = useLoaderData();
  return (
    <Fragment>
      <AllTodos todos={todos}></AllTodos>
    </Fragment>
  );
};

export default TodoPage;

export const loader = async () => {
  let req = await fetch(
    "https://jstest-47ca2-default-rtdb.europe-west1.firebasedatabase.app/Todos.json"
  );
  let data = await req.json();
  let todos = [];
  Object.values(data).forEach((element) => {
    todos.push(element);
  });
  return todos;
};
