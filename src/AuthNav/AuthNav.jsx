import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";

export function AuthNav() {
  return (
    <div>
      <NavLink className={styles.link} to="/register">
        Register
      </NavLink>
      <NavLink className={styles.link} to="/login">
        Log in
      </NavLink>
    </div>
  );
}
