import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  rememberMe: false,
  authToken: null,
};

const signInSlice = createSlice({
  name: "signIn",
  initialState,
  reducers: {
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setRememberMe(state, action) {
      state.rememberMe = action.payload;
    },
    setAuthToken(state, action) {
      state.authToken = action.payload;
    },
    resetLoginInfo(state) {
      state.email = "";
      state.password = "";
      state.rememberMe = false;
      state.authToken = null;
    },
  },
});

export const {
  setEmail,
  setPassword,
  setRememberMe,
  setAuthToken,
  resetLoginInfo,
} = signInSlice.actions;
export default signInSlice.reducer;
