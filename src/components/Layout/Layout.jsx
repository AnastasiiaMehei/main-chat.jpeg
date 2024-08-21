import { AppBar } from "../AppBar/AppBar"; // Adjusted import statement
import css from "./Layout.module.css";
function Layout({ children }) {
  return (
    <div className={css.container}>
      <AppBar />
      {children}
    </div>
  );
}
export default Layout;
