import React from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

const Login = () => {
  return (
    <div>
      <div>
        <h1>Login</h1>
        <input placeholder="username" />
        <input placeholder="password" />
      </div>
      <div>
        <h1>Register</h1>
        <RegistrationForm />
      </div>
    </div>
  );
};

export default Login;
