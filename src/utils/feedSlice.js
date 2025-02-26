import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addFeed: (state, action) => {
      return action.payload;
    },
    updateFeed: (state, action) => {
      const newState = state.filter((i) => i?._id !== action.payload);
      return newState;
    },
    removeFeed: (state, action) => {
      return null;
    },
  },
});

export const { addFeed, removeFeed, updateFeed } = feedSlice.actions;
export default feedSlice.reducer;
