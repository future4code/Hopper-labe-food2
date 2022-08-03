import Router from "./router/Router";
import { GlobalStyle } from "./AppStyles";
import GlobalState from "./global/GlobalState";
import theme from "./constants/theme";
import { ThemeProvider } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
        <GlobalStyle />
        <Router />
      </GlobalState>
    </ThemeProvider>
  );
}

export default App;
