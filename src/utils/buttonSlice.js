import { createSlice } from "@reduxjs/toolkit";

const buttonSlice = createSlice({
  name: "button",
  initialState: false,
  reducers: {
    addBtnStatus: (state, action) => {
      return action.payload;
    },
  },
});

export const { addBtnStatus } = buttonSlice.actions;
export default buttonSlice.reducer;
