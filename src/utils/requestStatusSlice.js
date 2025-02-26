import { createSlice } from "@reduxjs/toolkit";

const requestStatusSlice = createSlice({
  name: "request",
  initialState: false,
  reducers: {
    addStatus: (state, action) => {
      return action.payload;
    },
  },
});

export const { addStatus } = requestStatusSlice.actions;
export default requestStatusSlice.reducer;
