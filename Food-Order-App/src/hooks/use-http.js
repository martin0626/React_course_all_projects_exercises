import { useState } from "react";

let useHttp = (valueChecker) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  let isValidValue = valueChecker(enteredValue);
  let hasError = isTouched && !isValidValue;

  let blurHandler = () => {
    setIsTouched(true);
  };

  let enteredValueHandler = (event) => {
    setEnteredValue(event.target.value);
    setIsTouched(true);
  };

  const reset = () => {
    setIsTouched(false);
    setEnteredValue("");
  };
  return {
    enteredValue,
    enteredValueHandler,
    blurHandler,
    hasError,
    reset,
    isValidValue,
  };
};

export default useHttp;
