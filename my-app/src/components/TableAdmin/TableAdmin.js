import React, { useState, useContext } from "react";
import "./TableAdmin.scss";
import { DrinkContext } from "../../contexts/DrinkBaseAPI";
import { RefreshDatabaseContext } from "../../contexts/RefreshAPI";
const TableAdmin = (data) => {
  const drinkBase = useContext(DrinkContext);
  const [tableContent, setTableContent] = useState(drinkBase);
  const { refreshData, setRefreshData } = useContext(RefreshDatabaseContext);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/drinks/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("Success:", json);
        setTableContent(tableContent.filter((item) => item._id !== id));
      })
      .then(setRefreshData(!refreshData))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <h2>Database Panel</h2>
      <h4>Number of drinks: {tableContent.length}</h4>
      <div className="main">
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tableContent.map((item, index) => (
              <tr key={index}>
                <td>{item.strDrink}</td>
                <td>{item._id}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableAdmin;
