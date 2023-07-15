import { Box, Stack } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Rightbar from "./Rightbar";

const Home = () => {
  return (
    <>
      <Box>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </>
  );
};

export default Home;
