import React, { Fragment, useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout/checkout";

let Cart = (props) => {
  let [isVisibleForm, setVisibleForm] = useState(false);
  let [isSendingRequest, setSendRequest] = useState(false);
  let [isReadyRequest, setIsReadyRequest] = useState(false);

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

  let visibleFormHandler = () => {
    if (isVisibleForm) {
      setVisibleForm(false);
    } else {
      setVisibleForm(true);
    }
  };

  let cartProducts = {
    products: cartCtx.items,
    totalAmount: cartCtx.totalAmount,
  };

  let cartContent = (
    <Fragment>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total amount</span>
        <span>${cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        {!isVisibleForm && (
          <div>
            {haveItems && (
              <button onClick={visibleFormHandler} className={classes.button}>
                Order
              </button>
            )}

            <button
              onClick={() => {
                props.cartHandler();
              }}
              className={classes["button--alt"]}
            >
              Close
            </button>
          </div>
        )}

        {/* {haveItems && <button className={classes.button}>Order</button>} */}
      </div>
      {isVisibleForm && (
        <Checkout
          resetItems={cartCtx.resetItems}
          setSendRequest={setSendRequest}
          setIsReadyRequest={setIsReadyRequest}
          cartItems={cartProducts}
          onCancel={props.cartHandler}
          visibleFormHandler={visibleFormHandler}
        />
      )}
    </Fragment>
  );

  let sendingRequest = (
    <Fragment>
      <p>Working on your order!</p>
      <button
        onClick={() => {
          props.cartHandler();
          setIsReadyRequest(false);
          visibleFormHandler();
        }}
        className={classes["button--alt"]}
      >
        Close
      </button>
    </Fragment>
  );
  let successfullSend = (
    <Fragment>
      <p>Your order is confirmed. Thank you!</p>
      <div className={classes.actions}>
        <button
          onClick={() => {
            props.cartHandler();
            setIsReadyRequest(false);
            visibleFormHandler();
          }}
          className={classes.button}
        >
          Close
        </button>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      {props.isOpenCart && (
        <Modal cartHandler={props.cartHandler}>
          {!isSendingRequest && !isReadyRequest && cartContent}
          {isSendingRequest && sendingRequest}
          {isReadyRequest && successfullSend}
        </Modal>
      )}
      )
    </Fragment>
  );
};

export default Cart;
