import React, { useState } from "react";
import TodoClass from "../models/todo";

import Todo from "../models/todo";

type TodosContextObj = {
  todos: Todo[];
  onAddTodo: (text: string) => void;
  removeTodoHandler: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  todos: [],
  onAddTodo: () => {},
  removeTodoHandler: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodo] = useState<TodoClass[]>([]);

  const onAddTodo = (todo: string) => {
    let newTodo = new TodoClass(todo);
    setTodo((prevTodosState) => {
      return prevTodosState?.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoText: string) => {
    setTodo((prevTodosState) => {
      return prevTodosState.filter((todo) => todo.text !== todoText);
    });
  };

  const contextObj: TodosContextObj = {
    todos: todos,
    onAddTodo: onAddTodo,
    removeTodoHandler: removeTodoHandler,
  };
  return (
    <TodosContext.Provider value={contextObj}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
