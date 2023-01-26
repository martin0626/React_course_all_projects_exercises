import { redirect } from "react-router-dom";

// export const getTokenDuration = () => {
//   const endTime = localStorage.getItem("expiration");

//   const now = new Date();
//   const duration = endTime.getTime() - now.getTime();
//   return duration;
// };

const getToken = () => {
  // let tokenDuration = getTokenDuration();
  let token = localStorage.getItem("token");

  // if (!token) {
  //   return;
  // }

  // if (tokenDuration < 0) {
  //   return "EXPIRED";
  // }
  return token;
};

export const checkAuthLoader = () => {
  const token = getToken();

  if (!token) {
    return redirect("/authentication");
  }
};

export default getToken;
