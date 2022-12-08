import react, { Fragment } from "react";
import CartIcon from "./CartIcon";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  return (
    <Fragment>
      <button className={classes.button}>
        <span>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>3</span>
      </button>
    </Fragment>
  );
};

export default CartButton;
