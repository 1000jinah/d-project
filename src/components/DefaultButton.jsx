import React from "react";

import { Button, useTheme } from "@mui/material";

export default function DefaultButton({ buttonName}) {
  const theme = useTheme();

  return (
    <Button
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
        minWidth: "100%",
      }}
    >
      {buttonName}
    </Button>
  );
}
