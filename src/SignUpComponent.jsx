import React, { useState } from "react";
import { TextField, Grid, Button, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function SignUpComponent() {
  const navigate = useNavigate();
  const [signUpDetails, setSignUpDetails] = useState({
    username: null,
    email: null,
    phonenumber: null,
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
        <h1>Sign Up </h1>
      </Grid>
      <Grid my={1}>
        <TextField
          style={{ width: "400px" }}
          variant="outlined"
          color="secondary"
          value={signUpDetails.email}
          label={"email"}
          onChange={(e) => {
            setSignUpDetails({
              ...signUpDetails,
              email: e.target.value,
            });
          }}
        />
      </Grid>
      <Grid my={1}>
        <TextField
          style={{ width: "400px" }}
          variant="outlined"
          color="secondary"
          value={signUpDetails.phonenumber}
          label={"number"}
          onChange={(e) => {
            setSignUpDetails({
              ...signUpDetails,
              phonenumber: e.target.value,
            });
          }}
        />
      </Grid>
      <Grid my={1}>
        <TextField
          style={{ width: "400px" }}
          variant="outlined"
          color="secondary"
          value={signUpDetails.username}
          label={"username"}
          onChange={(e) => {
            setSignUpDetails({
              ...signUpDetails,
              username: e.target.value,
            });
          }}
        />
      </Grid>
      <Grid my={1}>
        <TextField
          style={{ width: "400px" }}
          variant="outlined"
          color="secondary"
          value={signUpDetails.password}
          label={"password"}
          onChange={(e) => {
            setSignUpDetails({
              ...signUpDetails,
              password: e.target.value,
            });
          }}
        />
      </Grid>
      <Grid my={2}>
        <Tooltip
          placement="bottom"
          title={
            !signUpDetails.username && !signUpDetails.password
              ? "Please enter username password"
              : ""
          }
        >
          <span>
            <Button
              color="secondary"
              variant="outlined"
              disabled={!signUpDetails.username && !signUpDetails.password}
              onClick={() => {
                axios
                  .post("http://localhost:5000/signup", {
                    ...signUpDetails,
                  })
                  .then((res) => {
                    console.log(res);
                    navigate("/main");
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              Sign Up
            </Button>
          </span>
        </Tooltip>
      </Grid>
      <Grid>
        <Button
          color="secondary"
          variant="text"
          onClick={() => {
            navigate("/");
          }}
        >
          Login
        </Button>
      </Grid>
    </Grid>
  );
}

export default SignUpComponent;
