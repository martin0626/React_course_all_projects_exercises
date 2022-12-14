import react, { Fragment, useContext, useEffect, useState } from "react";
import CartIcon from "./CartIcon";
import classes from "./CartButton.module.css";
import CartContext from "../../store/cart-context";
import { findRenderedComponentWithType } from "react-dom/test-utils";

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);
  let [isHighlited, setHighlite] = useState(false);

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }

    const timer = setHighlite(true);
    setTimeout(() => {
      setHighlite(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  let itemsCount = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  let btnClasses = `${classes.button} ${isHighlited ? classes.bump : ""}`;

  return (
    <Fragment>
      <button onClick={props.cartHandler} className={btnClasses}>
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
