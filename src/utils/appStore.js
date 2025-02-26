import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import feedReducer from "./feedSlice";
import requestReducer from "./requestStatusSlice";
import pendingReducer from "./requestSlice";
import buttonReducer from "./buttonSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
    request: requestReducer,
    pending: pendingReducer,
    button: buttonReducer,
  },
});

export default appStore;
