import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { importantActions } from "../../store/important";
import { todosAction } from "../../store/todos";
import classes from "./AllTodos.module.css";
import TodoElement from "./TodoElement";
import TodoModal from "./TodoModal";

const AllTodos = (params) => {
  const todosObj = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  console.log(todosObj);

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

  const addToImportantHandler = async (todo) => {
    dispatch(importantActions.addItemToImportant(todo));
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

  return (
    <section className={classes.todos}>
      <div className={classes.create}>
        <span>&#43;</span>
      </div>
      {modalElement}
      {todosObj.map((todo) => {
        return (
          <TodoElement
            todo={todo}
            openModalHandler={openModalHandler}
            actionTodo={todoActionHandler}
            addToImportant={addToImportantHandler}
            deleteTodo={deleteTodoHandler}
          />
        );
      })}
    </section>
  );
};

export default AllTodos;
