import React, { useState } from "react";

const Guru = () => {
  const [add, setAdd] = useState(0);
  const [deduct, setDeduct] = useState(0);

  const handleOnAdd = () => {
    setAdd(add + 1);
  };
  const handleOndeduct = () => {
    setDeduct(deduct - 1);
  };

  return (
    <>
      <input value={add + deduct}></input>
      <div>
        You have clicked {add},{deduct} times.
      </div>
      <button onClick={handleOnAdd}>ADD</button>
      <button onClick={handleOndeduct}>MINUS</button>
      <div>
        Notes:
        <ul>
          <li>You have clicked {add} times ADD.</li>
          <li>You have clicked {deduct} times MINUS.</li>
          <li>The Difference is: {add + deduct}</li>
        </ul>
      </div>
    </>
  );
};
export default Guru;
