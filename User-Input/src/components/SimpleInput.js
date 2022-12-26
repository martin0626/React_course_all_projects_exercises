import { useState } from "react";

const SimpleInput = (props) => {
  let [nameInput, setNameInput] = useState("");
  let [touchedName, setTouchedName] = useState(false);

  let enteredNameIsValid = nameInput.trim() === "";
  let isValid = enteredNameIsValid && touchedName;

  const blurHandler = () => {
    setTouchedName(true);
  };

  const nameChangeHandler = (event) => {
    setNameInput(event.target.value);
    setTouchedName(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    setTouchedName(true);
  };

  let inputFieldClasses = isValid ? "invalid form-control" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className={inputFieldClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          onBlur={blurHandler}
          onChange={nameChangeHandler}
          type="text"
          id="name"
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
      {isValid && <p className="error-text">Error!</p>}
    </form>
  );
};

export default SimpleInput;
