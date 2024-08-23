import React from "react";
import AppBar from "../AppBar/AppBar"; // Adjusted import statement
import css from "./Layout.module.css";
import ChatList from "../ChatList/ChatList";
import UserChat from "../UserChat/UserChat";

function Layout({ children }) {
  return (
    <div className={css.container}>
      <div className={css.contentContainer}>
        <div className={css.wrapper}>
          <AppBar />
          <ChatList />
        </div>
        <div className={css.userChat}>
          <UserChat />
        </div>
      </div>
    </div>
  );
}

export default Layout;
