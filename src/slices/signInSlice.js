import { createSlice } from "@reduxjs/toolkit";

/**
 * État initial du slice de connexion.
 * @type {Object}
 */
const initialState = {
  email: "",
  password: "",
  rememberMe: false,
  authToken: null,
};

/**
 * Slice Redux pour gérer les informations de connexion de l'utilisateur.
 * @type {Object}
 */
const signInSlice = createSlice({
  /**
   * Nom du slice.
   * @type {string}
   */
  name: "signIn",
  initialState,
  /**
   * Reducers du slice.
   * @type {Object}
   */
  reducers: {
    /**
     * Réduit l'e-mail de connexion.
     * @function setEmail
     * @param {Object} state - État actuel.
     * @param {Object} action - Action contenant le nouvel e-mail.
     */
    setEmail(state, action) {
      state.email = action.payload;
    },
    /**
     * Réduit le mot de passe de connexion.
     * @function setPassword
     * @param {Object} state - État actuel.
     * @param {Object} action - Action contenant le nouveau mot de passe.
     */
    setPassword(state, action) {
      state.password = action.payload;
    },
    /**
     * Réduit l'état de la case à cocher "Se souvenir de moi".
     * @function setRememberMe
     * @param {Object} state - État actuel.
     * @param {Object} action - Action contenant la nouvelle valeur de la case à cocher.
     */
    setRememberMe(state, action) {
      state.rememberMe = action.payload;
    },
    /**
     * Réduit le jeton d'authentification.
     * @function setAuthToken
     * @param {Object} state - État actuel.
     * @param {Object} action - Action contenant le nouveau jeton d'authentification.
     */
    setAuthToken(state, action) {
      state.authToken = action.payload;
    },
    /**
     * Réinitialise les informations de connexion.
     * @function resetLoginInfo
     * @param {Object} state - État actuel.
     */
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
