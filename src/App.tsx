import { createTheme } from "@mui/material";
import "./App.css";
import AppRouter from "./router";
import { ThemeProvider } from "@emotion/react";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const baseTheme = createTheme({
  typography: {
    allVariants: {
      fontFamily:
        "Work Sans, Poppins, Helvetica Neue, Helvetica, Arial, sans-serif",
      fontSize: "14px",
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={baseTheme}>
        <AppRouter />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
