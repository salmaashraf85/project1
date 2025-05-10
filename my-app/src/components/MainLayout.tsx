import React from "react";
import { CssBaseline, Container, Box } from "@mui/material";
import Sidebar from "./sideBar";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <Box sx={{ display: 'flex' }}> 
      <CssBaseline />
      <Box sx={{borderRadius:'10px'}}>
      <Sidebar />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginLeft: '50px', 
        }}
      >
         <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;