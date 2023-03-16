import React from "react";
import { Box, useTheme } from "@mui/material";
import Header from "components/Header";
import ComposedTextField from "components/InputBase";
import DefaultButton from "components/DefaultButton";
import OAuth from "components/OAuth";

function Dashboard() {
  const theme = useTheme();
  return (
    <Box sx="width:100%" theme={theme}>
      <Box m="1.5rem 2rem">
        <Header />
        <ComposedTextField />
        <DefaultButton />
      </Box>
      <OAuth />
    </Box>
  );
}
export default Dashboard;
