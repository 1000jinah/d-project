import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import { useTheme } from "@emotion/react";
import MailImage from "../assets/icon_mail.svg";
import KeyImage from "../assets/icon_key.svg";
function MarginBar() {
  return (
    <Box
      sx={{
        height: 20,
      }}
    />
  );
}
const EmailPassword = () => {
  const theme = useTheme();
  return (
    <Box
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
      }}
      noValidate
      autoComplete="off"
    >
      <MarginBar />
      <FormControl variant="standard">
        <Input
          id="component-simple"
          placeholder="Email"
          startAdornment={
            <InputAdornment position="start">
              <img className="thumbnail" src={MailImage} alt="MailImage"></img>
            </InputAdornment>
          }
        />
      </FormControl>
      <MarginBar />
      <FormControl variant="standard">
        <Input
          id="component-simple"
          placeholder="Password"
          startAdornment={
            <InputAdornment position="start">
              <img className="thumbnail" src={KeyImage} alt="KeyImage"></img>
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
};

export default EmailPassword;
