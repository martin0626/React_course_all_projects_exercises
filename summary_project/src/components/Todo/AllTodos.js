import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { importantActions } from "../../store/important";
import { todosAction } from "../../store/todos";
import { uiActions } from "../../store/ui-slice";
import classes from "./AllTodos.module.css";
import TodoElement from "./TodoElement";

const AllTodos = (params) => {
  const todosObj = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const [modalElement, setModalElement] = useState("");

  const closeModalHandler = () => {
    setModalElement("");
  };

  const deleteTodoHandler = (key) => {
    let deleteConfirm = window.confirm("Are you sure deleting this Todo?");
    if (deleteConfirm) {
      dispatch(todosAction.removeTodo(key));
      closeModalHandler();
    }
  };

  const todoActionHandler = (key) => {
    dispatch(todosAction.todoAction(key));
  };

  const addToImportantHandler = async (todo) => {
    dispatch(importantActions.addItemToImportant(todo));
    dispatch(
      uiActions.showNotification({
        status: "success",
        title: "Added To Important",
        message: "You added this todo to Important section!",
      })
    );
  };

  return (
    <section className={classes.todos}>
      <Link to="/new" className={classes.create}>
        <span>&#43;</span>
      </Link>
      {modalElement}
      {todosObj.map((todo) => {
        return (
          <TodoElement
            todo={todo}
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
