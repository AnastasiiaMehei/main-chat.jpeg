import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";

function AuthNav() {
  // Default export
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

export default AuthNav; // Default export
