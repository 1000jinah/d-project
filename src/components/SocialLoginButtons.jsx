import React from "react";
import { Box, Button, Stack, useTheme } from "@mui/material";
import { Apple, Google, FacebookRounded } from "@mui/icons-material";
function MarginBar() {
  return (
    <Box
      sx={{
        width: 20,
      }}
    />
  );
}
const SocialLoginButtons = () => {
  const theme = useTheme();
  return (
    <Stack direction="row" sx={{justifyContent: "center" }}>
      <Button
      variant="outlined"
      startIcon={<Apple />}
      sx={{
        background: "tranparent",
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
    <MarginBar/>
    <Button
      variant="outlined"
      startIcon={<Google />}
      sx={{
        background: "tranparent",
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

    <MarginBar/>
    <Button
      variant="outlined"
      startIcon={<FacebookRounded />}
      sx={{
        background: "tranparent",
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
