import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/Notifications/Notifications";
import { cartActions, uiActions } from "./store";

let isInitial = true;

function App() {
  // TODO FINISH Notification Functionality
  let isCartOpen = useSelector((state) => state.cart.isOpen);
  let cart = useSelector((state) => state.cart.items);
  let notification = useSelector((state) => state.ui.notification);
  let dispatch = useDispatch();

  useEffect(() => {
    let sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data!",
        })
      );

      let request = await fetch(
        "https://jstest-47ca2-default-rtdb.europe-west1.firebasedatabase.app/Cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!request.ok) {
        throw new Error("Send cart data failed.");
      }

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Error",
        })
      );
    });
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
