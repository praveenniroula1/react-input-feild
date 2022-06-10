import React, { useState } from "react";

export const Input = () => {
  const [data, setData] = useState(null);
  function getData(val) {
    setData(val.target.value);
  }
  const [printdata, setPrintData] = useState(["praveen"]);
  const Print = () => {
    setPrintData([...printdata, data]);
    setData("");
  };
  return (
    <>
      <h1 className="top">Get Input Box Value</h1>
      <input value={data} onChange={getData} type="text"></input>{" "}
      <button onClick={Print}> Print </button>
      <hr />
      <ul>
        {printdata.map((value, index) => {
          return <li>{value} </li>;
        })}
      </ul>
    </>
  );
};
