import React from "react";
import Header from "components/Header";
import NextRoundIcon from "../../assets/icon_arrow_next.svg";
import JustInvestIcon from "../../assets/img_illustration_justinvest.svg";
import LowTaxIcon from "../../assets/img_illustration_lowtaxproduct.svg";
import GoalInvestIcon from "../../assets/img_illustration_goal_invest.svg";
import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { Link } from "react-router-dom";
import FlexBetween from "components/FlexBetween";
import { useTranslation } from "react-i18next";
import FixedBottomNavigation from "components/BottomHomeButton";
const GoalHeader = () => {
  const { t } = useTranslation("page");
  return (
    <Header
      sx={{ whiteSpace: "pre-line" }}
      title={t("GoalFirstTitle")}
      subtitle={t("GoalIntro")}
      moresubtitle={t("GoalDescript")}
    />
  );
};
const JustInvest = () => {
  const { t } = useTranslation("page");
  return (
    <Typography
      sx={{
        fontSize: "18px",
        fontWeight: "bold",
        pb: "25px",
        color: "#000",
        // theme.palette.secondary[0],
      }}
    >
      {t("JustInvest")}
    </Typography>
  );
};
const LowTaxProduct = () => {
  const { t } = useTranslation("page");
  return (
    <Typography
      sx={{
        fontSize: "18px",
        fontWeight: "bold",
        pb: "25px",
        color: "#000",
        // theme.palette.secondary[0],
      }}
    >
      {t("LowTaxProduct")}
    </Typography>
  );
};
const GoalInvest = () => {
  const { t } = useTranslation("page");
  return (
    <Typography
      sx={{
        fontSize: "18px",
        fontWeight: "bold",
        pb: "25px",
        color: "#000",
        // theme.palette.secondary[0],
      }}
    >
      {t("GoalInvest")}
    </Typography>
  );
};
const GoalFirst = () => {
  const theme = useTheme();

  function MarginBar() {
    return (
      <Box
        sx={{
          height: 25,
        }}
      />
    );
  }
  return (
    <Box sx={{ width: "100%" }} theme={theme}>
      <Box
        sx={{
          backgroundColor: "#fafafa",
          pl: "1rem",
          pr: "2rem",
          py: "0.5rem",
        }}
      >
        <FlexBetween>
          <IconButton
            component={Link}
            to="/way"
            sx={{
              color:
                theme === "dark"
                  ? theme.palette.primary[1000]
                  : theme.palette.primary[0],
            }}
          >
            <ArrowBack />
          </IconButton>
        </FlexBetween>
      </Box>
      <Box
        p="1.2rem 1.6rem"
        height="100%"
        minHeight="667px"
        sx={{
          backgroundColor: "#fafafa",
        }}
      >
        {/* Header */}
        <GoalHeader />
        {/* Content */}
        <Stack direction={"column"}>
          <Box
            sx={{
              textDecoration: "none",
            }}
          >
            {/* JUST INVEST Box */}
            <FlexBetween
              component={Link}
              to="/goal/second"
              sx={{
                backgroundColor: theme.palette.secondary[1000],
                border: "1px solid #000",
                p: "1.25rem 1rem",
                boxSizing: "border-box",
              }}
            >
              <Box>
                {/* Just Invest */}
                <JustInvest />
                <IconButton sx={{ p: "0px" }}>
                  <img src={NextRoundIcon} alt={NextRoundIcon} />
                </IconButton>
              </Box>
              <Box>
                <img src={JustInvestIcon} alt={JustInvestIcon} />
              </Box>
            </FlexBetween>
            <MarginBar />
            {/* LOW TAX PRODUCT Box*/}
            <FlexBetween
              component={Link}
              to="/goal/second"
              sx={{
                backgroundColor: theme.palette.secondary[1000],
                border: "1px solid #000",
                p: "1.25rem 1rem",
                boxSizing: "border-box",
              }}
            >
              <Box>
                {/* Low Tax Product */}
                <LowTaxProduct />
                <IconButton sx={{ p: "0px" }}>
                  <img src={NextRoundIcon} alt={NextRoundIcon} />
                </IconButton>
              </Box>
              <Box>
                <img src={LowTaxIcon} alt={LowTaxIcon} />
              </Box>
            </FlexBetween>
            <MarginBar />
            {/* GOAL INVEST Box */}
            <FlexBetween
              component={Link}
              to="/goal/second"
              sx={{
                backgroundColor: theme.palette.secondary[1000],
                border: "1px solid #000",
                p: "1.25rem 1rem",
                boxSizing: "border-box",
              }}
            >
              <Box>
                {/* GoalInvest */}
                <GoalInvest />
                <IconButton sx={{ p: "0px" }}>
                  <img src={NextRoundIcon} alt={NextRoundIcon} />
                </IconButton>
              </Box>
              <Box>
                <img src={GoalInvestIcon} alt={GoalInvestIcon} />
              </Box>
            </FlexBetween>
          </Box>
        </Stack>
      </Box>
      <FixedBottomNavigation />
    </Box>
  );
};

export default GoalFirst;
