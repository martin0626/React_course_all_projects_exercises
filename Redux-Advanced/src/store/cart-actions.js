import { useState } from "react";
import { cartActions, uiActions } from ".";

//TODO FETCH DATA FUNC

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      let request = await fetch(
        "https://jstest-47ca2-default-rtdb.europe-west1.firebasedatabase.app/Cart.json"
      );

      let response = await request.json();

      if (!request.ok) {
        throw Error("Cart data problem!");
      }
      return response;
    };

    try {
      let data = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: data.cart || [],
          totalQuantity: data.totalQuantity,
        })
      );
    } catch {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};

export const sendCartData = (cart, totalQuantity) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );
    const sendRequest = async () => {
      let request = await fetch(
        "https://jstest-47ca2-default-rtdb.europe-west1.firebasedatabase.app/Cart.json",
        {
          method: "PUT",
          body: JSON.stringify({ cart: cart, totalQuantity: totalQuantity }),
        }
      );

      if (!request.ok) {
        throw new Error("Send cart data failed.");
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Error",
        })
      );
    }
  };
};
