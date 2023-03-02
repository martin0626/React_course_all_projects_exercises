import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AllTodos from "../components/Todo/AllTodos";
import { todosAction } from "../store/todos";

let isInitial = true;

const TodoPage = () => {
  const todosRedux = useSelector((state) => state.todos.todos);
  let dispatch = useDispatch();

  // TODO Move To Side Effect
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
    console.log("loading");
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

    // TODO Fix Reload Bug - FIXED
    if (isInitial) {
      isInitial = false;
      return;
    }
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
