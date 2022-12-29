import { useState } from "react";
import useHttp from "../../../hooks/use-http";
import classes from "./checkout.module.css";

const Checkout = (props) => {
  let { enteredValueHandler: nameChangeHandler } = useHttp();
  let { enteredValueHandler: streetChangeHandler } = useHttp();
  let { enteredValueHandler: postalCodeChangeHandler } = useHttp();
  let { enteredValueHandler: cityChangeHandler } = useHttp();

  const confirmHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input onChange={nameChangeHandler} type="text" id="name" />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input onChange={streetChangeHandler} type="text" id="street" />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input onChange={postalCodeChangeHandler} type="text" id="postal" />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input onChange={cityChangeHandler} type="text" id="city" />
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
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
