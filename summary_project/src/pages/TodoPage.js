import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
import AllTodos from "../components/Todo/AllTodos";
import { todosAction } from "../store/todos";

const TodoPage = () => {
  // const todos = useLoaderData();
  const todosRedux = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
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

      dispatch(todosAction.setAllTodos(todos));
    };

    getData();
  }, []);

  useEffect(() => {
    const replaceTodos = async () => {
      await fetch(
        "https://jstest-47ca2-default-rtdb.europe-west1.firebasedatabase.app/Todos.json",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(todosRedux),
        }
      );
    };

    // TODO Fix Reload Bug
    replaceTodos();
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
