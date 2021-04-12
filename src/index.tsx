import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Avenir;
    font-style: normal;
    text-align: -webkit-center;
}
`;
const theme = {
  media: {
    phone: "(max-width: 425px)",
    tablet: "(max-width: 768px) and (min-width: 425px)",
  },
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Global />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);
