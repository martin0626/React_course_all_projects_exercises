import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  let formIsValid = false;

  let {
    enteredValue: firstName,
    isTouched: isTouchedFirstName,
    setIsTouched: setIsTouchedFirstName,
    valueIsValid: isValidFirstName,
    hasError: hasErrorFirstName,
    changeHandler: changeHandlerFirstName,
    blurHandler: blurHandlerFirstName,
    reset: resetFirstName,
  } = useInput((value) => value.trim().length >= 3);

  let {
    enteredValue: lastName,
    isTouched: isTouchedLastName,
    setIsTouched: setIsTouchedLastName,
    valueIsValid: isValidLastName,
    hasError: hasErrorLastName,
    changeHandler: changeHandlerLastName,
    blurHandler: blurHandlerLastName,
    reset: resetLastName,
  } = useInput((value) => value.trim().length >= 3);

  let {
    enteredValue: email,
    isTouched: isTouchedEmail,
    setIsTouched: setIsTouchedEmail,
    valueIsValid: isValidEmail,
    hasError: hasErrorEmail,
    changeHandler: changeHandlerEmail,
    blurHandler: blurHandlerEmail,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));

  let isTouched = isTouchedEmail && isTouchedFirstName && isTouchedLastName;

  if ((isValidFirstName && isValidLastName && isValidLastName) | !isTouched) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!isValidEmail | !isValidFirstName | !isValidLastName) {
      setIsTouchedEmail(true);
      setIsTouchedFirstName(true);
      setIsTouchedLastName(true);
      return;
    }

    resetEmail();
    resetFirstName();
    resetLastName();
  };

  let firstNameClasses = hasErrorFirstName
    ? "invalid form-control"
    : "form-control";

  let lastNameClasses = hasErrorLastName
    ? "invalid form-control"
    : "form-control";

  let emailClasses = hasErrorEmail ? "invalid form-control" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            onChange={changeHandlerFirstName}
            onBlur={blurHandlerFirstName}
            type="text"
            id="name"
            value={firstName}
          />
          {hasErrorFirstName && (
            <p className="error-text">First Name Is Invalid</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            onChange={changeHandlerLastName}
            onBlur={blurHandlerLastName}
            type="text"
            id="name"
            value={lastName}
          />
          {hasErrorLastName && (
            <p className="error-text">Last Name Is Invalid</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          onChange={changeHandlerEmail}
          onBlur={blurHandlerEmail}
          type="text"
          id="name"
          value={email}
        />
        {hasErrorEmail && <p className="error-text">Email Is Invalid</p>}
      </div>
      <div className="form-actions">
        {!formIsValid ? (
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

export default BasicForm;
