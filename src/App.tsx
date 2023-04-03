import React from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import { About, Contact, Error, Home, Schedule } from "./pages";

const rootUrl = process.env.PUBLIC_URL;

const router = createBrowserRouter([
  {
    path: `${rootUrl}/`,
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: `${rootUrl}/home`,
    element: <Home />,
  },
  {
    path: `${rootUrl}/about`,
    element: <About />,
  },
  {
    path: `${rootUrl}/contact`,
    element: <Contact />,
  },
  {
    path: `${rootUrl}/schedule`,
    element: <Schedule />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
