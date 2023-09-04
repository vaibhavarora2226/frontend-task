import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import "./App.css";
import { Grid, Box } from "@mui/material";
import WelcomePage from "./mainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/signup"} element={<SignUpPage />} />
        <Route path={"/"} element={<LoginPage />} />
        <Route path={"/main"} element={<WelcomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
