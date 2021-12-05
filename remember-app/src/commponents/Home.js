import ".././App.css";
import React from "react";
import SecondHome from "./SecondHome";
export default function Home(props) {
  return (
    <div className="center-text " id="text-color">
      <SecondHome name={props.name} />
    </div>
  );
}
