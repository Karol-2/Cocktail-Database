import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllAccounts, login } from "../../actions/adminActions";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./Login.scss";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [loginData, setLoginData] = useState({ login: "", password: "" });

  const allAccounts = useSelector((state) => state.allAccounts);

  useEffect(() => {
    dispatch(getAllAccounts());
  }, []);

  function submitData(data) {
    dispatch(getAllAccounts());

    dispatch(login(loginData.login, loginData.password));
    const isAccountInDb = allAccounts.some(
      (account) =>
        account.login === data.username && account.password === data.password
    );
    if (isAccountInDb) {
      console.log("Account found in db.");
      navigate("/admin");
    } else {
      console.log("Account not found in db.");
      setMessage("Bad data!");
    }
  }

  return (
    <div className="LoginPage">
      <div>
        <h4 style={{ margin: 10 }}>
          Please enter passes to access admin page.
        </h4>
        <div className="text-danger" style={{ textAlign: "center" }}>
          <h1>{message}</h1>
        </div>
        <LoginForm submitData={(x) => submitData(x)} />
      </div>
    </div>
  );
};

export default Login;
