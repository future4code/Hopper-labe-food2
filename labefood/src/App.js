import Router from "./router/Router";
import { GlobalStyle } from "./AppStyles"
import GlobalState from "./global/GlobalState";

function App() {
  return (
    <div>
      <GlobalState>
        <GlobalStyle />
        <Router />
      </GlobalState>
    </div>
  );
}

export default App;
