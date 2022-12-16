import React from "react";
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

const App = () => {
  return (
    <div className="app">
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
    </div>
  );
};

export default App;
