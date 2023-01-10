import React, { useState, useContext } from "react";
import "./TableAdmin.scss";
import { DrinkContext } from "../../ContexApi";

const TableAdmin = (data) => {
  const drinkBase = useContext(DrinkContext);
  const [tableContent, setTableContent] = useState(drinkBase);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/drinks/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("Success:", json);
        setTableContent(tableContent.filter((item) => item._id !== id));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="main">
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableContent.map((item, index) => (
            <tr key={index}>
              <td>{item.strDrink}</td>
              <td>{item._id}</td>
              <td>
                <button
                  onClick={() => alert("Button clicked!")}
                  className="btn btn-success"
                >
                  Edit
                </button>

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
      <div className="edit-part">Formularz</div>
    </div>
  );
};

export default TableAdmin;
