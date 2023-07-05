import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: true,
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    switchDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { switchDarkMode } = darkModeSlice.actions;

export const selectIsDarkMode = (state) => state.darkMode.darkMode;

export default darkModeSlice.reducer;
