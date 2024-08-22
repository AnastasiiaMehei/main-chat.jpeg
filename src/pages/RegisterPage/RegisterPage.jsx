import React from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const RegisterPage = ({ onClose }) => {
  return (
    <div>
      <PageTitle title="Register your user chat" />
      <RegisterForm onClose={onClose} /> {/* Передано onClose */}
    </div>
  );
};

export default RegisterPage;
