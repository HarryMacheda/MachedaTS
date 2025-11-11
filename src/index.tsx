import React, { JSX } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, RouteObject } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import routes from "~react-pages"; 
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import { AppStorageProvider } from "./contexts/AppStorageContext";
import MainLayout from "./_mainLayout";

const App = () => {
  const element = useRoutes(routes);
  return element;
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <AppStorageProvider> {/*./contexts/AppStorageContext.tsx*/}
      <ThemeProvider theme={theme}> {/*./theme.ts*/}
        <CssBaseline />
        <MainLayout>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </MainLayout>
      </ThemeProvider>
    </AppStorageProvider>
  </React.StrictMode>
);
