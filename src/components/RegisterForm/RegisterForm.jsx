import React from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { IoClose } from "react-icons/io5";
import { toast } from "react-hot-toast"; // Імпорт toast

import styles from "./RegisterForm.module.css";

const RegisterForm = ({ onClose }) => { // Додано onClose
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        toast.success("Registration successful!"); // Сповіщення про успішну реєстрацію
        onClose(); // Закриття модального вікна
      })
      .catch(() => {
        toast.error("Registration failed."); // Сповіщення про невдалу реєстрацію
      });

    form.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <div className={styles.IoClose} onClick={onClose}>
        <IoClose />
      </div>

      <label className={styles.label}>
        Username
        <input type="text" name="name" />
      </label>
      <label className={styles.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={styles.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;