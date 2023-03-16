import React from "react";

import { Stack, Button } from "@mui/material";

export default function DefaultButton() {
  return (
    <Stack direction="column" spacing={2} mt="30px">
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#000000",
          color: "#fff",
          textTransform: "capitalize",
          fontWeight: "bold",
          fontSize: 16,
          p:"0.45rem", 
        // height: "22.5pt"
             }}
      >
        Sign in
      </Button>
      {/* <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons">
        Link
      </Button> */}
    </Stack>
  );
}
