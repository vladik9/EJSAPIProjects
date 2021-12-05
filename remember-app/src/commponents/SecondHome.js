import React, { useState } from "react";
import Button from "./Button/Button";
export default function SecondHome(props) {
  const [data, setData] = useState("");

  const enterText = (event) => {
    const util_info = event.target.value;
    setData(util_info);
    console.log(util_info);
    event.preventDefault();
  };

  return (
    <div>
      <form>
        {props.name}

        <input type="text" onChange={enterText} value={data}></input>
        <button type="text">Submit</button>
      </form>
      <Button />
    </div>
  );
}
