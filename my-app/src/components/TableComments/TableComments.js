import React, { useState, useEffect } from "react";
import "../TableAdmin/TableAdmin.scss";

const TableComments = () => {
  const [tableContent, setTableContent] = useState([]);
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/comments`)
      .then((response) => response.json())
      .catch((error) => console.error(error))
      .then((data) => setTableContent(data));
  }, [submit]);

  const handleDelete = (id, drinkId) => {
    fetch(`http://localhost:5000/comments/${drinkId}/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("Success:", json);
        setTableContent(tableContent.filter((item) => item.Comments.id !== id));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <h2>Comments Panel</h2>
      <h4>Number of comments: {tableContent.length}</h4>
      <div className="main">
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th>User</th>
              <th>Comment</th>
              <th>Drink</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tableContent.map((item, index) => (
              <tr key={index}>
                <td>{item.Comments.name}</td>
                <td>{item.Comments.comment}</td>
                <td>{item.strDrink}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item.Comments.id, item._id)}
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

export default TableComments;
