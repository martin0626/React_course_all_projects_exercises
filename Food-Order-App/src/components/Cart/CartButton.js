import react, { Fragment, useContext, useState } from "react";
import CartIcon from "./CartIcon";
import classes from "./CartButton.module.css";
import CartContext from "../../store/cart-context";

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);
  let itemsCount = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.count;
  }, 0);

  return (
    <Fragment>
      <button onClick={props.cartHandler} className={classes.button}>
        <span>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{itemsCount}</span>
      </button>
    </Fragment>
  );
};

export default CartButton;
