import React, { useState, useContext } from "react";
import { RefreshDatabaseContext } from "../../contexts/RefreshAPI";
import ValidateObject from "./ObjectsValidation";

function AddFromFile() {
  const [message, setMessage] = useState("");
  const [fileContent, setFileContent] = useState("");
  const [fileInput, setFileInput] = useState(null);
  const { refreshData, setRefreshData } = useContext(RefreshDatabaseContext);

  const sendData = async (data) => {
    if (!data.every(ValidateObject)) {
      setMessage("Data is not valid");
      return;
    }
    const requests = data.map((item) =>
      fetch("http://localhost:5000/drinks/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      })
    );

    try {
      const responses = await Promise.all(requests);
      let duplicateDrink = "";
      responses.forEach((response) => {
        if (response.status === 400) {
          duplicateDrink = response.json().then((res) => res.drinkName);
        }
      });
      if (duplicateDrink) {
        setMessage(
          `At least, one of drinks is already in the database, added remaining`
        );
      } else {
        console.log(responses);
        setRefreshData(!refreshData);
        setMessage("File's content added!");
        setTimeout(() => {
          setMessage("");
        }, 2000);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleFileSelect = (e) => {
    if (e.target.files[0].type !== "application/json") {
      setMessage("File must be in JSON format");
      setFileInput(null);
      setFileContent("");
      return;
    }
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
      <h4>You can add drink(s) by putting json file here:</h4>
      <input
        type="file"
        onChange={handleFileSelect}
        ref={(ref) => setFileInput(ref)}
        className="form-control"
      />
      <button className="btn btn-danger" onClick={handleClear}>
        Add from file
      </button>
      {message !== "File's content added!" && (
        <div className="text-danger">
          <h3>{message}</h3>
        </div>
      )}{" "}
      {message === "File's content added!" && (
        <div className="text-success">
          <h3>{message}</h3>
        </div>
      )}
    </div>
  );
}
export default AddFromFile;
