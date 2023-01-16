import React, { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./Login.scss";

const Login = () => {
  function submitData(data) {
    if (data.password === "admin" && data.username === "admin") {
      setIsDataValid(true);
      alert("You are an admin!");
    } else {
      alert("Bad data!");
    }
  }
  const [isDataValid, setIsDataValid] = useState(false);
  return (
    <div className="LoginPage">
      <div>
        <h1>Login</h1>
        <h4>Please enter our secret passes to access admin page,</h4>
        <h5> (you will defenitely NOT find it in a footer section!) </h5>
      </div>

      <LoginForm submitData={(x) => submitData(x)} />
      {isDataValid && (
        <div className="LoginPage">
          <button
            className="btn btn-info"
            onClick={() =>
              (window.location.href = "http://localhost:3000/admin")
            }
          >
            Go to Admin panel
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
