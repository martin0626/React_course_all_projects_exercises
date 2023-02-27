import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImportantTodos from "../components/Important/ImportantTodos";
import { importantActions } from "../store/important";

let isInitial = true;

const ImportantPage = () => {
  const importantTodos = useSelector((state) => state.important.impTodos);
  const dispatch = useDispatch();

  // TODO Move Fetching Code In Side Effect and Fixing Reload Problem on Importants Elements - FIXED
  useEffect(() => {
    const getImportants = async () => {
      let request = await fetch(
        "https://jstest-47ca2-default-rtdb.europe-west1.firebasedatabase.app/Importants.json"
      );
      let data = await request.json();
      let todos = Object.values(data);

      dispatch(importantActions.replaceTodos(todos ? todos : []));
    };

    if (isInitial) {
      getImportants();
    }
  }, []);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    const updateImportants = async () => {
      await fetch(
        "https://jstest-47ca2-default-rtdb.europe-west1.firebasedatabase.app/Importants.json",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(importantTodos),
        }
      );
    };

    updateImportants();
  }, [importantTodos]);

  return <ImportantTodos></ImportantTodos>;
};

export default ImportantPage;
