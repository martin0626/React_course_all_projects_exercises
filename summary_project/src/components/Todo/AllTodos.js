import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todosAction } from "../../store/todos";
import classes from "./AllTodos.module.css";
import TodoElement from "./TodoElement";
import TodoModal from "./TodoModal";

const AllTodos = (params) => {
  const todosObj = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const [modalElement, setModalElement] = useState("");

  const closeModalHandler = () => {
    setModalElement("");
  };

  const deleteTodoHandler = (key) => {
    dispatch(todosAction.removeTodo(key));
    let deleteConfirm = window.confirm("Are you sure deleting this Todo?");
    if (deleteConfirm) {
      closeModalHandler();
    }
  };

  const todoActionHandler = (key) => {
    dispatch(todosAction.todoAction(key));
  };

  const openModalHandler = (key) => {
    let currTodo = todosObj.find((el) => el.id === key);
    setModalElement(
      <TodoModal
        todo={currTodo}
        closeModal={closeModalHandler}
        deleteTodo={deleteTodoHandler}
        actionTodo={todoActionHandler}
      />
    );
  };

  useEffect(() => {
    const replaceTodos = async () => {
      await fetch(
        "https://jstest-47ca2-default-rtdb.europe-west1.firebasedatabase.app/Todos.json",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(todosObj),
        }
      );
    };

    // TODO Fix Reload Bug
    replaceTodos();
  }, [todoActionHandler, deleteTodoHandler]);

  return (
    <section className={classes.todos}>
      {modalElement}
      {todosObj.map((todo) => {
        return <TodoElement todo={todo} openModalHandler={openModalHandler} />;
      })}
    </section>
  );
};

export default AllTodos;
