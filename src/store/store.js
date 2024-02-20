import { configureStore } from "@reduxjs/toolkit";
import signInReducer from "../slices/signInSlice";
import profileReducer from "../slices/profileSlice";
import { apiSlice } from "../slices/apiSlice";

/**
 * Configurer et créer le store Redux pour l'application.
 * @function configureAppStore
 * @returns {Object} - Le store Redux configuré.
 */
export default configureStore({
  /**
   * Reducers du store.
   * @type {Object}
   */
  reducer: {
    /**
     * Reducer pour gérer les informations de connexion de l'utilisateur.
     * @type {Function}
     */
    signIn: signInReducer,
    /**
     * Reducer pour gérer les informations de profil de l'utilisateur.
     * @type {Function}
     */
    profile: profileReducer,
    /**
     * Reducer pour gérer les requêtes API.
     * @type {Function}
     */
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  /**
   * Middleware personnalisé pour le store.
   * @type {Function}
   */
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
