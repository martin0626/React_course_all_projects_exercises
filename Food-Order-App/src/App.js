import react, { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import HeaderComponent from "./components/Layout/header";
import Meals from "./components/Meals/Meals";

function App() {
  let [isOpenCart, setIsOpnenCart] = useState(false);

  let onCartAction = () => {
    if (isOpenCart) {
      setIsOpnenCart(false);
    } else {
      setIsOpnenCart(true);
    }
  };

  return (
    <Fragment>
      <HeaderComponent isOpenCart={isOpenCart} cartHandler={onCartAction} />
      <Meals />
      <Cart isOpenCart={isOpenCart} cartHandler={onCartAction} />
    </Fragment>
  );
}

export default App;
