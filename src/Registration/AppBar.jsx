import { SlMagnifier } from "react-icons/sl";
import { IoPersonSharp } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";

import styles from "./AppBar.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";
// import { LoginForm } from "../LoginForm/LoginForm";

export function AppBar() {
  const { isLoggedIn } = useSelector(selectIsLoggedIn);

  return (
    <header>
      <div className={styles.container}>
        <div className={styles.headWrapper}>
          <ul className={styles.icons}>
            <li className={styles.iconPerson}>
              <IoPersonSharp />
            </li>
            <li className={styles.check}>
              <FaRegCheckCircle />
            </li>
          </ul>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
        <form className={styles.form} action="">
          <SlMagnifier />
          <input
            className={styles.input}
            type="text"
            placeholder="Search or start new chat"
          />
        </form>
      </div>
    </header>
  );
}
