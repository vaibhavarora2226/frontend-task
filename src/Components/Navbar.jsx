import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import { Container } from "@mui/system";
import CustomButton from "./CustomButton";
import { TextField, Grid, Button, Tooltip } from "@mui/material";
import axios from "axios";

import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { useState } from "react";
import { LinkOffTwoTone } from "@mui/icons-material";

export const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState({
    left: false,
  });
  const [open, setOpen] = useState(false);
  const [Details, setDetails] = useState({
    username: null,
    email: null,
    phonenumber: null,
    password: null,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.type === "Tab" || event.type === "Shift")
    ) {
      return;
    }

    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home", "Features", "Services", "Listed", "Contact"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 && <HomeIcon />}
                  {index === 1 && <FeaturedPlayListIcon />}
                  {index === 2 && <MiscellaneousServicesIcon />}
                  {index === 3 && <ListAltIcon />}
                  {index === 4 && <ContactsIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  const NavLink = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    color: "#4F5361",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      color: "#A3BDFF",
    },
  }));

  const NavbarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  const NavbarContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
    },
  }));

  return (
    <NavbarContainer>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CustomMenuIcon onClick={toggleDrawer("left", true)} />
          <Drawer
            anchor="left"
            open={mobileMenu["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
        </Box>

        <NavbarLinksBox>
          <NavLink variant="body2">Home</NavLink>
          <NavLink variant="body2">Features</NavLink>
          <NavLink variant="body2">Services</NavLink>
          <NavLink variant="body2">Listed</NavLink>
          <NavLink variant="body2">Contact</NavLink>
        </NavbarLinksBox>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <NavLink
          onClick={() => {
            setOpen(true);
          }}
          variant="body2"
        >
          Reset Password
        </NavLink>
        <CustomButton
          backgroundColor="#0F1B4C"
          color="#fff"
          buttonText="LogOut"
        />
      </Box>

      <Dialog
        sx={{ "& .MuiDialog-paper": { width: "80%", maxHeight: 435 } }}
        maxWidth="xs"
        onClose={() => {
          setOpen(false);
        }}
        open={open}
      >
        <DialogTitle>Reset Password</DialogTitle>

        <DialogContent>
          <Grid
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid my={1}>
              <TextField
                style={{ width: "400px" }}
                variant="outlined"
                value={Details.email}
                label={"email"}
                onChange={(e) => {
                  setDetails({
                    ...Details,
                    email: e.target.value,
                  });
                }}
              />
            </Grid>
            <Grid my={1}>
              <TextField
                style={{ width: "400px" }}
                variant="outlined"
                value={Details.phonenumber}
                label={"number"}
                onChange={(e) => {
                  setDetails({
                    ...Details,
                    phonenumber: e.target.value,
                  });
                }}
              />
            </Grid>
            <Grid my={1}>
              <TextField
                style={{ width: "400px" }}
                variant="outlined"
                value={Details.username}
                label={"username"}
                onChange={(e) => {
                  setDetails({
                    ...Details,
                    username: e.target.value,
                  });
                }}
              />
            </Grid>
            <Grid my={1}>
              <TextField
                style={{ width: "400px" }}
                variant="outlined"
                value={Details.password}
                label={"password"}
                onChange={(e) => {
                  setDetails({
                    ...Details,
                    password: e.target.value,
                  });
                }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={() => {
              axios
                .post("http://localhost:5000/reset-password", {
                  ...Details,
                })
                .then((res) => {
                  console.log(res);
                  setOpen(false);
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </NavbarContainer>
  );
};

export default Navbar;
