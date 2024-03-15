import { createSlice } from "@reduxjs/toolkit";

/**
 * Initial state of the sign-in slice.
 * @type {Object}
 */
const initialState = {
  email: "",
  password: "",
  rememberMe: false,
  authToken: null,
  error: false,
};

/**
 * Redux slice to manage user sign-in information.
 * @type {Object}
 */
const signInSlice = createSlice({
  /**
   * Slice name.
   * @type {string}
   */
  name: "signIn",
  initialState,
  /**
   * Slice reducers.
   * @type {Object}
   */
  reducers: {
    /**
     * Reduces the sign-in email.
     * @function setEmail
     * @param {Object} state - Current state.
     * @param {Object} action - Action containing the new email.
     */
    setEmail(state, action) {
      state.email = action.payload;
    },
    /**
     * Reduces the sign-in password.
     * @function setPassword
     * @param {Object} state - Current state.
     * @param {Object} action - Action containing the new password.
     */
    setPassword(state, action) {
      state.password = action.payload;
    },
    /**
     * Reduces the state of the "Remember Me" checkbox.
     * @function setRememberMe
     * @param {Object} state - Current state.
     * @param {Object} action - Action containing the new value of the checkbox.
     */
    setRememberMe(state, action) {
      state.rememberMe = action.payload;
    },
    /**
     * Reduces the authentication token.
     * @function setAuthToken
     * @param {Object} state - Current state.
     * @param {Object} action - Action containing the new authentication token.
     */
    setAuthToken(state, action) {
      state.authToken = action.payload;
    },
    /**
     * Resets sign-in information.
     * @function resetLoginInfo
     * @param {Object} state - Current state.
     */
    resetLoginInfo(state) {
      state.email = "";
      state.password = "";
      state.rememberMe = false;
      state.authToken = null;
    },
    /**
     *
     * @param {object} state - Current state.
     * @param {object} action - Action containing the new error value.
     */
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const {
  setEmail,
  setPassword,
  setRememberMe,
  setAuthToken,
  resetLoginInfo,
  setError,
} = signInSlice.actions;
export default signInSlice.reducer;
