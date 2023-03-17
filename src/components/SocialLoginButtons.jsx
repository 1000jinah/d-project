import React from "react";
import { Box, Button, Stack, useTheme } from "@mui/material";
// git
import AppleIcon from "../assets/icon_apple.svg";
import GoogleIcon from "../assets/icon_google.svg";
import FacebookIcon from "../assets/icon_facebook.svg";

function MarginBar() {
  return (
    <Box
      sx={{
        width: 8,
      }}
    />
  );
}
const SocialLoginButtons = () => {
  const theme = useTheme();
  return (
    <Stack direction="row" sx={{ justifyContent: "center", m: "1.5rem 2rem" }}>
      <Button
        variant="outlined"
        startIcon={
          <img className="thumbnail" src={AppleIcon} alt="AppleIcon"></img>
        }
        sx={{
          p: "4px 8px",
          fontWeight: "bold",
          borderRadius: 0,
          background: "tranparent",
          textTransform: "inherit",
          color:
            theme === "dark"
              ? theme.palette.primary[200]
              : theme.palette.secondary[0],
          borderColor:
            theme === "dark"
              ? theme.palette.primary[450]
              : theme.palette.secondary[600],
        }}
      >
        Apple ID
      </Button>
      <MarginBar />
      <Button
        variant="outlined"
        startIcon={
          <img className="thumbnail" src={GoogleIcon} alt="GoogleIcon"></img>
        }
        sx={{
          p: "4px 8px",
          fontWeight: "bold",
          borderRadius: 0,
          background: "tranparent",
          textTransform: "inherit",
          color:
            theme === "dark"
              ? theme.palette.primary[200]
              : theme.palette.secondary[0],
          borderColor:
            theme === "dark"
              ? theme.palette.primary[450]
              : theme.palette.secondary[600],
        }}
      >
        Google
      </Button>

      <MarginBar />
      <Button
        variant="outlined"
        startIcon={
          <img
            className="thumbnail"
            src={FacebookIcon}
            alt="FacebookIcon"
          ></img>
        }
        sx={{
          p: "4px 8px",
          fontWeight: "bold",
          borderRadius: 0,
          background: "tranparent",
          textTransform: "inherit",
          color:
            theme === "dark"
              ? theme.palette.primary[200]
              : theme.palette.secondary[0],
          borderColor:
            theme === "dark"
              ? theme.palette.primary[450]
              : theme.palette.secondary[600],
        }}
      >
        Facebook
      </Button>
    </Stack>
  );
};

export default SocialLoginButtons;
