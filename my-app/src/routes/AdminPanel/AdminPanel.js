import React, { useContext } from "react";
import { DrinkContext } from "../../ContexApi";
import { Link, Outlet } from "react-router-dom";
import "./AdminPanel.scss";

const AdminPanel = () => {
  const drinkBase = useContext(DrinkContext);

  return (
    <div className="main-page">
      <div className="panels">
        <Link to="/admin/comments">COMMENTS PANEL</Link>
        <Link to="/admin/database">DATABASE PANEL</Link>
        <Link to="/admin/database-add">ADD DRINK</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default AdminPanel;
