import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  let {
    enteredValue: nameInput,
    isTouched: touchedName,
    setIsTouched: setTouchedName,
    valueIsValid: enteredNameIsValid,
    hasError: isNotValidName,
    changeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  let {
    enteredValue: emailInput,
    isTouched: touchedEmail,
    setIsTouched: setTouchedEmail,
    valueIsValid: enteredEmailIsValid,
    hasError: isNotValidEmail,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.trim().includes("@"));

  let touchedInput = !touchedEmail && !touchedName;

  let formisValid = false;

  if ((!isNotValidName && !isNotValidEmail) | touchedInput) {
    formisValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!enteredEmailIsValid | !enteredNameIsValid) {
      setTouchedName(true);
      setTouchedEmail(true);
      return;
    }

    resetEmailInput();
    resetNameInput();
  };

  let inputNameFieldClasses = isNotValidName
    ? "invalid form-control"
    : "form-control";
  let inputEmailFieldClasses = isNotValidEmail
    ? "invalid form-control"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className={inputNameFieldClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          onBlur={nameBlurHandler}
          onChange={nameChangeHandler}
          type="text"
          id="name"
          value={nameInput}
        />
        {isNotValidName && <p className="error-text">Invalid Name!</p>}
      </div>
      <div className={inputEmailFieldClasses}>
        <label htmlFor="name">Email</label>
        <input
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
          type="text"
          id="name"
          value={emailInput}
        />
        {isNotValidEmail && <p className="error-text">Invalid Email!</p>}
      </div>
      <div className="form-actions">
        {!formisValid ? (
          <button disabled={true} className="disabled">
            Submit
          </button>
        ) : (
          <button>Submit</button>
        )}
      </div>
    </form>
  );
};

export default SimpleInput;
