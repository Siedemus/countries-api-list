import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./Assets/Styles/theme";
import { GlobalStyles } from "./Assets/Styles/globalStyles";
import { Navigation } from "./Features/Navigation";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectIsDarkMode } from "./Features/Navigation/DarkModeSwitch/darkModeSlice";
import { CountriesList } from "./Features/CountriesList";
import { SearchBar } from "./Features/SearchBar";
import { Main } from "./styled";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CountryDetails } from "./Features/CountryDetails";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCountries } from "./Features/CountriesList/countriesSlice";

function App() {
  const darkMode = useSelector(selectIsDarkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/country/:id" element={<CountryDetails />} />
          <Route
            path="/"
            element={
              <Main>
                <SearchBar />
                <CountriesList />
              </Main>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
