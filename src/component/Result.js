import React from "react";

const Result = ({ Result }) => {
  return (
    <div className="mt-2 result">
      <input
        type="text"
        class="form-control disabled bg-dark text-white"
        aria-describedby="emailHelp"
        value={Result}
        placeholder="Result"
      ></input>
    </div>
  );
};

export default Result;
