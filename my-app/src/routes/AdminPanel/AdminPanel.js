import React, { useContext } from "react";
import { DrinkContext } from "../../ContexApi";
import { Link, Outlet } from "react-router-dom";
import "./AdminPanel.scss";

const AdminPanel = () => {
  const drinkBase = useContext(DrinkContext);

  return (
    <div className="main-page">
      <div className="panels">
        <button className="btn btn-success">
          <Link to="/admin/comments" className="custom-link">
            COMMENTS PANEL
          </Link>
        </button>
        <button className="btn btn-primary">
          <Link to="/admin/database" className="custom-link">
            DATABASE PANEL
          </Link>
        </button>
        <button className="btn btn-danger">
          <Link to="/admin/database-add" className="custom-link">
            ADD DRINK
          </Link>
        </button>
        <button className="btn btn-warning">
          <Link to="/admin/database-edit" className="custom-link">
            EDIT DRINK
          </Link>
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default AdminPanel;
