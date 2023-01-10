import React, { useContext } from "react";
import { DrinkContext } from "../../ContexApi";
import TableAdmin from "../../components/TableAdmin/TableAdmin";

const AdminPanel = () => {
  const drinkBase = useContext(DrinkContext);

  return (
    <div className="main-page">
      <h1>Drink in the database: </h1>
      <TableAdmin data={drinkBase} />
    </div>
  );
};

export default AdminPanel;
