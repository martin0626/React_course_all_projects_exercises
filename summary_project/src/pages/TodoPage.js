import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
import AllTodos from "../components/Todo/AllTodos";
import { importantActions } from "../store/important";

let isInitial = true;
const TodoPage = () => {
  const todos = useLoaderData();
  const importantTodos = useSelector((state) => state.important.impTodos);
  const dispatch = useDispatch();

  // TODO Move Fetching Code In Side Effect and Fixing Reload Problem on Importants Elements
  useEffect(() => {
    const getImportants = async () => {
      let request = await fetch(
        "https://jstest-47ca2-default-rtdb.europe-west1.firebasedatabase.app/Importants.json"
      );
      let data = await request.json();
      dispatch(importantActions.replaceTodos(data));
    };

    getImportants();
  }, []);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    fetch(
      "https://jstest-47ca2-default-rtdb.europe-west1.firebasedatabase.app/Importants.json",
      {
        method: "PUT",
        body: JSON.stringify(importantTodos),
      }
    );
  }, [importantTodos]);
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
