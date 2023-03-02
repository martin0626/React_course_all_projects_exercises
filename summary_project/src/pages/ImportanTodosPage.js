import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImportantTodos from "../components/Important/ImportantTodos";
import { importantActions } from "../store/important";

let isInitial = true;

const ImportantPage = () => {
  // const importantTodos = useSelector((state) => state.important.impTodos);
  const allTodos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    const replaceTodos = async () => {
      await fetch(
        "https://jstest-47ca2-default-rtdb.europe-west1.firebasedatabase.app/Todos.json",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(allTodos),
        }
      );
    };

    // TODO Fix Reload Bug - FIXED
    if (isInitial) {
      isInitial = false;
      return;
    }
    console.log(allTodos);
    let todos = allTodos.filter((el) => el.isImportant === true);
    dispatch(importantActions.replaceTodos(todos ? todos : []));
    replaceTodos();
  }, [allTodos]);

  return <ImportantTodos></ImportantTodos>;
};

export default ImportantPage;
