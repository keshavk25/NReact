import React from "react";
import ReactDom from "react-dom/client";
import Header from "./component/Header";
import { Body } from "./component/Body";
import { RouterProvider, createBrowserRouter ,Outlet} from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import Cart from "./component/cart";

const FoodApp = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const routeApp=createBrowserRouter([
  {
    path:"/",
    element:<FoodApp/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"cart",
        element:<Cart/>
      }
    ],
    errorElement:<Error/> 
  },
  
])


const root = ReactDom.createRoot(document.getElementById("div1"));
root.render(<RouterProvider router={routeApp}/>);
