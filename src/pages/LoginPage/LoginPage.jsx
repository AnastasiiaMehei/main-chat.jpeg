import { LoginForm } from "../../components/LoginForm/LoginForm"; // Adjusted import statement
import PageTitle from "../../components/PageTitle/PageTitle";

export default function LoginPage() {
  return (
    <div>
      <PageTitle>Please log in</PageTitle>
      <LoginForm />
    </div>
  );
}
