import { ThemeProvider } from "styled-components";
import { darkTheme } from "./Assets/Styles/theme";
import { GlobalStyles } from "./Assets/Styles/globalStyles";
import { Navigation } from "./Features/Navigation";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Navigation />
    </ThemeProvider>
  );
}

export default App;
