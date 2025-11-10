/// <reference types="vite-plugin-pages/client-react" />

declare module "virtual:generated-pages" {
  import type { RouteObject } from "react-router-dom";
  const routes: RouteObject[];
  export default routes;
}
