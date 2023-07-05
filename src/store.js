import darkModeReducer from "./Features/Navigation/DarkModeSwitch/darkModeSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
  },
});
