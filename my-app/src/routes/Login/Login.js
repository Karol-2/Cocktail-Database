import React, { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "./Login.scss";
import NewBarChart from "../../components/NewBarChart/NewBarChart";

const Login = () => {
  function submitData(data) {
    if (data.password === "admin" && data.username === "admin") {
      setIsDataValid(true);
    } else {
      alert("Bad data!");
    }
  }
  const [isDataValid, setIsDataValid] = useState(false);
  return (
    <div className="LoginPage">
      <div>
        <h1>Login</h1>
        <h5>Please enter our secret passes to login,</h5>
        <h5> (you will defenitely NOT find it in a footer section!) </h5>
        <FontAwesomeIcon icon={faCoffee} size="6x" />
      </div>

      <LoginForm submitData={(x) => submitData(x)} />
      {isDataValid && (
        <button
          onClick={() => (window.location.href = "http://localhost:3000/admin")}
        >
          Go to Admin
        </button>
      )}
    </div>
  );
};

export default Login;
