import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MainNav from "../components/MainNav";

const RootLayout = () => {
  return (
    <Fragment>
      <MainNav />
      <Outlet />
    </Fragment>
  );
};

export default RootLayout;
