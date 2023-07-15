import { Mail, Notifications } from "@mui/icons-material";
import InterestsIcon from "@mui/icons-material/Interests";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import React, { useContext, useState } from "react";
import { userLogged } from "../App";
import { useNavigate } from "react-router-dom";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: "10px",
  padding: "0 10px",
  width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({
  padding: "0 10px",
  color: "white",
  display: "none",
  gap: "20px",
  cursor: "pointer",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  padding: "0 10px",
  color: "white",
  display: "flex",
  gap: "20px",
  cursor: "pointer",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user } = useContext(userLogged);
  const firstName = user.name.split(" ")[0];
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("login_activity");
    navigate("/");
  };
  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          YOME
        </Typography>
        <InterestsIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search..."></InputBase>
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            onClick={() => setOpen(true)}
            sx={{ bgcolor: deepOrange[500], width: 30, height: 30 }}
          >
            {firstName.charAt(0)}
          </Avatar>
        </Icons>
        <UserBox onClick={() => setOpen(true)}>
          <Avatar sx={{ bgcolor: deepOrange[500], width: 30, height: 30 }}>
            {firstName.charAt(0)}
          </Avatar>
          <Typography variant="span">{firstName}</Typography>
        </UserBox>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem onClick={handleLogOut}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
