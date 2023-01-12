import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/Notifications/Notifications";
import { cartActions, uiActions } from "./store";
import { fetchCartData, sendCartData } from "./store/cart-actions";

let isInitial = true;

function App() {
  let isCartOpen = useSelector((state) => state.cart.isOpen);
  let cart = useSelector((state) => state.cart.items);
  let totalQuantity = useSelector((state) => state.cart.totalQuantity);

  let isChanged = useSelector((state) => state.cart.isChanged);
  let notification = useSelector((state) => state.ui.notification);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (isChanged) {
      dispatch(sendCartData(cart, totalQuantity));
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isCartOpen && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
