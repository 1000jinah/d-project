import * as React from "react";
import Box from "@mui/material/Box";

import Checkbox from "@mui/material/Checkbox"; 
import { FormGroup, FormControlLabel, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import FlexBetween from "./FlexBetween";
import unCheckRadioIcon from "../assets/btn_radiobutton_login_unselect.svg"
import CheckRadioIcon from "../assets/btn_radiobutton_login_selected.svg"

function MarginBar() {
  return (
    <Box
      sx={{
        height: 20,
      }}
    />
  );
}
export default function RememberPassword() {
  const theme = useTheme();

  return (
    <Box
      m={"0"}
      mb="30px"
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        "& .MuiTextField-root": {
          width: "25ch",
          color: theme.palette.primary[1000],
        },
        "& .MuiFormLabel-root:before": {
          color: theme.palette.primary[1000],
        },
        "& .MuiInput-root:after": {
          borderBottomColor:
            theme === "dark"
              ? theme.palette.primary[900]
              : theme.palette.secondary[0],
        },
        "& .MuiButtonBase-root.MuiCheckbox-root.Mui-checked": {
          color:
            theme === "dark"
              ? theme.palette.primary[900]
              : theme.palette.secondary[0],
        },
        "&  .MuiFormControlLabel-root .MuiFormControlLabel-label": {
          color: theme.palette.secondary[500],
        },
        "& .MuiTypography-root": {
          color: theme.palette.secondary[500],
        },
        "& .MuiSvgIcon-root": {
          width: "0.95em",
          height: "0.95em",
          color: theme.palette.secondary[500],
        },
      }}
      noValidate
      autoComplete="off"
    >
      <MarginBar />
      <FlexBetween sx={{
        height: "28px"
      }}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked
                icon={<img className="thumbnail" src={unCheckRadioIcon} alt="unCheckRadioIcon"></img>  }
                checkedIcon={<img className="thumbnail" src={CheckRadioIcon} alt="CheckRadioIcon"></img>}
              />
            }
            label="Remember Account"
          />
        </FormGroup>
        <Typography>Forget Password?</Typography>
      </FlexBetween>
    </Box>
  );
}
