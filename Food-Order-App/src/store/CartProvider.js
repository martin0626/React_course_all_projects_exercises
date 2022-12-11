import { useReducer } from "react";

import CartContext from "./cart-context";

const productsReducer = (state, action) => {
  // TODO Make Amount Work
  if (!state.products.includes(action.product) && action.type === "add") {
    state.products.unshift(action.product);
    state.totalAmount = action.product.amount;
  }

  return state;
};

const CartProvider = (props) => {
  const [addedProducts, dispatchAdddedProducts] = useReducer(productsReducer, {
    products: [],
    totalAmount: 0,
  });

  const AddProductHandler = (product) => {
    dispatchAdddedProducts({ product: product, type: "add" });
  };

  const currentContext = {
    items: addedProducts.products,
    totalAmount: addedProducts.totalAmount,
    addItem: AddProductHandler,
    removeItem: "",
  };
  return (
    <CartContext.Provider value={currentContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
