import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";
import "./AdminPanel.scss";

const AdminPanel = () => {
  const { keycloak, initialized } = useKeycloak();

  return (
    <div className='main'>
        { keycloak.authenticated && keycloak.hasRealmRole("admin") &&(
    <div className="main-page">
      <h1 >Welcome to the admin panel, <i>{keycloak.tokenParsed.preferred_username} </i>!</h1>
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
     )}

      
     </div>
  );
  
};

export default AdminPanel;
