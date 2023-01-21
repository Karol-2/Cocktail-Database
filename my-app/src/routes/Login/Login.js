import React, { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import { Link } from "react-router-dom";
import "./Login.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, getAllAccounts } from "../../actions/adminActions";
import { useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [loginData, setLoginData] = useState({ login: "", password: "" });
  const [isDataValid, setIsDataValid] = useState(false);

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
      setIsDataValid(true);
    } else {
      console.log("Account not found in db.");
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
