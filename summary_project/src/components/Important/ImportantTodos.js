import { useSelector } from "react-redux";
import ImportantElement from "./ImportantElement";

const { Fragment } = require("react");

const ImportantTodos = () => {
  const todos = useSelector((state) => state.important.impTodos);

  return (
    <Fragment>
      {todos.length === 0 && <h1>No Important Todos Yet</h1>}
      {todos.map((todo) => {
        return <ImportantElement todo={todo} />;
      })}
    </Fragment>
  );
};

export default ImportantTodos;
