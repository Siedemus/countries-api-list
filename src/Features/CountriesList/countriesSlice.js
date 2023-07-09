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

const selectCountriesState = (state) => state.countries;

export const selectCountries = (state) => selectCountriesState(state).data;
export const selectStatus = (state) => selectCountriesState(state).status;

export const selectCountryByCCA3 = (state, code) => {
  const countries = selectCountries(state);

  if (!countries) {
    return null;
  }
  return countries.find(
    (country) => country.cca3.toUpperCase() === code.toUpperCase()
  );
};

export const selectCountryByFilter = (state, searchQuery, regionQuery) => {
  const countries = selectCountries(state);

  if (!regionQuery && !searchQuery) {
    return countries;
  }

  let filtredCountries = countries;

  if (regionQuery) {
    filtredCountries = filtredCountries.filter(({ region }) =>
      region.includes(regionQuery)
    );
  }

  if (searchQuery && searchQuery.trim() !== "") {
    filtredCountries = filtredCountries.filter(({ name }) =>
      name.common.toUpperCase().includes(searchQuery.trim().toUpperCase())
    );
  }

  return filtredCountries;
};

export default countriesSlice.reducer;
