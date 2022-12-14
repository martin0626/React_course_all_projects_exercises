import { useDispatch } from "react-redux";
import { cartActions } from "../../store";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const { id, title, quantity, total, price } = props.item;
  let dispatch = useDispatch();
  let item = {
    id: id,
    title: title,
    price: price,
  };

  const decreaseHandler = () => {
    dispatch(cartActions.decrease(item));
  };

  const icreaseHandler = () => {
    dispatch(cartActions.addItem(item));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseHandler}>-</button>
          <button onClick={icreaseHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
