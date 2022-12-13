import { Fragment, useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

let Cart = (props) => {
  const cartCtx = useContext(CartContext);
  let haveItems = cartCtx.items.length > 0;

  const addItemHandler = (item) => {
    console.log(item);
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = cartCtx.items.map((item) => {
    return (
      <CartItem
        name={item.name}
        price={item.price}
        amount={item.amount}
        onAdd={addItemHandler.bind(null, item)}
        onRemove={removeItemHandler.bind(null, item.id)}
      ></CartItem>
    );
  });

  return (
    <Fragment>
      {props.isOpenCart && (
        <Modal cartHandler={props.cartHandler}>
          <ul className={classes["cart-items"]}>{cartItems}</ul>
          <div className={classes.total}>
            <span>Total amount</span>
            <span>${cartCtx.totalAmount.toFixed(2)}</span>
          </div>
          <div className={classes.actions}>
            <button
              onClick={props.cartHandler}
              className={classes["button--alt"]}
            >
              Close
            </button>

            {haveItems && <button className={classes.button}>Order</button>}
          </div>
        </Modal>
      )}
      )
    </Fragment>
  );
};

export default Cart;
