import React, { lazy, Suspense } from "react";
import ReactDom from "react-dom/client";
import Header from "./component/Header";
import { Body } from "./component/Body";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import Cart from "./component/cart";
import Restaurent from "./component/Restaurent";

const Grocery = lazy(() => import("./component/Grocery"));

const FoodApp = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const routeApp = createBrowserRouter([
  {
    path: "/",
    element: <FoodApp />,
    children: [
      {
        path: "/",
        element: <Body />,
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
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h2>Grocery Loading.......</h2>}>
            <Grocery />
          </Suspense>
        ),
      },

      {
        path: "/restaurent/:restid",
        element: <Restaurent />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDom.createRoot(document.getElementById("div1"));
root.render(<RouterProvider router={routeApp} />);
