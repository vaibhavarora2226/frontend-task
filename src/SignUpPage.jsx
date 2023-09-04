import SignUpComponent from "./SignUpComponent";
import "./App.css";
import BannerComponent from "./BannerComponent";
import { Grid, Box } from "@mui/material";
function SignUpPage() {
  return (
    <Grid style={{ height: "100vh", display: "flex" }}>
      <Grid xs={4} style={{ height: "100%", width: "40%" }}>
        <BannerComponent />
      </Grid>
      <Grid
        xs={8}
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <SignUpComponent />
      </Grid>
    </Grid>
  );
}

export default SignUpPage;
