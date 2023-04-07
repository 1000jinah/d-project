import React from "react";
import SocialLoginButtons from "../components/SocialLoginButtons";
import { Typography, useTheme, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
const OAuth = () => {
  const theme = useTheme();
  const OAuthEn = () => {
    const { t } = useTranslation("page");
    return (
      <Box>
        <Typography
          variant="span"
          className="hrSection"
          sx={{
            "::before, ::after": {
              background: theme.palette.secondary[500],
            },
          }}
        >
          {t("Or")} {t("SocialMedia")}
        </Typography>
      </Box>
    );
  };
  const OAuthJp = () => {
    const { t } = useTranslation("page");
    return (
      <Box>
        <Typography
          variant="span"
          className="hrSection"
          sx={{
            mt: 3,
            "::before, ::after": {
              background: theme.palette.secondary[500],
            },
          }}
        >
          {t("Or")}
        </Typography>
        <Typography mt={5}>{t("SocialMedia")}</Typography>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        display: "flex",
        justifyContent: "space-around",
        height: "180px",
        flexDirection: "column",
        color: theme.palette.secondary[500],
      }}
    >
      {localStorage.getItem("language") === "jp" ? <OAuthJp /> : <OAuthEn />}
      <SocialLoginButtons />
    </Box>
  );
};

export default OAuth;
