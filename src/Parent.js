import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);

  function changeColor(){
    const randomColor = getRandomColor()
    setColor(randomColor)
    console.log(randomColor)
  }
  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child newColor = {changeColor}/>
      <Child newColor = {changeColor}/>
    </div>
  );
}

export default Parent;
