import React, { useState } from "react";
import { TextField, Grid, Button, Tooltip } from "@mui/material";
import banner from "./Businessman-amico.png";
function BannerComponent() {
  return (
    <Grid
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Grid
        item
        xs={4}
        style={{ backgroundColor: "#fadeff", height: "100%" }}
      ></Grid>
      <Grid
        item
        xs={6}
        style={{
          background: `url(${banner})`,
          height: "110%",
          backgroundRepeat: "round",
          backgroundColor: "#fadeff",
        }}
      ></Grid>
    </Grid>
  );
}

export default BannerComponent;
