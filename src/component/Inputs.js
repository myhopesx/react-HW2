import React from "react";

function Inputs({ num1, num2, onNum1Change, onNum2Change }) {
  return (
    <div className="d-flex flex-row ">
      <input
        type="text"
        class="form-control m-3"
        aria-describedby="emailHelp"
        value={num1}
        onChange={onNum1Change}
        placeholder="Enter Number 1"
      />
      <input
        type="text"
        class="form-control m-3"
        aria-describedby="emailHelp"
        value={num2}
        onChange={onNum2Change}
        placeholder="Enter Number 2"
      />
    </div>
  );
}

export default Inputs;
