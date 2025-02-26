import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "pending",
  initialState: null,
  reducers: {
    addRequest: (state, action) => {
      return action.payload;
    },
    removeRequest: (state, action) => {
      const newState = state.filter((i) => i._id !== action.payload);
      return newState;
    },
  },
});

export const { addRequest, removeRequest } = requestSlice.actions;
export default requestSlice.reducer;
