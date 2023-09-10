import React from "react";
import { AuthContextProvider } from "./hoc/AuthContext";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Home from "./components/Home/Home";
import AuthProtectedRoutes from "./hoc/AuthProtectedRoutes";

const App = () => {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <AuthProtectedRoutes>
              <Home />
            </AuthProtectedRoutes>
          }
        />
      </Routes>
    </AuthContextProvider>
  );
};

export default App;
