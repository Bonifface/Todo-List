import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router} from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgba(6, 128, 231, 1)"
    }
  }
})

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);
