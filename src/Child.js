import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ newColor }) {
  return <div onClick={newColor} className="child" style={{ backgroundColor: "#FFF" }} />;
}

export default Child;
