import React, { useState } from "react";
import { Box, useTheme, Typography } from "@mui/material";
import DefaultButton from "components/DefaultButton";
import OAuth from "components/OAuth";
import EmailPassword from "components/EmailPassword";
import ConfirmPassword from "components/ConfimPassword";
import RememberPassword from "components/RememberPassword";
import Header from "components/Header";
import { Link } from "react-router-dom";

function Dashboard() {
  const theme = useTheme();
  const [showText, setShowText] = useState();
  return (
    <Box sx="width:100%" theme={theme}>
      <Box p="1.2rem 1.6rem">
        <Header
          title={showText ? "Hi!" : "Welcome!"}
          subtitle={showText ? "Create a new account" : "Log in to continue"}
        />
        <EmailPassword />

        {showText ? <ConfirmPassword /> : <RememberPassword />}
      </Box>
      <Box p="0px 1.6rem">
        <Link to="/introduce">
          <DefaultButton buttonName={showText ? "Sign in" : "Log in"} />
        </Link>
      </Box>{" "}
      <Box>
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column",
            height: "50px",
            color: theme.palette.secondary[500],
          }}
        >
          <Box>
            <Typography>
              Already have an account?
              <span
                style={{ color: "#fd3f01" }}
                onClick={() => setShowText(!showText)}
              >
                {showText ? " Log in" : " Sign in"}
              </span>
            </Typography>
          </Box>
        </Box>

        <OAuth />
      </Box>
    </Box>
  );
}
export default Dashboard;
