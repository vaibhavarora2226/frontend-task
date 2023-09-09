import React, { useState, useEffect } from "react";
import { TextField, Grid, Button, Tooltip, Snackbar, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CircularProgress } from "@mui/material";

function LoginComponent() {
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({
    username: null,
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
        <h1>Login </h1>
      </Grid>
      <Grid my={1}>
        <TextField
          style={{ width: "300px", color: "black" }}
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
          style={{ width: "300px", color: "black" }}
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
            {loader ? (
              <Box sx={{ display: "flex" }}>
                <CircularProgress size={32} />
              </Box>
            ) : (
              <Button
                variant="outlined"
                disabled={!loginDetails.username && !loginDetails.password}
                onClick={() => {
                  setLoder(true);
                  axios
                    .post("http://localhost:5000/login", {
                      ...loginDetails,
                    })
                    .then((res) => {
                      setLoder(false);
                      setSnack({
                        severity: "success",
                        message: "Login successfully",
                        open: true,
                      });
                      console.log(res);
                      const { token } = res.data;
                      localStorage.setItem("jwtToken", token);

                      navigate("/home");
                    })
                    .catch((err) => {
                      console.log(err);
                      setLoder(false);
                      setSnack({
                        severity: "error",
                        message:
                          err?.response?.data?.message ||
                          "Something went wrong",
                        open: true,
                      });
                    });
                }}
              >
                Login
              </Button>
            )}
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

export default LoginComponent;
