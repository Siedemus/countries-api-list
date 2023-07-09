import { useSelector } from "react-redux";
import { selectCountryByCCA3 } from "../CountriesList/countriesSlice";

export const useCreateDataPack = (code) => {
  const country = useSelector((state) => selectCountryByCCA3(state, code));

  if (!country) {
    return null;
  }

  const data = {
    flag: country.flags.svg ? country.flags.svg : "No Data",
    commonName: country.name.common ? country.name.common : "No Data",
    officialName: country.name.official ? country.name.official : "No Data",
    population: country.population ? country.population : "No Data",
    region: country.region ? country.region : "No Data",
    subRegion: country.subregion ? country.subregion : "No Data",
    capital: country.capital ? country.capital : "No Data",
    tld: country.tld ? country.tld.join(", ") : "No Data",
    currencies: country.currencies
      ? Object.keys(country.currencies).join(", ")
      : "No Data",
    languages: country.languages
      ? Object.values(country.languages).join(", ")
      : "No Data",
    borders: country.borders ? country.borders : "No Data",
  };

  return data;
};
