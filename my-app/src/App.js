import React from "react";
import { useEffect, useState, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/app.scss";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./routes/Home/Home";
import Database from "./routes/Database/Database";
import Stats from "./routes/Stats/Stats";
import Login from "./routes/Login/Login";
import NotFound from "./routes/Notfound/Notfound";
import DrinkDetails from "./routes/DrinkDetails/DrinkDetails";
import { DrinkContext } from "./ContexApi";
import selected_drinks from "./routes/Database/DatabaseSelectedDrinks";

const App = () => {
  const [drinkBase, SetDrinkBase] = useState([]);
  const renderAfterCalled = useRef(false);

  useEffect(() => {
    if (!renderAfterCalled.current) {
      selected_drinks.forEach((drink) =>
        fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink}`
        )
          .then((response) => response.json())
          .then((data) =>
            SetDrinkBase((old_drinks) => [...old_drinks, data.drinks[0]]).sort()
          )
      );
    }
    renderAfterCalled.current = true;
  }, []);

  return (
    <div className="app">
      <DrinkContext.Provider value={drinkBase}>
        <Navbar />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/database" element={<Database />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/login" element={<Login />} />
            <Route path="/drink/:id" element={<DrinkDetails />}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </DrinkContext.Provider>
    </div>
  );
};

export default App;
