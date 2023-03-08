import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImportantTodos from "../components/Important/ImportantTodos";
import { importantActions } from "../store/important";
import { replaceTodosData } from "../store/todos";

let isInitial = true;

const ImportantPage = () => {
  const allTodos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    // TODO Fix Reload Bug - FIXED
    if (isInitial) {
      isInitial = false;
      return;
    }

    let todos = allTodos.filter((el) => el.isImportant === true);
    dispatch(importantActions.replaceTodos(todos ? todos : []));
    dispatch(replaceTodosData(allTodos));
  }, [allTodos]);

  return <ImportantTodos></ImportantTodos>;
};

export default ImportantPage;
