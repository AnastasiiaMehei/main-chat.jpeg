import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import {
  changeChatsFilter,
  selectChatsFilter,
} from "../../redux/filter/filter";
export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectChatsFilter);

  return (
    <div className={css.inputbox}>
      <label htmlFor="search">
        <p className={css.paragraph}>Search or start new chat</p>
      </label>
      <input
        className={css.field}
        id="search"
        onChange={(e) => dispatch(changeChatsFilter(e.target.value))}
        type="text"
        value={filter}
        placeholder="Search or start new chat"
      />
    </div>
  );
}
