import { createSlice } from "@reduxjs/toolkit";

/**
 * État initial du slice de profil.
 * @type {Object}
 */
const initialState = {
  id: "",
  email: "",
  firstName: "",
  lastName: "",
};

/**
 * Slice Redux pour gérer les informations de profil de l'utilisateur.
 * @type {Object}
 */
const profileSlice = createSlice({
  /**
   * Nom du slice.
   * @type {string}
   */
  name: "profile",
  initialState,
  /**
   * Reducers du slice.
   * @type {Object}
   */
  reducers: {
    /**
     * Réduit l'ID du profil.
     * @function setId
     * @param {Object} state - État actuel.
     * @param {Object} action - Action contenant la nouvelle valeur de l'ID.
     */
    setId(state, action) {
      state.id = action.payload;
    },
    /**
     * Réduit l'e-mail du profil.
     * @function setEmail
     * @param {Object} state - État actuel.
     * @param {Object} action - Action contenant le nouvel e-mail.
     */
    setEmail(state, action) {
      state.email = action.payload;
    },
    /**
     * Réduit le prénom du profil.
     * @function setFirstName
     * @param {Object} state - État actuel.
     * @param {Object} action - Action contenant le nouveau prénom.
     */
    setFirstName(state, action) {
      state.firstName = action.payload;
    },
    /**
     * Réduit le nom de famille du profil.
     * @function setLastName
     * @param {Object} state - État actuel.
     * @param {Object} action - Action contenant le nouveau nom de famille.
     */
    setLastName(state, action) {
      state.lastName = action.payload;
    },
    /**
     * Réinitialise les informations de profil.
     * @function resetProfileInfo
     * @param {Object} state - État actuel.
     */
    resetProfileInfo(state) {
      state.id = "";
      state.email = "";
      state.firstName = "";
      state.lastName = "";
    },
  },
});

export const { setId, setEmail, setFirstName, setLastName, resetProfileInfo } =
  profileSlice.actions;
export default profileSlice.reducer;
