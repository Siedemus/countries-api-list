import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  status: "loading",
};

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    fetchCountries: () => {},
    fetchCountriesSucces: (state, { payload: countries }) => {
      state.data = countries;
      state.status = "succes";
    },
    fetchCountriesFailed: (state) => {
      state.status = "failed";
    },
  },
});

export const { fetchCountries, fetchCountriesFailed, fetchCountriesSucces } =
  countriesSlice.actions;

export const selectCountries = (state) => state.countries.data;
export const selectStatus = (state) => state.countries.status;

export default countriesSlice.reducer;
