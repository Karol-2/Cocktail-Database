import React, { useState } from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

const Login = () => {
  const formularzyk = localStorage.getItem("konto")
    ? JSON.parse(localStorage.getItem("konto"))
    : {};
  const [konto, setKonto] = useState(formularzyk);

  function submitData(data) {
    localStorage.setItem(
      "konto",
      JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
        admin: true,
      })
    );
    setKonto(JSON.parse(localStorage.getItem("konto")));
  }

  return (
    <div>
      <div>
        <h1>Login</h1>
        <input placeholder="username" />
        <input placeholder="password" />
      </div>
      <div>
        <h1>Register</h1>
        <RegistrationForm submitData={(x) => submitData(x)} />
      </div>
    </div>
  );
};

export default Login;
