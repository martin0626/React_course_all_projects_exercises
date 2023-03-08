import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
import AllTodos from "../components/Todo/AllTodos";
import { importantActions } from "../store/important";
import { todosAction, replaceTodosData } from "../store/todos";

let isInitial = true;

const TodoPage = () => {
  const todosRedux = useSelector((state) => state.todos.todos);
  let dispatch = useDispatch();
  let loadedTodos = useLoaderData();

  useEffect(() => {
    dispatch(todosAction.setAllTodos(loadedTodos));
  }, []);

  useEffect(() => {
    // TODO Fix Reload Bug - FIXED
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(replaceTodosData(todosRedux));

    let todos = todosRedux.filter((el) => el.isImportant === true);
    dispatch(importantActions.replaceTodos(todos ? todos : []));
  }, [todosRedux]);

  return (
    <Fragment>
      <AllTodos todos={todosRedux}></AllTodos>
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
