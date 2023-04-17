import React from "react";
import {
  Box,
  useTheme,
  IconButton,
  Typography,
  Icon,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import FlexBetween from "components/FlexBetween";
import MyPageProfile from "../../assets/img_user@3x.png";
// import MyPageChart from "components/MyPageChart";
import MoneyIcon from "../../assets/icon_addnewlifeplan.svg";
import PlanAddIcon from "../../assets/icon_add.svg";
import CollegeIcon from "../../assets/icon_mycollege.svg";
import RetirementIcon from "../../assets/icon_retirement.svg";
import DollarsIcon from "../../assets/icon_raising50milliondollor.svg";
import MyPageChartImage from "../../assets/img_mypage_chart.svg";
import { useTranslation } from "react-i18next";
import FixedBottomNavigation from "components/BottomHomeButton";
const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const MyPage = () => {
  const theme = useTheme();
  const MypageHeader = () => {
    const { t } = useTranslation("page");
    return (
      <Box sx={{ p: "1.2rem 1.6rem" }}>
        <FlexBetween mb={6}>
          <Box>
            <Typography
              variant="h6"
              sx={{
                textIndent: "3px",
                mb: 1,
                color: theme.palette.secondary[300],
              }}
            >
              {localStorage.getItem("language") === "jp"
                ? "2021年5月20日"
                : "May, 20 2023"}
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
              }}
            >
              {t("YourLifePlan")}
            </Typography>
          </Box>
          <Icon>
            <img width={"55px"} src={MyPageProfile} alt={MyPageProfile} />
          </Icon>
        </FlexBetween>
        <Typography variant="h5" fontWeight={"bold"}>
          {t("StatusPlan")}
        </Typography>
      </Box>
    );
  };
  const MypageAddPlan = () => {
    const { t } = useTranslation("page");
    return (
      <FlexBetween
        p={2}
        backgroundColor={"#fff"}
        boxShadow={"0 3px 5px rgb(199 199 199 / 0.16)"}
      >
        <FlexBetween>
          <Icon sx={{ lineHeight: "0.8" }}>
            <img src={MoneyIcon} alt={MoneyIcon} />
          </Icon>
          <Box ml={2}>
            <Typography color={"#211d1d"}>{t("ManagePortfolio")}</Typography>
            <Typography fontSize={"11px"} color={"#808080"}>
              {t("AddNewPlan")}
            </Typography>
          </Box>
        </FlexBetween>
        <IconButton>
          <img src={PlanAddIcon} alt={PlanAddIcon} />
        </IconButton>
      </FlexBetween>
    );
  };
  const MyGoals = () => {
    const { t } = useTranslation("page");
    return (
      <FlexBetween p={2} backgroundColor={"#fff"}>
        <Typography variant="h5" fontWeight={"bold"}>
          {t("MyGoals")}
        </Typography>
        <Typography
          fontSize={"10px"}
          color={"#fd3f01"}
          borderBottom={"1px solid #fd3f01"}
        >
          {t("More")}
        </Typography>
      </FlexBetween>
    );
  };
  const MyCollege = () => {
    const { t } = useTranslation("page");
    return (
      <Box component={Link} sx={{ color: "#000" }} to="/projection/result/1">
        <FlexBetween p={2} backgroundColor={"#fff"}>
          <FlexBetween>
            <Icon sx={{ lineHeight: "0.8" }}>
              <img src={CollegeIcon} alt={CollegeIcon} />
            </Icon>
            <Box ml={2}>
              <Typography color={"#211d1d"}>
                {t("LifePlanInvestment")}
              </Typography>
              <Typography fontSize={"11px"} color={"#808080"}>
                {t("MyCollege")}
              </Typography>
            </Box>
          </FlexBetween>
          <Box>
            <Typography fontWeight={"bold"}>
              {localStorage.getItem("language") === "jp" ? "70万円" : "$ 4,500"}
            </Typography>
            <Typography textAlign={"right"} fontSize={"11px"} color={"#808080"}>
              42%
            </Typography>
          </Box>
        </FlexBetween>
        <Box px={2} pb={2} backgroundColor={"#fff"}>
          <Box width="100%" height="3px" backgroundColor="#e8e8e8">
            <Box width="42%" height="100%" backgroundColor="#f9af02"></Box>
          </Box>
        </Box>
      </Box>
    );
  };
  const MyRetirement = () => {
    const { t } = useTranslation("page");
    return (
      <Box component={Link} sx={{ color: "#000" }} to="/projection/result/2">
        <FlexBetween p={2} backgroundColor={"#fff"}>
          <FlexBetween>
            <Icon sx={{ lineHeight: "0.8" }}>
              <img src={RetirementIcon} alt={RetirementIcon} />
            </Icon>
            <Box ml={2}>
              <Typography color={"#211d1d"}>
                {" "}
                {t("LifePlanInvestment")}
              </Typography>
              <Typography fontSize={"11px"} color={"#808080"}>
                {t("MyRetirement")}
              </Typography>
            </Box>
          </FlexBetween>
          <Box>
            <Typography fontWeight={"bold"}>
              {localStorage.getItem("language") === "jp"
                ? "75万円"
                : "$ 97,000"}
            </Typography>
            <Typography textAlign={"right"} fontSize={"11px"} color={"#808080"}>
              23%
            </Typography>
          </Box>
        </FlexBetween>
        <Box px={2} pb={2} backgroundColor={"#fff"}>
          <Box width="100%" height="3px" backgroundColor="#e8e8e8">
            <Box width="23%" height="100%" backgroundColor="#2e9875"></Box>
          </Box>
        </Box>
      </Box>
    );
  };
  const GeneralInvestment = () => {
    const { t } = useTranslation("page");
    return (
      <Box component={Link} sx={{ color: "#000" }} to="/projection/result/3">
        <FlexBetween p={2} backgroundColor={"#fff"}>
          <FlexBetween>
            <Icon sx={{ lineHeight: "0.8" }}>
              <img src={DollarsIcon} alt={DollarsIcon} />
            </Icon>
            <Box ml={2}>
              <Typography color={"#211d1d"}>
                {" "}
                {t("GeneralInvestment")}
              </Typography>
              <Typography fontSize={"11px"} color={"#808080"}>
                {t("RasingInvest")}
              </Typography>
            </Box>
          </FlexBetween>
          <Box>
            <Typography fontWeight={"bold"}>
              {localStorage.getItem("language") === "jp"
                ? "35万円"
                : "$ 21,700"}
            </Typography>
            <Typography textAlign={"right"} fontSize={"11px"} color={"#808080"}>
              68%
            </Typography>
          </Box>
        </FlexBetween>
        <Box px={2} pb={2} backgroundColor={"#fff"}>
          <Box width="100%" height="3px" backgroundColor="#e8e8e8">
            <Box width="68%" height="100%" backgroundColor="#3e7ad3"></Box>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Box
      theme={theme}
      sx={{
        "& .MuiIcon-root": {
          width: "auto",
          height: "auto",
          display: "flex",
        },
      }}
    >
      <Box
        sx={{
          // backgroundColor: theme.palette.secondary[900],

          backgroundColor: "#fafafa",
          py: 2,
          zIndex: "1000",
        }}
      >
        {/* MypageHeader */}
        <MypageHeader />

        <Box>
          {/*  */}
          <StyledBox
            sx={{ height: "160px" }}
            // borderBottom={"2px solid #000"}
            // borderTop={"1px solid #000"}
          >
            <Box sx={{ height: "200px" }}>
              {/* <MyPageChart /> */}
              <img width="100%" src={MyPageChartImage} alt={MyPageChartImage} />
              <Box sx={{ mt: "-px", px: 3 }}>
                <FlexBetween>
                  <Typography>
                    {localStorage.getItem("language") === "jp"
                      ? "2021年"
                      : "2021"}
                  </Typography>
                  <Typography>
                    {localStorage.getItem("language") === "jp"
                      ? "2075年"
                      : "2075"}
                  </Typography>
                </FlexBetween>
              </Box>
            </Box>
          </StyledBox>
        </Box>

        <Box mt="55px">
          <Divider />
        </Box>
        <Box component={Link} to="/way">
          <Box p={2}>
            {/* MypageAddPlan */}
            <MypageAddPlan />
          </Box>
        </Box>

        <Box p={2}>
          <Box boxShadow={"0 3px 5px rgb(199 199 199 / 0.16)"}>
            {/* MyGoals */}
            <MyGoals />
            {/* MyCollege */}
            <MyCollege />
            {/* MyRetirement */}
            <MyRetirement />
            {/* GeneralInvestment  */}
            <GeneralInvestment />
          </Box>
        </Box>
      </Box>
      <FixedBottomNavigation />
    </Box>
  );
};

export default MyPage;
