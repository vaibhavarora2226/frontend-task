import React, { useState, useEffect } from "react";
import { TextField, Grid, Button, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { io } from "socket.io-client";

function LoginComponent() {
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({
    username: null,
    password: null,
  });
  return (
    <Grid
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid>
        <h1>Login </h1>
      </Grid>
      <Grid my={1}>
        <TextField
          style={{ width: "400px", color: "black" }}
          variant="outlined"
          value={loginDetails.username}
          label={"username"}
          onChange={(e) => {
            setLoginDetails({
              ...loginDetails,
              username: e.target.value,
            });
          }}
        />
      </Grid>
      <Grid my={1}>
        <TextField
          style={{ width: "400px", color: "black" }}
          variant="outlined"
          value={loginDetails.password}
          label={"password"}
          onChange={(e) => {
            setLoginDetails({
              ...loginDetails,
              password: e.target.value,
            });
          }}
        />
      </Grid>
      <Grid my={2}>
        <Tooltip
          placement="bottom"
          title={
            !loginDetails.username && !loginDetails.password
              ? "Please enter username password"
              : ""
          }
        >
          <span>
            <Button
              variant="outlined"
              disabled={!loginDetails.username && !loginDetails.password}
              onClick={() => {
                axios
                  .post("http://localhost:5000/login", {
                    ...loginDetails,
                  })
                  .then((res) => {
                    console.log(res);
                    const { token } = res.data;
                    localStorage.setItem("jwtToken", token);
                    navigate("/home");
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              Login
            </Button>
          </span>
        </Tooltip>
      </Grid>
      <Grid>
        <Button
          style={{ color: "black" }}
          // color={{"#E6F0FF"}}
          variant="text"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Register or Sign up
        </Button>
      </Grid>
    </Grid>
  );
}

export default LoginComponent;
