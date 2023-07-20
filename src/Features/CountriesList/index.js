import { useSelector } from "react-redux";
import { selectCountryByFilter, selectStatus } from "./countriesSlice";
import { Country } from "./Country";
import { CountriesContainer } from "./styled";
import { useLocation } from "react-router-dom";

export const CountriesList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search");
  const regionQuery = searchParams.get("region");

  const countries = useSelector((state) =>
    selectCountryByFilter(state, searchQuery, regionQuery)
  );
  const status = useSelector(selectStatus);

  return (
    <CountriesContainer>
      {status === "loading" ? (
        <p>Loading...</p>
      ) : status === "succes" && countries.length > 0 ? (
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
      ) : (
        <div>Not found!</div>
      )}
    </CountriesContainer>
  );
};
