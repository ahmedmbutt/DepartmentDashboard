import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const items = [
  {
    icon: <></>,
    label: "Attendance",
  },
  {
    icon: <></>,
    label: "Results",
  },
  {
    icon: <></>,
    label: "Notifications",
  },
];

const Sidebar = ({ user, sidebarVisibile, setSidebarVisibile }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    setActivePage(pathname.substring(1));
  }, [pathname]);

  return (
    <Box>
      {sidebarVisibile && (
        <Drawer
          open={sidebarVisibile}
          onClose={() => setSidebarVisibile(false)}
          variant="persistent"
          anchor="left"
        >
          <Box>
            <IconButton onClick={() => setSidebarVisibile(!sidebarVisibile)}>
              <ChevronLeft />
            </IconButton>
            <Avatar>{user.name.charAt(0)}</Avatar>
            <Typography variant="h5">{user.name}</Typography>
            <Divider />
          </Box>
          <List>
            {items.map(({ icon, label }, i) => (
              <ListItem key={i}>
                <ListItemButton
                  onClick={() => {
                    navigate(`/${label.toLowerCase()}`);
                  }}
                >
                  <ListItemText>{label}</ListItemText>
                  <ChevronRight />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      )}
    </Box>
  );
};

Sidebar.propTypes = {
  user: PropTypes.object.isRequired,
  sidebarVisibile: PropTypes.bool.isRequired,
  setSidebarVisibile: PropTypes.func.isRequired,
};

export default Sidebar;
