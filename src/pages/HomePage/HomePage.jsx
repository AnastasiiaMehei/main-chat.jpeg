import PageTitle from "../../components/PageTitle/PageTitle";
import { GiNotebook } from "react-icons/gi";
import css from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={css.div}>
      <PageTitle>User Chat</PageTitle>
      <GiNotebook size={55} />
      <p className={css.paragraph}>
        Welcome to the User Chat! <br /> Manage your Chats easily and securely.
      </p>
    </div>
  );
}
export default HomePage;
