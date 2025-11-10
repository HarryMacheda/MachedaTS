import React, { JSX } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, RouteObject } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import routes from "~react-pages"; 
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import { AppStorageProvider } from "./contexts/AppStorageContext";


type ComponentWithLayout = React.ComponentType & {
  layout?: React.ComponentType<{ children: React.ReactNode }>;
};

export function wrapRoutesWithLayout(routes: RouteObject[]): RouteObject[] {
  return routes.map((route) => {
    if (!route.element) return route;

    let PageComponent: ComponentWithLayout | null = null;

    if (React.isValidElement(route.element)) {
      const type = route.element.type;
      if (typeof type === "function") {
        PageComponent = type as ComponentWithLayout;
      }
    }
    if (!PageComponent) {
      return route;
    }

    const Layout = PageComponent.layout ?? React.Fragment;

    const wrappedRoute: RouteObject = {
      ...route,
      element: (
        <Layout>
          <PageComponent />
        </Layout>
      ),
    };

    if (route.children && route.children.length > 0) {
      wrappedRoute.children = wrapRoutesWithLayout(route.children);
    }

    console.log(PageComponent, Layout, route)
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
