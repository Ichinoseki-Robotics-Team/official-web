import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Contact, Error, Home, Schedule, Supporter } from "./pages";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/schedule",
      element: <Schedule />,
    },
    {
      path: "/supporter",
      element: <Supporter />,
    }
  ],
  { basename: process.env.PUBLIC_URL }
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
