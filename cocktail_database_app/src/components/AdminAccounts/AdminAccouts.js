import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addAccount,
  deleteAccount,
  getAllAccounts,
} from "../../actions/adminActions";
import "./AdminAccounts.scss";

const AdminAccounts = () => {
  const [message, setMessage] = useState("");
  const [newAccountData, setNewAccountData] = useState({
    login: "",
    password: "",
  });
  const [accountToDelete, setAccountToDelete] = useState("");

  const dispatch = useDispatch();
  const allAccounts = useSelector((state) => state.allAccounts);

  const handleDeleteAccount = (e) => {
    e.preventDefault();
    if (accountToDelete) {
      dispatch(deleteAccount(accountToDelete));
      console.log(`Account ${accountToDelete} deleted`);
      setAccountToDelete("");
    }
    dispatch(getAllAccounts());
  };

  useEffect(() => {
    dispatch(getAllAccounts());
  }, []);

  const handleAddAccount = (e) => {
    e.preventDefault();
    if (
      newAccountData.login.length >= 3 &&
      newAccountData.password.length >= 3
    ) {
      dispatch(addAccount(newAccountData.login, newAccountData.password));
      dispatch(getAllAccounts());
    } else {
      setMessage("Login and password should have at least 3 characters");
    }
  };

  return (
    <div className="page">
      <div className="left-part">
        <div className="panel">
          <h2>Add new admin account</h2>
          <form className="form-group" onSubmit={handleAddAccount}>
            <label>New Login:</label>
            <input
              className="form-control"
              type="text"
              placeholder="New Login"
              value={newAccountData.login}
              onChange={(e) =>
                setNewAccountData({ ...newAccountData, login: e.target.value })
              }
            />
            <label>New Password:</label>
            <input
              className="form-control"
              type="password"
              placeholder="New Password"
              value={newAccountData.password}
              onChange={(e) =>
                setNewAccountData({
                  ...newAccountData,
                  password: e.target.value,
                })
              }
            />
            <div className="text-danger">{message}</div>
            <button className="btn btn-primary" type="submit">
              Add Account
            </button>
          </form>
        </div>
        <div className="panel">
          <h2>Delete existing account</h2>
          <form className="form-group" onSubmit={handleDeleteAccount}>
            <label>Login to delete:</label>
            <input
              className="form-control"
              type="text"
              placeholder="Login to delete"
              value={accountToDelete}
              onChange={(e) => setAccountToDelete(e.target.value)}
            />
            <button className="btn btn-danger" type="submit">
              Delete Account
            </button>
          </form>
        </div>
      </div>
      <div className="panel">
        <h2>All admin accounts</h2>
        <ol>
          {allAccounts &&
            allAccounts.map((account, key) => (
              <li key={key}>
                <h5>login: {account.login}</h5>
                <h6>password: {account.password}</h6>
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};

export default AdminAccounts;
