import react from "react";
import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store";

const CartButton = (props) => {
  let dispatch = useDispatch();
  let quantity = useSelector((state) => state.cart.totalQuantity);

  let cartActionHandler = () => {
    dispatch(cartActions.changeView());
  };

  return (
    <button onClick={cartActionHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
