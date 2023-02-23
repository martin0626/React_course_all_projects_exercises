import { configureStore } from "@reduxjs/toolkit";
import importantSlice from "./important";

const store = configureStore({
  reducer: { important: importantSlice.reducer },
});

export default store;
