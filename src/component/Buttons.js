import React from "react";

function Buttons({ onClickMul, onClickDiv, onClickAdd, onClickSub }) {
  return (
    <div>
      <div className="d-flex flex-row mb-3 w-100">
        <div className="p-2 w-100">
          <button
            type="button"
            className="btn btn-light w-100 "
            onClick={onClickAdd}
          >
            +
          </button>
        </div>
        <div className="p-2 w-100">
          <button
            type="button"
            className="btn btn-light w-100"
            onClick={onClickSub}
          >
            -
          </button>
        </div>
        <div className="p-2 w-100">
          <button
            type="button"
            className="btn btn-light w-100"
            onClick={onClickMul}
          >
            *
          </button>
        </div>
        <div className="p-2 w-100">
          <button
            type="button"
            className="btn btn-light w-100"
            onClick={onClickDiv}
          >
            %
          </button>
        </div>
      </div>
    </div>
  );
}

export default Buttons;
