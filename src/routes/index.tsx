import {
  createBrowserRouter,
  createHashRouter,
  unstable_HistoryRouter,
  MemoryRouter,
  useRoutes
} from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";

// Components
import Home from "../components/Home";
import _404 from "../components/404";
import About from "../components/About";
import ReduxPage from "../components/Redux";
import Hooks from "../components/hooks";
import Context from "../components/context";

import ReduxReducer from "../components/reduxCounter";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: Home
  },
  {
    path: "/about",
    //Component: About,
    children: [
      {
        path: "",
        Component: About
      },
      {
        path: ":section",
        Component: About
      }
    ]
  },
  {
    path: "/redux",
    Component: ReduxPage
  },
  {
    path: "/hooks",
    Component: Hooks
  },
  {
    path: "/context",
    Component: Context
  },
  {
    path: "/redux-reducer",
    Component: ReduxReducer
  },
  // Widlcard Route, for 404 not found errors.
  {
    path: "*",
    Component: _404
  }
]);

export default routes;
