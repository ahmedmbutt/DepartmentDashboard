import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { ArrowDropDown, Menu as MenuIcon } from "@mui/icons-material";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setIsLoggedIn } from "state";
import { useNavigate } from "react-router-dom";

const Navbar = ({ user, sidebarVisibile, setSidebarVisibile }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const logout = () => {
    dispatch(setIsLoggedIn());
    navigate("/login");
  };

  return (
    <AppBar>
      <Toolbar>
        <IconButton
          onClick={() => {
            setSidebarVisibile(!sidebarVisibile);
          }}
        >
          <MenuIcon />
        </IconButton>
        <Button onClick={handleClick}>
          <Avatar>{user.name.charAt(0)}</Avatar>
          <Typography variant="h4">{user.name}</Typography>
          <ArrowDropDown />
        </Button>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={logout}>Log Out</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  user: PropTypes.object.isRequired,
  sidebarVisibile: PropTypes.bool.isRequired,
  setSidebarVisibile: PropTypes.func.isRequired,
};

export default Navbar;
