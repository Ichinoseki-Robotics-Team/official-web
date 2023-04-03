import React from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import { About, Contact, Error, Home, Schedule } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "schedule",
    element: <Schedule />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
