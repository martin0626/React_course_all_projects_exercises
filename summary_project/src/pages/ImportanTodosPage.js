import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImportantTodos from "../components/Important/ImportantTodos";
import { importantActions } from "../store/important";

let isInitial = true;

const ImportantPage = () => {
  const importantTodos = useSelector((state) => state.important.impTodos);
  const dispatch = useDispatch();

  // TODO Move Fetching Code In Side Effect and Fixing Reload Problem on Importants Elements
  useEffect(() => {
    const getImportants = async () => {
      let request = await fetch(
        "https://jstest-47ca2-default-rtdb.europe-west1.firebasedatabase.app/Importants.json"
      );
      let data = await request.json();
      dispatch(importantActions.replaceTodos(data ? data : []));
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
      fetch(
        "https://jstest-47ca2-default-rtdb.europe-west1.firebasedatabase.app/Importants.json",
        {
          method: "PUT",
          body: importantTodos,
        }
      );
    };

    if (importantTodos.length > 0) {
      updateImportants();
    }
  }, [importantTodos]);

  return <ImportantTodos></ImportantTodos>;
};

export default ImportantPage;
