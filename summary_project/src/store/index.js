import { configureStore } from "@reduxjs/toolkit";
import importantSlice from "./important";
import todosSlice from "./todos";

const store = configureStore({
  reducer: { important: importantSlice.reducer, todos: todosSlice.reducer },
});

export default store;
