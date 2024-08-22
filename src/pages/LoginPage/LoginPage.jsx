import React from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = ({ onClose }) => {
  return (
    <div>
      <PageTitle title="Please log in" />
      <LoginForm onClose={onClose} /> {/* Передано onClose */}
    </div>
  );
};

export default LoginPage;
