import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCountries,
  selectCountries,
  selectStatus,
} from "./countriesSlice";
import { Country } from "./Country";
import { CountriesContainer } from "./styled";

export const CountriesList = () => {
  const dispatch = useDispatch();
  const countries = useSelector(selectCountries);
  const status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  return (
    <CountriesContainer>
      {status === "loading" ? (
        <p>Ładowanie...</p>
      ) : status === "succes" ? (
        countries.map((country) => (
          <Country
            key={country.name.common}
            flag={country.flags.png}
            name={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        ))
      ) : null}
    </CountriesContainer>
  );
};
