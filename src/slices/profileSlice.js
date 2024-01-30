import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  email: "",
  firstName: "",
  lastName: "",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setId(state, action) {
      state.id = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setFirstName(state, action) {
      state.firstName = action.payload;
    },
    setLastName(state, action) {
      state.lastName = action.payload;
    },
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
