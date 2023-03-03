import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import classes from "./MainNav.module.css";

const MainNav = () => {
  const importantQuantity = useSelector((state) => state.important.quantity);
  return (
    <nav className={classes.navigation}>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? classes.active : "")}
          end
        >
          Todos
        </NavLink>
      </li>
      {/* <li>
        <NavLink
          to="/new"
          className={({ isActive }) => (isActive ? classes.active : "")}
          end
        >
          New Todo
        </NavLink>
      </li> */}
      <li className={classes.notification}>
        <NavLink
          to="/important"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          <span className={classes.number}>{importantQuantity}</span>
          Important
        </NavLink>
      </li>
    </nav>
  );
};

export default MainNav;
