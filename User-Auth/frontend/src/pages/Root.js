import { useEffect } from "react";
import {
  Outlet,
  useLoaderData,
  useNavigation,
  useSubmit,
} from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import getToken, { getTokenDuration } from "../util/getToken";

function RootLayout() {
  // const token = useLoaderData();
  // const submit = useSubmit();

  // useEffect(() => {
  //   if (!token) {
  //     return;
  //   }
  //   if (token === "EXPIRED") {
  //     submit(null, { action: "/logout", method: "POST" });
  //     return;
  //   }

  //   let tokenDuration = getTokenDuration();
  //   setTimeout(() => {
  //     submit(null, { action: "/logout", method: "POST" });
  //   }, tokenDuration);
  // }, [token, submit]);
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;

export const rootLoader = () => {
  let token = getToken();
  return token;
};
