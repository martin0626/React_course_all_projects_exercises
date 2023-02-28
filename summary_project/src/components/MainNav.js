import { NavLink } from "react-router-dom";
import classes from "./MainNav.module.css";

const MainNav = () => {
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
      <li>
        <NavLink
          to="/important"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          Important
        </NavLink>
      </li>
    </nav>
  );
};

export default MainNav;
