import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchCountries,
  fetchCountriesFailed,
  fetchCountriesSucces,
} from "./countriesSlice";
import { getCountries } from "./getCountries";

function* fetchCountriesHandler() {
  try {
    const countries = yield call(getCountries);
    yield put(fetchCountriesSucces(countries));
  } catch {
    yield put(fetchCountriesFailed());
  }
}

export function* countriesSaga() {
  yield takeEvery(fetchCountries.type, fetchCountriesHandler);
}
