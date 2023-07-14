import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";

import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Dashboard = () => {
  const [sidebarVisibile, setSidebarVisibile] = useState(false);

  const user = useSelector((state) => state.global.user);
  const isLoggedIn = useSelector((state) => state.global.isLoggedIn);
  if (!isLoggedIn) return <Navigate to="/login" replace />;

  return (
    <Box>
      <Sidebar
        user={user}
        sidebarVisibile={sidebarVisibile}
        setSidebarVisibile={setSidebarVisibile}
      />
      <Navbar
        user={user}
        sidebarVisibile={sidebarVisibile}
        setSidebarVisibile={setSidebarVisibile}
      />
      <Outlet />
    </Box>
  );
};

export default Dashboard;
