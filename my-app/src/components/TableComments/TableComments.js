import React, { useState, useEffect } from "react";
import "../TableAdmin/TableAdmin.scss";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TableComments = () => {
  const [tableContent, setTableContent] = useState([]);
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/comments`);
        const data = await response.json();
        setTableContent(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [submit]);

  const handleDelete = async (id, drinkId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/comments/${drinkId}/${id}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();
      console.log("Success:", data);
      setTableContent(tableContent.filter((item) => item.Comments.id !== id));
    } catch (error) {
      console.error("Error:", error);
    }
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
                    Delete <FontAwesomeIcon icon={faTrash} />
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
