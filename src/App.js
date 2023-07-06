import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./Assets/Styles/theme";
import { GlobalStyles } from "./Assets/Styles/globalStyles";
import { Navigation } from "./Features/Navigation";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectIsDarkMode } from "./Features/Navigation/DarkModeSwitch/darkModeSlice";
import { CountriesList } from "./Features/CountriesList";

function App() {
  const darkMode = useSelector(selectIsDarkMode);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Navigation />
      <CountriesList />
    </ThemeProvider>
  );
}

export default App;
