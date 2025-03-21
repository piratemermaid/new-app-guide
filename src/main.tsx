import { CssBaseline, ThemeProvider } from "@mui/material";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { defaultTheme } from "~/themes";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
      <CssBaseline enableColorScheme />
    </ThemeProvider>
  </StrictMode>
);
