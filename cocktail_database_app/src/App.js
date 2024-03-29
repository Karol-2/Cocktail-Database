import React, { useContext, useLayoutEffect, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import DrinkAddForm from "./components/DrinkAddForm/DrinkAddForm";
import DrinkEditForm from "./components/DrinkEditForm/DrinkEditForm";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import TableAdmin from "./components/TableAdmin/TableAdmin";
import TableComments from "./components/TableComments/TableComments";
import { DrinkContext } from "./contexts/DrinkBaseAPI";
import { RefreshDatabaseContext } from "./contexts/RefreshAPI";
import AdminPanel from "./routes/AdminPanel/AdminPanel";
import Database from "./routes/Database/Database";
import DrinkDetails from "./routes/DrinkDetails/DrinkDetails";
import Home from "./routes/Home/Home";
import NotFound from "./routes/Notfound/Notfound";
import Stats from "./routes/Stats/Stats";
import "./styles/app.scss";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./Keycloak";
import PrivateRoute from "./helpers/PrivateRoute";

const App = () => {
  const [drinkBase, SetDrinkBase] = useState(
    useContext(RefreshDatabaseContext)
  );
  const [refreshData, setRefreshData] = useState(false);
  const renderAfterCalled = useRef(false);

  useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/drinks`);
        const data = await response.json();
        SetDrinkBase(data);
        renderAfterCalled.current = true;
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [refreshData]);

  return (
    <ReactKeycloakProvider authClient={keycloak} initOptions={{pkceMethod:"S256"}}>
      <DrinkContext.Provider value={drinkBase}>
        <RefreshDatabaseContext.Provider
          value={{ refreshData, setRefreshData }}
        >
          <div className="app">
            <Navbar />
            <div className="page-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/database" element={<PrivateRoute ><Database /></PrivateRoute>}/>
                <Route path="/stats" element={<PrivateRoute><Stats /></PrivateRoute>} />
                <Route path="/drink/:id" element={<PrivateRoute><DrinkDetails /></PrivateRoute>}></Route>
                <Route path="/admin" element={<AdminPanel />}>
                  <Route path="/admin/comments" element={<TableComments />} />
                  <Route path="/admin/database" element={<TableAdmin />} />
                  <Route
                    path="/admin/database-add"
                    element={<DrinkAddForm />}
                  />
                  <Route
                    path="/admin/database-edit"
                    element={<DrinkEditForm />}
                  />
                  
                </Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </RefreshDatabaseContext.Provider>
      </DrinkContext.Provider>
    </ReactKeycloakProvider>
  );
};

export default App;
