import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, {useMemo} from "react";
import {Provider, useSelector} from "react-redux";
import { persistor, store } from "./store/configureStore";
import { isDarkMode } from "./store/ui/uiSelectors";
import { PersistGate } from "redux-persist/integration/react";
import Page from "./common/page/Page";
import { BrowserRouter } from "react-router-dom";

function App() {
  const darkMode = useSelector(isDarkMode);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary:  {
            main: "#6CA6C1"
          },
          secondary: {
            main: "#FFE66D"
          },
          text: {
            primary: darkMode ? "#F7FFF7": "#343434"
          }
        }
      }),
    [darkMode],
  );

  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Page />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
