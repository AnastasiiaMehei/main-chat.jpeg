import { AppBar } from "../AppBar/AppBar"; // Adjusted import statement
import css from "./Layout.module.css";
function Layout({ children }) {
  return (
    <div className={css.container}>
      <AppBar />
      {children}
      <p className={css.chats}>Chats</p>
    </div>
  );
}
export default Layout;
