import * as React from "react";
import Box from "@mui/material/Box";
// import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
// import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
// import InputLabel from "@mui/material/InputLabel";
// import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@emotion/react";
// import { AccountCircle } from "@mui/icons-material";
import MailImage from "../assets/icon_mail@2x.png";
import KeyImage from "../assets/icon_key@2x.png";

function MarginBar() {
  return (
    <Box
      sx={{
        height: 20,
      }}
    />
  );
}
export default function ComposedTextField() {
  const theme = useTheme();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Box
      m={"0"}
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
          theme ==="dark"? theme.palette.primary[900] : theme.palette.secondary[0],
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

      {/* <MarginBar />
      <FormControl variant="standard">
        <Input id="component-helper" aria-describedby="component-helper-text" />
        <FormHelperText id="component-helper-text">
          Some important helper text
        </FormHelperText>
      </FormControl>

      <MarginBar />
      <FormControl error variant="standard">
        <Input id="component-error" aria-describedby="component-error-text" />
        <FormHelperText id="component-error-text">Error</FormHelperText>
      </FormControl> */}

      <MarginBar />
      <FormControl variant="standard">
        <Input
          id="standard-adornment-password"
          type={showPassword ? "text" : "password"}
          placeholder="Confirm Password"
          startAdornment={
            <InputAdornment position="start">
              <img className="thumbnail" src={KeyImage} alt="KeyImage"></img>
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
}
