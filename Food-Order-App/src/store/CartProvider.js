import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const productsReducer = (state, action) => {
  // TODO Make Amount Work
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "RESET") {
    return {
      items: [],
      totalAmount: 0,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [addedProducts, dispatchAdddedProducts] = useReducer(
    productsReducer,
    defaultCartState
  );

  const AddProductHandler = (item) => {
    dispatchAdddedProducts({ item: item, type: "ADD" });
  };

  const RemoveProductHandler = (id) => {
    dispatchAdddedProducts({ id: id, type: "REMOVE" });
  };

  const ResetProductsHandler = (id) => {
    dispatchAdddedProducts({ type: "RESET" });
  };

  const currentContext = {
    items: addedProducts.items,
    totalAmount: addedProducts.totalAmount,
    addItem: AddProductHandler,
    removeItem: RemoveProductHandler,
    resetItems: ResetProductsHandler,
  };
  return (
    <CartContext.Provider value={currentContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
