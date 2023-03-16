import React from "react";
import SocialLoginButtons from "../components/SocialLoginButtons";
import { Typography, useTheme, Box } from "@mui/material";

const OAuth = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        textAlign: "center",
        display: "flex",
        justifyContent: "space-around",
        height: "240px",
        flexDirection: "column",
        color: theme.palette.secondary[500],
      }}
    >
      <Box m="1.5rem 2rem 2rem 3rem">
        <Typography>
          Already have an account?
          <span style={{ color: "#fd3f01" }}> Log in</span>
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="span"
          className="hrSection"
          sx={{
            "::before, ::after": {
              background: theme.palette.secondary[500],
            },
          }}
        >
          Or via social media
        </Typography>
      </Box>
      <SocialLoginButtons />
    </Box>
  );
};

export default OAuth;
