import { useState } from "react";

const useInput = (validateValue) => {
  let [enteredValue, setEnteredValue] = useState("");
  let [isTouched, setIsTouched] = useState(false);

  let valueIsValid = validateValue(enteredValue);

  const hasError = !valueIsValid && isTouched;

  const changeHandler = (event) => {
    setEnteredValue(event.target.value);
    setIsTouched(true);
  };

  const blurHandler = () => {
    setIsTouched(true);
  };

  let reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    enteredValue,
    isTouched,
    setIsTouched,
    valueIsValid,
    hasError,
    changeHandler,
    blurHandler,
    reset,
  };
};

export default useInput;
