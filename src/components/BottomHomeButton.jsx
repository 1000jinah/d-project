import React from "react";
import { Link } from "react-router-dom";
import {
  Paper,
  useTheme,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";

export default function FixedBottomNavigation() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  return (
    <Paper
      theme={theme}
      sx={{
        display: "block",
        boxShadow: "none",
        backgroundColor: "transparent",
        position: "fixed",
        zIndex:"20001",
        bottom: "-15px",
        right: 0,
        "& .MuiSvgIcon-root":{
          color:"transparent"
        },
        "& .MuiBottomNavigation-root": {
          position: "relative",
          width: "100%",
          textAlign: "center",
          height: "50px",
        },
      }}
      elevation={3}
    >
      <BottomNavigation
        sx={{
          display: "block",
          backgroundColor: "transparent",
          width: "100%",
        }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          sx={{
            padding: "0px",
            minWidth: "20px",
            zIndex:"20000"
          }}
          // label="Home"
          icon={<RestoreIcon />}
          component={Link}
          to="/way"
        />
      </BottomNavigation>
    </Paper>
  );
}
