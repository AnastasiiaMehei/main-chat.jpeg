// RegisterPage.jsx
import React from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const RegisterPage = () => {
  return (
    <div>
      <PageTitle title="Register your user chat" />
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
