import LoginComponent from "../Components/LoginComponent";
import "../App.css";
import BannerComponent from "../Components/BannerComponent";
import { Grid, Box } from "@mui/material";
function LoginPage() {
  const width = window.innerWidth;
  return (
    <Grid style={{ height: "100vh", display: "flex" }}>
      {width > 900 ? (
        <Grid style={{ height: "100%", width: "40%" }}>
          <BannerComponent />
        </Grid>
      ) : (
        <></>
      )}

      <Grid
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#ffffff",
        }}
      >
        <LoginComponent />
      </Grid>
    </Grid>
  );
}

export default LoginPage;
