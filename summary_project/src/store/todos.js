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
    addToImportants(state, action) {
      state.todos = state.todos.map((el) => {
        if (el.id === action.payload) {
          el.isImportant = true;
        }
        return el;
      });
    },
    removeFromImportants(state, action) {
      state.todos = state.todos.map((el) => {
        if (el.id === action.payload) {
          el.isImportant = false;
        }
        return el;
      });
    },
  },
});

//Action Creator Trunk
export const replaceTodosData = (todos) => {
  return async (dispatch) => {
    let request = await fetch(
      "https://jstest-47ca2-default-rtdb.europe-west1.firebasedatabase.app/Todos.json",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todos),
      }
    );
  };
};

export const todosAction = todosSlice.actions;
export default todosSlice;
