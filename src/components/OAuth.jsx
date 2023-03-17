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
        height: "180px",
        flexDirection: "column",
        color: theme.palette.secondary[500],
      }}
    >

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
