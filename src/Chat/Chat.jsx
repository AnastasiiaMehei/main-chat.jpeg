import styles from "./Chat.module.css";
export function Chat(img, name, surname, date) {
  return (
    <>
      <div>
        <img src={img} alt="" />
        <ul>
          <li>name{name}</li>
          <li>name{surname}</li>
        </ul>
        <p>{date}Registration Date</p>
        <div className={styles.buttons}>
          <button>Update</button>
          <button>Delete</button>
        </div>
      </div>
    </>
  );
}
