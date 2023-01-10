import React, { useEffect, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { DrinkContext } from "./ContexApi";
import AdminPanel from "./routes/AdminPanel/AdminPanel";
import Database from "./routes/Database/Database";
import DrinkDetails from "./routes/DrinkDetails/DrinkDetails";
import Home from "./routes/Home/Home";
import Login from "./routes/Login/Login";
import NotFound from "./routes/Notfound/Notfound";
import Stats from "./routes/Stats/Stats";
import "./styles/app.scss";

const App = () => {
  const [drinkBase, SetDrinkBase] = useState([]);
  const renderAfterCalled = useRef(false);

  useEffect(() => {
    fetch(`http://localhost:5000/drinks`)
      .then((response) => response.json())
      .catch((error) => console.error(error))
      .then((data) => SetDrinkBase(data));

    console.log("renderowanie");
    console.log(drinkBase);
    renderAfterCalled.current = true;
  }, []);

  return (
    <DrinkContext.Provider value={drinkBase}>
      <div className="app">
        <Navbar />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/database" element={<Database />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/drink/:id" element={<DrinkDetails />}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </DrinkContext.Provider>
  );
};

export default App;
