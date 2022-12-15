import React from "react";
import { useLocation } from "react-router-dom";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <div className="error-message">
      <h1>Error 404</h1>
      <h2>PAGE: "{useLocation().pathname.toUpperCase()}" NOT FOUND</h2>
    </div>
  );
};

export default NotFound;
