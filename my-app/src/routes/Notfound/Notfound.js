import React from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Error</h1>
      <h1>Nie znaleziono elementu: {useLocation().pathname}</h1>
    </div>
  );
};

export default NotFound;
