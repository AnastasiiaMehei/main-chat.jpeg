import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { IoClose } from "react-icons/io5";
import { toast } from "react-hot-toast"; // Імпорт toast
import { useNavigate } from "react-router-dom"; // Імпорт useNavigate

import styles from "./LoginForm.module.css";

export function LoginForm({ onClose }) {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Використання useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        toast.success("Login successful!"); // Сповіщення про успішний логін
        onClose(); // Закриття модального вікна
        navigate("/chats"); // Перенаправлення на сторінку чатів
      })
      .catch(() => {
        toast.error("Login failed."); // Сповіщення про невдалий логін
      });

    form.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <div className={styles.IoClose} onClick={onClose}>
        <IoClose />
      </div>
      <label className={styles.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={styles.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
}

export default LoginForm;
