import React from "react";
import  ReactDOM  from "react-dom/client";
const heading=
React.createElement("div",
{Id:"parent"},
["Hello world!",React.createElement("div",
    {Id:"child"},
    ["Hello world!",React.createElement("h3",
    {},
    "Hello world!")])])

 



ReactDOM.createRoot(document.getElementById("div1")).render(heading);