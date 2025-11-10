import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, RouteObject } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import routes from "~react-pages"; 
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import { AppStorageProvider } from "./contexts/AppStorageContext";

export function wrapRoutesWithLayout(routes: RouteObject[]): RouteObject[] {
  return routes.map((route) => {
    if (!route.element) return route;

    const Layout = (route.element as any).type?.layout ?? React.Fragment;
    const element = route.element;

    const wrappedRoute: RouteObject = {
      ...route,
      element: <Layout>{element}</Layout>,
    };

    if (route.children && route.children.length > 0) {
      wrappedRoute.children = wrapRoutesWithLayout(route.children);
    }

    return wrappedRoute;
  });
}


const App = () => {
  const element = useRoutes(wrapRoutesWithLayout(routes));
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
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </AppStorageProvider>
  </React.StrictMode>
);
