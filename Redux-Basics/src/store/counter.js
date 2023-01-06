import { createSlice } from "@reduxjs/toolkit";

let counterDefaultState = { counter: 0, showCounter: true };
let counterSlice = createSlice({
  name: "counter",
  initialState: counterDefaultState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export default counterSlice;
