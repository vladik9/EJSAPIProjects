import React, { useState } from "react";

export default function Button() {
  const [buton_value, SetBunttonValue] = useState(0);
  const [color, setColor] = useState("");
  const Increse = () => {
    SetBunttonValue(buton_value + 1);
  };
  const Decrese = () => {
    SetBunttonValue(buton_value - 1);
  };

  const chageColor = () => {
    color === "red" ? setColor("black") : setColor("red");
  };

  return (
    <div>
      <h1>Button State</h1>
      <h5>{buton_value}</h5>
      <button
        onClick={Increse}
        style={{ color: color }}
        onMouseOver={chageColor}
        onMouseOut={chageColor}
        value={buton_value}
      >
        PressMe
      </button>
      <button onClick={Decrese} value={buton_value}>
        PressMe
      </button>
    </div>
  );
}
