import { useSelector } from "react-redux";
import ImportantElement from "./ImportantElement";
import classes from "./ImportantTodos.module.css";

const { Fragment } = require("react");

const ImportantTodos = () => {
  const todos = useSelector((state) => state.important.impTodos);
  return (
    <section className={classes.section}>
      {todos.length === 0 && <h1>No Important Todos Yet</h1>}
      {todos.map((todo) => {
        return <ImportantElement todo={todo} />;
      })}
    </section>
  );
};

export default ImportantTodos;
