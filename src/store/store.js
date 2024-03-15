import { configureStore } from "@reduxjs/toolkit";
import signInReducer from "../slices/signInSlice";
import profileReducer from "../slices/profileSlice";
import { apiSlice } from "../slices/apiSlice";

/**
 * Configure and create the Redux store for the application.
 * @function configureAppStore
 * @returns {Object} - The configured Redux store.
 */
export default configureStore({
  /**
   * Store reducers.
   * @type {Object}
   */
  reducer: {
    /**
     * Reducer to manage user sign-in information.
     * @type {Function}
     */
    signIn: signInReducer,
    /**
     * Reducer to manage user profile information.
     * @type {Function}
     */
    profile: profileReducer,
    /**
     * Reducer to manage API requests.
     * @type {Function}
     */
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  /**
   * Custom middleware for the store.
   * @type {Function}
   */
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
