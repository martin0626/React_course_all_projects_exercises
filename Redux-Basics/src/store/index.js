import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

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

let authDefaultState = {
  isLoggedIn: false,
};

let authSlice = createSlice({
  name: "auth",
  initialState: authDefaultState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

// let counterReducer = (state = counterDefaultState, action) => {
//   if (action.type === "Increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "Increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "Decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "Toggle") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }
//   return state;
// };

// const store = createStore(counterReducer);

export default store;
