import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false },
  reducers: {
    login(state, actions) {
      state.isLoggedIn = true;
    },
    logout(state, actions) {
      state.isLoggedIn = false;
    }
  }
});

export const authActions = authSlice.actions;

export default authSlice;
