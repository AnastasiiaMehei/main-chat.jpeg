// src/pages/LoginPage/LoginPage.jsx
import React from "react";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import PageTitle from "../../components/PageTitle/PageTitle";
import GoogleLoginButton from "../../components/GoogleLoginButton/GoogleLoginButton";
import FacebookLoginButton from "../../components/FacebookLoginButton/FacebookLoginButton";

export default function LoginPage() {
  return (
    <div>
      <PageTitle>Please log in</PageTitle>
      <LoginForm />
      <GoogleLoginButton />
      <FacebookLoginButton />
    </div>
  );
}
