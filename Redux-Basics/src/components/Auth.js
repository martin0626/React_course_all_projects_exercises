import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";

import classes from "./Auth.module.css";

const Auth = () => {
  const dispatch = useDispatch();

  let isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const loginHandler = () => {
    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        {!isLoggedIn ? (
          <form>
            <div className={classes.control}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <button onClick={loginHandler}>Login</button>
          </form>
        ) : (
          <h2>Welcome User!</h2>
        )}
      </section>
    </main>
  );
};

export default Auth;
