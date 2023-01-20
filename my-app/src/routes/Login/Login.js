import React, { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import { Link } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const [message, setMessage] = useState("");
  const [isDataValid, setIsDataValid] = useState(false);

  function submitData(data) {
    if (data.password === "admin" && data.username === "admin") {
      setIsDataValid(true);
    } else {
      setMessage("Bad data!");
    }
  }

  return (
    <div className="LoginPage">
      {!isDataValid && (
        <div>
          <h4>Please enter our secret passes to access admin page,</h4>
          <h5> (you will defenitely NOT find it in a footer section!) </h5>
          <div className="text-danger" style={{ textAlign: "center" }}>
            <h1>{message}</h1>
          </div>
          <LoginForm submitData={(x) => submitData(x)} />
        </div>
      )}
      {isDataValid && (
        <div className="LoginPage">
          <h1>You are clearly an admin, now you have access to admin panel</h1>
          <Link to="/admin" className="btn btn-info">
            Go to Admin panel
          </Link>
        </div>
      )}
    </div>
  );
};

export default Login;
