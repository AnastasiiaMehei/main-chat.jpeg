import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "react-modal";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import styles from "./AuthNav.module.css";

Modal.setAppElement("#root");

function AuthNav() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <div>
      <NavLink
        className={styles.link}
        to="#"
        onClick={() => setIsRegisterOpen(true)}
      >
        Register
      </NavLink>
      <NavLink
        className={styles.link}
        to="#"
        onClick={() => setIsLoginOpen(true)}
      >
        Log in
      </NavLink>

      <Modal
        isOpen={isRegisterOpen}
        onRequestClose={() => setIsRegisterOpen(false)}
        contentLabel="Register Modal"
      >
        <RegisterPage onClose={() => setIsRegisterOpen(false)} />{" "}
        {/* Передано onClose */}
      </Modal>

      <Modal
        isOpen={isLoginOpen}
        onRequestClose={() => setIsLoginOpen(false)}
        contentLabel="Login Modal"
      >
        <LoginPage onClose={() => setIsLoginOpen(false)} />{" "}
        {/* Передано onClose */}
      </Modal>
    </div>
  );
}

export default AuthNav;
