import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: null,
  reducers: {
    addprofile: (state, action) => {
      return action.payload;
    },
    removeProfile: (state, action) => {
      return null;
    },
  },
});

export const { addprofile, removeProfile } = profileSlice.actions;
export default profileSlice.reducer;
