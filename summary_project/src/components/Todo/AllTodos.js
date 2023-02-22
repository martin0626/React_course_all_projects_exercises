import { useEffect, useState } from "react";
import classes from "./AllTodos.module.css";
import TodoElement from "./TodoElement";
import TodoModal from "./TodoModal";

const AllTodos = (params) => {
  const todosObj = params.todos;

  const [todos, setTodos] = useState(todosObj);
  const [modalElement, setModalElement] = useState("");

  const closeModalHandler = () => {
    setModalElement("");
  };

  const deleteTodoHandler = (key) => {
    let newTodos = todos.filter((el) => el.id !== key);
    let deleteConfirm = window.confirm("Are you sure deleting this Todo?");
    if (deleteConfirm) {
      setTodos(newTodos);
      closeModalHandler();
    }
  };

  const todoActionHandler = (key) => {
    let newTodos = todos.filter((el) => {
      if (el.id === key) {
        el.isDone = !el.isDone;
      }
      return el;
    });
    setTodos(newTodos);
  };

  const openModalHandler = (key) => {
    let currTodo = todos.find((el) => el.id === key);
    setModalElement(
      <TodoModal
        todo={currTodo}
        closeModal={closeModalHandler}
        deleteTodo={deleteTodoHandler}
        actionTodo={todoActionHandler}
      />
    );
  };

  // useEffect(() => {}, [deleteTodoHandler]);

  return (
    <section className={classes.todos}>
      {modalElement}
      {todos.map((todo) => {
        return <TodoElement todo={todo} openModalHandler={openModalHandler} />;
      })}
    </section>
  );
};

export default AllTodos;
