import { useState } from "react";

const SimpleInput = (props) => {
  let [nameInput, setNameInput] = useState("");
  let [touchedName, setTouchedName] = useState(false);
  let [emailInput, setEmailInput] = useState("");
  let [touchedEmail, setTouchedEmail] = useState(false);

  let touchedInput = !touchedEmail && !touchedName;

  let enteredNameisValid = nameInput.trim() !== "";
  let isNotValidName = !enteredNameisValid && touchedName;

  let enteredEmailIsValid = emailInput.trim().includes("@");
  let isNotValidEmail = !enteredEmailIsValid && touchedEmail;
  let formisValid = false;

  if ((!isNotValidName && !isNotValidEmail) | touchedInput) {
    formisValid = true;
  }

  const blurEmailHandler = () => {
    setTouchedEmail(true);
  };

  const emailChangeHandler = (event) => {
    setEmailInput(event.target.value);
    setTouchedEmail(true);
  };

  const blurHandler = () => {
    setTouchedName(true);
  };

  const nameChangeHandler = (event) => {
    setNameInput(event.target.value);
    setTouchedName(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!enteredEmailIsValid | !enteredNameisValid) {
      return;
    }

    setTouchedEmail(false);
    setTouchedName(false);

    setEmailInput("");
    setNameInput("");
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
          onBlur={blurHandler}
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
          onBlur={blurEmailHandler}
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
