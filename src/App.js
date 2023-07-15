import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import "./app.css";
import Home from "./Components/Home";
import AuthRoute from "./Components/AuthRoute";

export const userLogged = createContext();
function App() {
  const userInfo = localStorage.getItem("login_activity");
  const parsedUserInfo = JSON.parse(userInfo);
  const [user, setUser] = useState(parsedUserInfo);

  const homePage = parsedUserInfo.active ? <Home /> : <Login />;
  const isAuthenticated = parsedUserInfo.active ? <Login /> : false;
  return (
    <userLogged.Provider value={{ user, setUser }}>
      <Routes>
        <AuthRoute path="/" isAuthenticated={isAuthenticated} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </userLogged.Provider>
  );
}

export default App;
