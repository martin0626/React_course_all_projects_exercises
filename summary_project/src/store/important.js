import { createSlice } from "@reduxjs/toolkit";

const importantSlice = createSlice({
  name: "important",
  initialState: {
    impTodos: [],
    quantity: 0,
  },
  reducers: {
    replaceTodos(state, action) {
      state.impTodos = action.payload;
    },
    addItemToImportant(state, action) {
      state.quantity += 1;
      const newItem = action.payload;
      const existingItem = state.impTodos.find((el) => el.id === newItem.id);
      if (!existingItem) {
        state.impTodos.push(newItem);
      }
    },
    removeItem(state, action) {
      if (state.quantity > 0) {
        state.quantity -= 1;
      }
      const id = action.payload;
      state.impTodos = state.impTodos.filter((el) => el.id !== id);
    },
  },
});

export const importantActions = importantSlice.actions;
export default importantSlice;
