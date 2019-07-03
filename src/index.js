import React from "react";
import ReactDOM from "react-dom";
import { songDecoder } from "./6KYU/Dubstep";
import { findEvenIndex } from "./6KYU/EqualSidesOfAnArray";
import { partsSums } from "./6KYU/SumOfParts";
import { sqInRect } from "./6KYU/RectangleIntoSquare.js";
import { SpreadNumbers } from "./6KYU/SpreadNumbers.js";
import { isTriangle } from "./7KYU/Triangle";
import { printerError } from "./7KYU/printerError";
import { dir } from "./5KYU/DirectionsReduction";
import { oC } from "./7KYU/orderedCount";
import "./styles.css";

function App() {
  return (
    <div className='App'>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
