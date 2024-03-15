import { createSlice } from "@reduxjs/toolkit";

/**
 * Initial state of the profile slice.
 * @type {Object}
 */
const initialState = {
  id: "",
  email: "",
  firstName: "",
  lastName: "",
  isLoading: true,
  error: false,
  editMode: false,
};

/**
 * Redux slice to manage user profile information.
 * @type {Object}
 */
const profileSlice = createSlice({
  /**
   * Slice name.
   * @type {string}
   */
  name: "profile",
  initialState,
  /**
   * Slice reducers.
   * @type {Object}
   */
  reducers: {
    /**
     * Reduces the profile ID.
     * @function setId
     * @param {Object} state - Current state.
     * @param {Object} action - Action containing the new ID value.
     */
    setId(state, action) {
      state.id = action.payload;
    },
    /**
     * Reduces the profile email.
     * @function setEmail
     * @param {Object} state - Current state.
     * @param {Object} action - Action containing the new email.
     */
    setEmail(state, action) {
      state.email = action.payload;
    },
    /**
     * Reduces the profile first name.
     * @function setFirstName
     * @param {Object} state - Current state.
     * @param {Object} action - Action containing the new first name.
     */
    setFirstName(state, action) {
      state.firstName = action.payload;
    },
    /**
     * Reduces the profile last name.
     * @function setLastName
     * @param {Object} state - Current state.
     * @param {Object} action - Action containing the new last name.
     */
    setLastName(state, action) {
      state.lastName = action.payload;
    },
    /**
     * Resets profile information.
     * @function resetProfileInfo
     * @param {Object} state - Current state.
     */
    resetProfileInfo(state) {
      state.id = "";
      state.email = "";
      state.firstName = "";
      state.lastName = "";
      state.isLoading = true;
    },
    /**
     * Set the loading
     * @function setIsLoading
     * @param {Object} state - Current state.
     * @param {Object} action - Action containing the new loading value.
     */
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    /**
     *
     * @param {object} state - Current state.
     * @param {object} action - Action containing the new error value.
     */
    setError(state, action) {
      state.error = action.payload;
    },
    /**
     *
     * @param {object} state - Current state.
     * @param {object} action - Action containing the new editMode value.
     */
    setEditMode(state, action) {
      state.editMode = action.payload;
    },
  },
});

export const {
  setId,
  setEmail,
  setFirstName,
  setLastName,
  resetProfileInfo,
  setIsLoading,
  setError,
  setEditMode,
} = profileSlice.actions;
export default profileSlice.reducer;
