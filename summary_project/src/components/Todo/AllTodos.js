import { useState } from "react";
import classes from "./AllTodos.module.css";
import TodoElement from "./TodoElement";

const AllTodos = (params) => {
  const todosObj = params.todos;
  const [todos, setTodos] = useState(todosObj);

  const deleteTodoHandler = (key) => {
    let newTodos = todos.filter((el) => el.id !== key);
    setTodos(newTodos);
  };

  // useEffect(() => {}, [deleteTodoHandler]);

  return (
    <section className={classes.todos}>
      {todos.map((todo) => {
        return <TodoElement todo={todo} delteHandler={deleteTodoHandler} />;
      })}
    </section>
  );
};

export default AllTodos;
