import React from "react";
import fetch from "axios";
const getData = () => {
  fetch("http://localhost:8080/")
    .then((response) => response.json())
    .then((data) => console.log(data));
};

export default function GetStudent() {
  getData();
  return <div> Welcome</div>;
}
