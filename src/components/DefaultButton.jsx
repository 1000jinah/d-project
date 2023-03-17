import React from "react";

import { Stack, Button, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
export default function DefaultButton({ buttonName }) {
  const theme = useTheme();
  return (
    <Stack direction="column" spacing={2}>
      <Button
        component={Link}
        to="/introduce/first"
        variant="contained"
        sx={{
          borderRadius: 0,
          backgroundColor:
            theme === "dark"
              ? theme.palette.secondary[1000]
              : theme.palette.secondary[0],
          color:
            theme === "dark"
              ? theme.palette.primary[0]
              : theme.palette.primary[1000],
          textTransform: "inherit",
          fontWeight: "bold",
          fontSize: 16,
          p: "0.45rem",
        }}
      >
        {buttonName}
      </Button>
    </Stack>
  );
}
