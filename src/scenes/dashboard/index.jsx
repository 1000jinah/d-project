import React, { useState } from "react";
import { Box, useTheme, Typography } from "@mui/material";
import DefaultButton from "components/DefaultButton";
import OAuth from "components/OAuth";
import EmailPassword from "components/EmailPassword";
import ConfirmPassword from "components/ConfimPassword";
import RememberPassword from "components/RememberPassword";
import Header from "components/Header";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Dashboard() {
  const theme = useTheme();
  const [showText, setShowText] = useState();
  const CreateNewAccount = () => {
    const { t } = useTranslation("page");
    return <span>{t("CreateNewAccount")}</span>;
  };

  const Welcome = () => {
    const { t } = useTranslation("page");
    return <span>{t("Welcome")}</span>;
  };
  const Hi = () => {
    const { t } = useTranslation("page");
    return <span>{t("Hi")}</span>;
  };

  const LogInContinue = () => {
    const { t } = useTranslation("page");
    return <span>{t("LogInContinue")}</span>;
  };
  const SignIn = () => {
    const { t } = useTranslation("page");
    return <span>{t("SignIn")}</span>;
  };
  const LogIn = () => {
    const { t } = useTranslation("page");
    return <span>{t("LogIn")}</span>;
  };
  const AlreadyLogInAccount = () => {
    const { t } = useTranslation("page");
    return <span>{t("AlreadyLogInAccount")}</span>;
  };
  const AlreadySignInAccount = () => {
    const { t } = useTranslation("page");
    return <span>{t("AlreadySignInAccount")}</span>;
  };
  const AlreadyAccountBox = () => {
    const { t } = useTranslation("page");
    return (
      <Box>
        <Typography>
          {showText ? <AlreadyLogInAccount /> : <AlreadySignInAccount />}
          <span
            style={{ color: "#fd3f01", cursor: "pointer" }}
            onClick={() => setShowText(!showText)}
          >
            {showText ? <LogIn /> : <SignIn />}
          </span>
        </Typography>
      </Box>
    );
  };
  const HomeHeader = () => {
    const { t } = useTranslation("page");
    return (
      <Header
        title={showText ? <Hi /> : <Welcome />}
        subtitle={showText ? <CreateNewAccount /> : <LogInContinue />}
      />
    );
  };
  return (
    <Box sx="width:100%" theme={theme}>
      <Box p="1.2rem 1.6rem">
        {/* HomeHeader */}
        <HomeHeader />
        <EmailPassword />

        {showText ? <ConfirmPassword /> : <RememberPassword />}
      </Box>
      <Box p="0px 1.6rem">
        <Link to="/introduce">
          <DefaultButton buttonName={showText ? <SignIn /> : <LogIn />} />
        </Link>
      </Box>{" "}
      <Box>
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column",
            height: "50px",
            color: theme.palette.secondary[500],
          }}
        >
          {/* AlreadyAccountBox */}
          <AlreadyAccountBox />
        </Box>
        <OAuth />
      </Box>
    </Box>
  );
}
export default Dashboard;
