import { createSlice } from "@reduxjs/toolkit";

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

export default authSlice;
