import React, { useState, useContext } from "react";
import { RefreshDatabaseContext } from "../../contexts/RefreshAPI";

function AddFromFile() {
  const [fileContent, setFileContent] = useState("");
  const [fileInput, setFileInput] = useState(null);
  const { refreshData, setRefreshData } = useContext(RefreshDatabaseContext);

  const sendData = (data) => {
    data.forEach((item) => {
      fetch("http://localhost:5000/drinks/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      })
        .then((res) => res.json())
        .then((response) => console.log(response))
        .then(setRefreshData(!refreshData))
        .catch((error) => alert("Error:", error));
    });
    alert("File's content added!");
  };

  const handleFileSelect = (e) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      setFileContent(event.target.result);
    };
    reader.readAsText(e.target.files[0]);
  };

  const handleClear = () => {
    setFileContent("");
    setFileInput(null);
    sendData(JSON.parse(fileContent));
  };

  return (
    <div className="container">
      <h4>You can add drink(s) via form or by putting json file here:</h4>
      <input
        type="file"
        onChange={handleFileSelect}
        ref={(ref) => setFileInput(ref)}
        className="form-control"
      />

      <button className="btn btn-danger" onClick={handleClear}>
        Add from file
      </button>
    </div>
  );
}
export default AddFromFile;
