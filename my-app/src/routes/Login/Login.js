import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "./Login.scss";

const Login = () => {
  function submitData(data) {
    if (data.password === "admin" && data.username === "admin")
      alert("Good data entered");
    else alert("Bad data!");
  }

  return (
    <div className="LoginPage">
      <div>
        <h1>Login</h1>
        <h5>Please enter our secret passes to login,</h5>
        <h5> (you will defenitely NOT find it in a footer section!) </h5>
        <FontAwesomeIcon icon={faCoffee} size="6x" />
      </div>

      <LoginForm submitData={(x) => submitData(x)} />
    </div>
  );
};

export default Login;
