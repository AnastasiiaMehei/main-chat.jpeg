// LoginPage.jsx
import React from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import LoginForm from "../../components/LoginForm/LoginForm";
import GoogleLoginButton from "../../components/GoogleLoginButton/GoogleLoginButton";
import FacebookLoginButton from "../../components/FacebookLoginButton/FacebookLoginButton";

const LoginPage = () => {
  return (
    <div>
      <PageTitle title="Please log in" />
      <LoginForm />
      <GoogleLoginButton />
      <FacebookLoginButton />
    </div>
  );
};

export default LoginPage;
