import { Fragment, useContext } from "react";
import CartContext from "../../store/cart-context";
import MealItem from "../Meals/MealItems/MealItem";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

let Cart = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <Fragment>
      {props.isOpenCart && (
        <Modal cartHandler={props.cartHandler}>
          <ul>
            <MealItem meals={cartCtx.items} />
          </ul>
          <div className={classes.total}>
            <span>Total amount</span>
            <span>{cartCtx.totalAmount}</span>
          </div>
          <div className={classes.actions}>
            <button
              onClick={props.cartHandler}
              className={classes["button--alt"]}
            >
              Close
            </button>
            <button className={classes.button}>Order</button>
          </div>
        </Modal>
      )}
      )
    </Fragment>
  );
};

export default Cart;
