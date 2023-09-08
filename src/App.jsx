import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Page/LoginPage";
import SignUpPage from "./Page/SignUpPage";
import "./App.css";
import { Grid, Box } from "@mui/material";
import HomePage from "./Page/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/signup"} element={<SignUpPage />} />
        <Route path={"/"} element={<LoginPage />} />
        <Route path={"/home"} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
