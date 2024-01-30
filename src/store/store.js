import { configureStore } from "@reduxjs/toolkit";
import signInReducer from "../slices/signInSlice";
import profileReducer from "../slices/profileSlice";
import { apiSlice } from "../slices/apiSlice";

export default configureStore({
  reducer: {
    signIn: signInReducer,
    profile: profileReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
