import React, { useState } from "react";
import { TextField, Grid, Button, Tooltip, Snackbar, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CircularProgress } from "@mui/material";
function SignUpComponent() {
  const navigate = useNavigate();
  const [signUpDetails, setSignUpDetails] = useState({
    username: null,
    email: null,
    phonenumber: null,
    password: null,
  });
  const [snack, setSnack] = useState({
    message: null,
    severity: null,
    open: false,
  });
  const [loader, setLoder] = useState(false);
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
          style={{ width: "300px" }}
          variant="outlined"
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
          style={{ width: "300px" }}
          variant="outlined"
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
          style={{ width: "300px" }}
          variant="outlined"
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
          style={{ width: "300px" }}
          variant="outlined"
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
            {loader ? (
              <Box sx={{ display: "flex" }}>
                <CircularProgress size={32} />
              </Box>
            ) : (
              <Button
                variant="outlined"
                disabled={!signUpDetails.username && !signUpDetails.password}
                onClick={() => {
                  setLoder(true);
                  axios
                    .post("http://localhost:5000/signup", {
                      ...signUpDetails,
                    })
                    .then((res) => {
                      setLoder(false);
                      setSnack({
                        severity: "success",
                        message: "Signup successfully",
                        open: true,
                      });
                      console.log(res);
                      const { token } = res.data;
                      localStorage.setItem("jwtToken", token);
                      navigate("/home");
                    })
                    .catch((err) => {
                      setLoder(false);
                      setSnack({
                        severity: "error",
                        message:
                          err?.response?.data?.message ||
                          "Something went wrong",
                        open: true,
                      });
                      console.log(err);
                    });
                }}
              >
                Sign Up
              </Button>
            )}
          </span>
        </Tooltip>
      </Grid>
      <Grid>
        <Button
          style={{ color: "black" }}
          variant="text"
          onClick={() => {
            navigate("/");
          }}
        >
          Login
        </Button>
      </Grid>
      <Box sx={{ width: 500 }}>
        <Snackbar
          open={snack.open}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          autoHideDuration={6000}
          onClose={() => {
            setSnack({
              open: false,
              message: null,
              severityL: null,
            });
          }}
        >
          <Button
            onClick={() => {
              setSnack({
                open: false,
                message: null,
                severityL: null,
              });
            }}
            variant="contained"
            color={snack.severity}
            sx={{ width: "100%" }}
          >
            {snack.message}
          </Button>
        </Snackbar>
      </Box>
    </Grid>
  );
}

export default SignUpComponent;
