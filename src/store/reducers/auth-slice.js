import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false, userName: null },
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.userName = action.payload;
      console.log(state.isLoggedIn);
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
