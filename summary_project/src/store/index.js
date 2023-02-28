import { configureStore } from "@reduxjs/toolkit";
import importantSlice from "./important";
import todosSlice from "./todos";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    important: importantSlice.reducer,
    todos: todosSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;
