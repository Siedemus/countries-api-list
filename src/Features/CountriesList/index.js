import { useSelector } from "react-redux";
import {
  selectCountries,
  selectStatus,
} from "./countriesSlice";
import { Country } from "./Country";
import { CountriesContainer } from "./styled";

export const CountriesList = () => {
  const countries = useSelector(selectCountries);
  const status = useSelector(selectStatus);

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
            cca3={country.cca3}
          />
        ))
      ) : null}
    </CountriesContainer>
  );
};
