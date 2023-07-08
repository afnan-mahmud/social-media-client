import { Box, Stack } from "@mui/material";
import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Feed from "./Components/Feed";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Register from "./Components/Register";
import Rightbar from "./Components/Rightbar";
import Sidebar from "./Components/Sidebar";
import "./app.css";

export const userLogged = createContext();
function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    active: false,
  });
  console.log(user);

  const homePage = user.active ? (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  ) : (
    <Login />
  );
  return (
    <userLogged.Provider value={{ user, setUser }}>
      <Routes>
        <Route path="/" element={homePage} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </userLogged.Provider>
  );
}

export default App;
