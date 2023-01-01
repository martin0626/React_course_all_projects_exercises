import useHttp from "../../../hooks/use-http";
import classes from "./checkout.module.css";

const Checkout = (props) => {
  let formIsValid = false;

  let {
    enteredValue: name,
    enteredValueHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
    reset: nameReset,
    hasError: nameHasError,
    isValidValue: nameIsValid,
  } = useHttp((value) => {
    return value.length > 3;
  });
  let {
    enteredValue: street,
    enteredValueHandler: streetChangeHandler,
    blurHandler: streetBlurHandler,
    reset: streetReset,
    hasError: streetHasError,
    isValidValue: streetIsValid,
  } = useHttp((value) => {
    return value.length > 3;
  });
  let {
    enteredValue: postalCode,
    enteredValueHandler: postalCodeChangeHandler,
    blurHandler: postalCodeBlurHandler,
    reset: postalCodeReset,
    hasError: postalCodeHasError,
    isValidValue: postalCodeIsValid,
  } = useHttp((value) => {
    return value.length > 3;
  });
  let {
    enteredValue: city,
    enteredValueHandler: cityChangeHandler,
    blurHandler: cityBlurHandler,
    reset: cityReset,
    hasError: cityHasError,
    isValidValue: cityIsValid,
  } = useHttp((value) => {
    return value.length > 3;
  });

  if (cityIsValid && nameIsValid && streetIsValid && postalCodeIsValid) {
    formIsValid = true;
  }

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!cityIsValid | !nameIsValid | !streetIsValid | !postalCodeIsValid) {
      nameBlurHandler();
      streetBlurHandler();
      postalCodeBlurHandler();
      cityBlurHandler();
      formIsValid = false;
      console.log("work");
      return;
    }

    let userData = {
      name: name,
      street: street,
      postalCode: postalCode,
      city: city,
    };

    formIsValid = false;
    props.setSendRequest(true);
    let request = await fetch(
      "https://jstest-47ca2-default-rtdb.europe-west1.firebasedatabase.app/Orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: props.cartItems,
        }),
      }
    );
    props.setSendRequest(false);
    props.setIsReadyRequest(true);
    props.resetItems();

    nameReset();
    streetReset();
    postalCodeReset();
    cityReset();
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        {nameHasError && <p className={classes["error-msg"]}>Error</p>}
        <label htmlFor="name">Your Name</label>
        <input
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          type="text"
          id="name"
          value={name}
        />
      </div>
      <div className={classes.control}>
        {streetHasError && <p className={classes["error-msg"]}>Error</p>}
        <label htmlFor="street">Street</label>
        <input
          onChange={streetChangeHandler}
          onBlur={streetBlurHandler}
          type="text"
          id="street"
          value={street}
        />
      </div>
      <div className={classes.control}>
        {postalCodeHasError && <p className={classes["error-msg"]}>Error</p>}

        <label htmlFor="postal">Postal Code</label>
        <input
          onChange={postalCodeChangeHandler}
          onBlur={postalCodeBlurHandler}
          type="text"
          id="postal"
          value={postalCode}
        />
      </div>
      <div className={classes.control}>
        {cityHasError && <p className={classes["error-msg"]}>Error</p>}

        <label htmlFor="city">City</label>
        <input
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
          type="text"
          id="city"
          value={city}
        />
      </div>
      <div className={classes.actions}>
        <button
          type="button"
          onClick={() => {
            props.onCancel();
            props.visibleFormHandler();
          }}
        >
          Cancel
        </button>
        {formIsValid ? (
          <button className={classes.submit}>Confirm</button>
        ) : (
          <button disabled={true} className={classes["disabled-btn"]}>
            Confirm
          </button>
        )}
      </div>
    </form>
  );
};

export default Checkout;
