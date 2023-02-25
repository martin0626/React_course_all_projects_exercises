import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: { todos: [], totalQuantity: 0 },
  reducers: {
    todoAction(state, action) {
      state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      });
    },
    setAllTodos(state, action) {
      state.todos = action.payload;
    },
    addTodo(state, action) {
      state.todos.push(action.payload);
      state.totalQuantity += 1;
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((el) => el.id !== action.payload);
      state.totalQuantity -= 1;
    },
  },
});

export const todosAction = todosSlice.actions;
export default todosSlice;
