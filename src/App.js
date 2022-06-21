import "./App.css";
import Buttons from "./component/Buttons";
import Inputs from "./component/Inputs";
import Result from "./component/Result";
import { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const onClickAdd = () => {
    if (num1 !== "" && num2 !== "") {
      setResult(parseInt(num1) + parseInt(num2));
    }
  };

  const onClickSub = () => {
    if (num1 !== "" && num2 !== "") {
      setResult(parseInt(num1) - parseInt(num2));
    }
  };

  const onClickMul = () => {
    if (num1 !== "" && num2 !== "") {
      setResult(parseInt(num1) * parseInt(num2));
    }
  };

  const onClickRemin = () => {
    if (num1 !== "" && num2 !== "") {
      setResult(parseInt(num1) % parseInt(num2));
    }
  };

  const onClickDiv = () => {
    if (num1 !== "" && num2 !== "") {
      setResult(parseInt(num1) / parseInt(num2));
    }
  };

  const onNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const onNum2Change = (e) => {
    setNum2(e.target.value);
  };

  return (
    <div className="App">
      <h1 className="text-center">Calculator App</h1>
      <Inputs
        num1={num1}
        num2={num2}
        onNum1Change={onNum1Change}
        onNum2Change={onNum2Change}
      />
      <Buttons
        onClickAdd={onClickAdd}
        onClickDiv={onClickDiv}
        onClickSub={onClickSub}
        onClickMul={onClickMul}
        onClickRemin={onClickRemin}
      />
      <Result Result={result} />
    </div>
  );
}
export default App;
