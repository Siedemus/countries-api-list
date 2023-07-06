import darkModeReducer from "./Features/Navigation/DarkModeSwitch/darkModeSlice";
import countriesReducer from "./Features/CountriesList/countriesSlice";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { countriesSaga } from "./Features/CountriesList/countriesSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    countries: countriesReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(countriesSaga);
