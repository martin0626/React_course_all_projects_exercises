import { useState } from "react";

let useHttp = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  let enteredValueHandler = (event) => {
    setEnteredValue(event.target.value);
    console.log(enteredValue);
  };
  return {
    enteredValueHandler,
  };
};

export default useHttp;
