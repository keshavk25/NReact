import React from "react";
import ReactDom from "react-dom/client";
import Header from "./component/Header";
import { Body } from "./component/Body";

const FoodApp = () => (
  <>
    <Header />
    <Body />
  </>
);

const root = ReactDom.createRoot(document.getElementById("div1"));
root.render(<FoodApp />);
