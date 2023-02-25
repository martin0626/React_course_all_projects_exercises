import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLoaderData } from "react-router-dom";
import AllTodos from "../components/Todo/AllTodos";
import { todosAction } from "../store/todos";

const TodoPage = () => {
  const todos = useLoaderData();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(todosAction.setAllTodos(todos ? todos : []));
  }, []);

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
  if (data) {
    Object.values(data).forEach((element) => {
      todos.push(element);
    });
  }
  return todos;
};
