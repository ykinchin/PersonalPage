import React from "react";
import Login from "../../components/Auth/Login";

import AuthLayout from "./AuthLayout";

const LoginPage = () => {
  return (
    <AuthLayout>
      <Login />
    </AuthLayout>
  );
};

export default LoginPage;
