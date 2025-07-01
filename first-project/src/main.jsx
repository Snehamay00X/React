import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Print from "./New.jsx";

//////Unofficial Method for creating element////
// const element = (
//   <a href="https://google.com" target="_blank">
//     Visit Google
//   </a>
// );

//////Official Method for creating element///////
// const SecondElement = React.createElement(
//   "a",
//   { href: "https://google.com" },
//   "click me to visit google",
// );

createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>,
);
