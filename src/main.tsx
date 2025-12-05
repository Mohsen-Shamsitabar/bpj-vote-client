import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("No root element found!");

const theme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    primary: {
      main: "#7ba42b",
    },
    secondary: {
      main: "#1f75bb",
    },
  },
  spacing: 16,
  typography: {
    fontFamily: "BYekan, sans-serif",
  },
});

createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
