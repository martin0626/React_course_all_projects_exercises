import react, { Fragment } from "react";
import Cart from "./components/Cart/Cart";
import HeaderComponent from "./components/Layout/header";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <Fragment>
      <HeaderComponent />
      <Meals />
      <Cart />
    </Fragment>
  );
}

export default App;
