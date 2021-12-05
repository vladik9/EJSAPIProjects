import React, { useState } from "react";

export default function TripleInput(props) {
  const [dataObject, setDataObject] = useState({
    uname: "",
    age: "",
    email: "",
  });

  const updateData = (e) => {
    const { name, value } = e.target;
    setDataObject((prevState) => ({ ...prevState, [name]: value }));
    props.onGetData(dataObject);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <label>Enter your name: </label>
      <input
        name="uname"
        type="text"
        onChange={updateData}
        value={dataObject.uname}
      ></input>
      <label>Enter your age: </label>
      <input
        name="age"
        type="text"
        onChange={updateData}
        value={dataObject.age}
      ></input>
      <label>Enter your email: </label>
      <input
        name="email"
        type="text"
        onChange={updateData}
        value={dataObject.email}
      ></input>
    </div>
  );
}
