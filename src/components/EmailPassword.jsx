import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import { useTheme } from "@emotion/react";
import MailImage from "../assets/icon_mail.svg";
import KeyImage from "../assets/icon_key.svg";
import VisibilityEye from "../assets/icon_eye_unselect.svg";
import VisibilityEyeOff from "../assets/icon_eye_selected.svg";
import IconButton from "@mui/material/IconButton";
import { useTranslation } from "react-i18next";

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
  const [showPassword, setShowPassword] = React.useState();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const EmailInput = () => {
    const { t } = useTranslation("page");
    return (
      <Input
        id="component-simple"
        placeholder={t("Email")}
        startAdornment={
          <InputAdornment position="start">
            <img className="thumbnail" src={MailImage} alt="MailImage"></img>
          </InputAdornment>
        }
      />
    );
  };

  const PasswordInput = () => {
    const { t } = useTranslation("page");
    return (
      <Input
        id="standard-adornment-password"
        type={showPassword ? "text" : "password"}
        placeholder={t("Password")}
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
              {showPassword ? (
                <img
                  className="thumbnail"
                  src={VisibilityEyeOff}
                  alt="VisibilityEyeOff"
                ></img>
              ) : (
                <img
                  className="thumbnail"
                  src={VisibilityEye}
                  alt="VisibilityEye"
                ></img>
              )}
            </IconButton>
          </InputAdornment>
        }
      />
    );
  };
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
        {/* EmailInput */}
        <EmailInput />
      </FormControl>
      <MarginBar />
      <FormControl variant="standard">
        {/* PasswordInput */}
        <PasswordInput />
      </FormControl>
    </Box>
  );
};

export default EmailPassword;
