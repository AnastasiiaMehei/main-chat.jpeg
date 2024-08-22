// src/components/Layout/Layout.jsx
import React from "react";
import AppBar from "../AppBar/AppBar"; // Adjusted import statement
import css from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div className={css.container}>
      <AppBar />
      <div className={css.content}>{children}</div>
    </div>
  );
}

export default Layout;
