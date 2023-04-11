import React from "react";
import { ArrowBack } from "@mui/icons-material";
import {
  Box,
  useTheme,
  IconButton,
  Typography,
  Autocomplete,
  Stack,
  TextField,
} from "@mui/material";
import DefaultButton from "components/DefaultButton";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import { Link } from "react-router-dom";
// import InputLabel from "@mui/material/InputLabel";
import SwipeableEdgeDrawer from "components/DrawerChart";
// import Select from "@mui/material/Select";
import StepCircleIcon from "../../assets/icon_golfball_orange.svg";
import StepEmptyCircleIcon from "../../assets/icon_golfball_gray.svg";
// import StepBarIcon from "../../assets/icon_progressbar_gray.svg";
import StepFlagIcon from "../../assets/icon_flag_gray.svg";
import { useTranslation } from "react-i18next";
import FixedBottomNavigation from "components/BottomHomeButton";
const AboutYouHeader = () => {
  const { t } = useTranslation("page");
  return <Header title={t("AboutYouTitle")} subtitle={t("AboutYouDescript")} />;
};
function MarginBar() {
  return (
    <Box
      sx={{
        height: 35,
      }}
    />
  );
}
function StepSpaceBar() {
  return (
    <Box
      sx={{
        mx: "2px",
      }}
    />
  );
}
function PortfolioName() {
  const theme = useTheme();
  const defaultProps = {
    options: MoneyAndYear,
    getOptionLabel: (option) => option.title,
  };
  // const flatProps = {
  //   options: MoneyAndYear.map((option) => option.title),
  // };
  // const [value, setValue] = React.useState(null);
  //   const [message, setMessage] = useState("");
  const InvestmentHorizon = () => {
    const { t } = useTranslation("page");
    return (
      <Typography
        htmlFor="uncontrolled-native"
        sx={{
          fontSize: "18px",
          fontWeight: "bold",
          color:
            theme === "dark"
              ? theme.palette.primary[1000]
              : theme.palette.primary[0],
        }}
      >
        {t("InvestmentHorizon")}
      </Typography>
    );
  };
  const MonthlyInvestAmount = () => {
    const { t } = useTranslation("page");
    return (
      <Typography
        htmlFor="uncontrolled-native"
        sx={{
          fontSize: "18px",
          fontWeight: "bold",
          color:
            theme === "dark"
              ? theme.palette.primary[1000]
              : theme.palette.primary[0],
        }}
      >
        {t("MonthlyInvestAmount")}
      </Typography>
    );
  };
  const TargetInvestAmount = () => {
    const { t } = useTranslation("page");
    return (
      <Typography
        htmlFor="uncontrolled-native"
        sx={{
          fontSize: "18px",
          fontWeight: "bold",
          color:
            theme === "dark"
              ? theme.palette.primary[1000]
              : theme.palette.primary[0],
        }}
      >
        {t("TargetInvestAmount")}
      </Typography>
    );
  };
  const InitialInvestAmount = () => {
    const { t } = useTranslation("page");
    return (
      <Typography
        htmlFor="uncontrolled-native"
        sx={{
          fontSize: "18px",
          fontWeight: "bold",
          color:
            theme === "dark"
              ? theme.palette.primary[1000]
              : theme.palette.primary[0],
        }}
      >
        {t("InitialInvestAmount")}
      </Typography>
    );
  };
  const Continue = () => {
    const { t } = useTranslation("page");
    return (
      <DefaultButton
        buttonName={t("Continue")}
        sx={{
          backgroundColor: theme.palette.secondary[100],
        }}
      />
    );
  };
  const Skip = () => {
    const { t } = useTranslation("page");
    return (
      <Typography
        sx={{
          textDecoration: "underline",
          color: theme.palette.secondary[0],
          fontSize: "12px",
        }}
      >
        {t("Skip")}
      </Typography>
    );
  };

  return (
    <Box
      theme={theme}
      sx={{
        display: "flex",
        flexDirection: "column",
        "&": {
          backgroundColor: theme.palette.secondary[900],
        },
        "& .MuiTextField-root": {
          width: "100%",
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
        "& .MuiAutocomplete-root .MuiInput-root .MuiInput-input": {
          p: "13px 0 13px",
        },
      }}
    >
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
            to="/portname"
            sx={{
              color:
                theme === "dark"
                  ? theme.palette.primary[1000]
                  : theme.palette.primary[0],
            }}
          >
            <ArrowBack />
          </IconButton>
          {/* Step-Bar */}
          <FlexBetween>
            <img src={StepCircleIcon} alt={StepCircleIcon} width={"15px"} />

            <StepSpaceBar />
            {/* <img src={StepBarIcon} alt={StepBarIcon} /> */}
            <Box
              sx={{
                width: "43px",
                height: "3px",
                position: "relative",
                background: theme.palette.secondary[600],
              }}
            >
              <Box
                sx={{ width: "0%", height: "100%", background: "#ff754b" }}
              ></Box>
            </Box>
            <StepSpaceBar />
            <img
              src={StepEmptyCircleIcon}
              alt={StepEmptyCircleIcon}
              width={"15px"}
            />
            <StepSpaceBar />
            <Box
              sx={{
                width: "43px",
                height: "3px",
                position: "relative",
                background: theme.palette.secondary[600],
              }}
            >
              <Box
                sx={{ width: "0%", height: "100%", background: "#ff754b" }}
              ></Box>
            </Box>
            <StepSpaceBar />
            <img
              src={StepEmptyCircleIcon}
              alt={StepEmptyCircleIcon}
              width={"15px"}
            />
            <StepSpaceBar />
            <Box
              sx={{
                width: "43px",
                height: "3px",
                position: "relative",
                background: theme.palette.secondary[600],
              }}
            >
              <Box
                sx={{ width: "0%", height: "100%", background: "#ff754b" }}
              ></Box>
            </Box>
            <StepSpaceBar />
            <img src={StepFlagIcon} alt={StepFlagIcon} width={"15px"} />
          </FlexBetween>

          {/* Skip  */}
          <Link
            variant="text"
            style={{
              visibility: "hidden",
              color:
                theme === "dark"
                  ? theme.palette.primary[1000]
                  : theme.palette.primary[0],
              textTransform: "capitalize",
            }}
            to="/projection/default"
          >
            {/* Skip */}
            <Skip />
          </Link>
        </FlexBetween>
      </Box>
      <Box
        p="1.2rem 1.6rem"
        height="100%"
        minHeight="667px"
        sx={{ backgroundColor: "#fafafa" }}
      >
        {/* Header */}
        <AboutYouHeader />
        {/* Investment Horizon Start */}
        <InvestmentHorizon />
        <Stack spacing={1} sx={{ width: "100%" }}>
          <Autocomplete
            {...defaultProps}
            id="clear-on-escape"
            clearOnEscape
            options={MoneyAndYear}
            getOptionLabel={(option) => option.year}
            // defaultValue={MoneyAndYear[5]}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                placeholder={
                  localStorage.getItem("language") === "jp" ? "5 年" : "5 Years"
                }
              />
            )}
          />
        </Stack>
        {/* Investment Horizon End */}
        <MarginBar />
        {/* Monthly Investment Amount Start */}
        <MonthlyInvestAmount />
        <Stack spacing={1} sx={{ width: "100%" }}>
          <Autocomplete
            {...defaultProps}
            id="clear-on-escape"
            clearOnEscape
            options={MoneyAndYear}
            getOptionLabel={(option) => option.money}
            // defaultValue={MoneyAndYear[5]}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                placeholder={
                  localStorage.getItem("language") === "jp"
                    ? "7 万円"
                    : "$ 7,000"
                }
              />
            )}
          />
        </Stack>
        {/* Monthly Investment Amount End */}
        <MarginBar />
        {/* Target Investment Amount Start */}
        <TargetInvestAmount />
        <Stack spacing={1} sx={{ width: "100%" }}>
          <Autocomplete
            {...defaultProps}
            id="clear-on-escape"
            clearOnEscape
            options={MoneyAndYear}
            getOptionLabel={(option) => option.money}
            // defaultValue={MoneyAndYear[5]}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                placeholder={
                  localStorage.getItem("language") === "jp"
                    ? "6 万円"
                    : "$ 6,000"
                }
              />
            )}
          />
        </Stack>
        {/* Target Investment Amount End */}
        <MarginBar />
        {/* Initial Investment Amount Start */}
        <InitialInvestAmount />
        <Stack spacing={1} sx={{ width: "100%" }}>
          <Autocomplete
            {...defaultProps}
            id="clear-on-escape"
            clearOnEscape
            options={MoneyAndYear}
            getOptionLabel={(option) => option.money}
            // defaultValue={MoneyAndYear[5]}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                placeholder={
                  localStorage.getItem("language") === "jp"
                    ? "105 万円"
                    : "$ 105,000"
                }
              />
            )}
          />
        </Stack>
        {/* Initial Investment Amount End */}
        <MarginBar />
        <Link to={"/survey/first"}>
          {/* Continue */}
          <Continue />
        </Link>
        <SwipeableEdgeDrawer />
        {/* <Box sx={{ color: "#fd3f01" }}>
          Check profile
        </Box> */}
      </Box>
      <FixedBottomNavigation />
    </Box>
  );
}
export default PortfolioName;
const MoneyAndYear = [
  {
    money: localStorage.getItem("language") === "jp" ? "5 万円" : "$ 5,000",
    year: localStorage.getItem("language") === "jp" ? "1 年" : "1 Year",
  },
  {
    money: localStorage.getItem("language") === "jp" ? "10 万円" : "$ 10,000",
    year: localStorage.getItem("language") === "jp" ? "2 年" : "2 Year",
  },
  {
    money: localStorage.getItem("language") === "jp" ? "15 万円" : "$ 15,000",
    year: localStorage.getItem("language") === "jp" ? "3 年" : "3 Year",
  },
  {
    money: localStorage.getItem("language") === "jp" ? "20 万円" : "$ 20,000",
    year: localStorage.getItem("language") === "jp" ? "4 年" : "4 Year",
  },
  {
    money: localStorage.getItem("language") === "jp" ? "25 万円" : "$ 25,000",
    year: localStorage.getItem("language") === "jp" ? "5 年" : "5 Year",
  },
  {
    money: localStorage.getItem("language") === "jp" ? "30 万円" : "$ 30,000",
    year: localStorage.getItem("language") === "jp" ? "6 年" : "6 Year",
  },
  {
    money: localStorage.getItem("language") === "jp" ? "35 万円" : "$ 35,000",
    year: localStorage.getItem("language") === "jp" ? "7 年" : "7 Year",
  },
  {
    money: localStorage.getItem("language") === "jp" ? "40 万円" : "$ 40,000",
    year: localStorage.getItem("language") === "jp" ? "8 年" : "8 Year",
  },
  {
    money: localStorage.getItem("language") === "jp" ? "45 万円" : "$ 45,000",
    year: localStorage.getItem("language") === "jp" ? "9 年" : "9 Year",
  },
  {
    money: localStorage.getItem("language") === "jp" ? "50 万円" : "$ 50,000",
    year: localStorage.getItem("language") === "jp" ? "10 年" : "10 Year",
  },
  {
    money: localStorage.getItem("language") === "jp" ? "55 万円" : "$ 55,000",
    year: localStorage.getItem("language") === "jp" ? "11 年" : "11 Year",
  },
  {
    money: localStorage.getItem("language") === "jp" ? "60 万円" : "$ 60,000",
    year: localStorage.getItem("language") === "jp" ? "12 年" : "11 Year",
  },
  {
    money: localStorage.getItem("language") === "jp" ? "65 万円" : "$ 65,000",
    year: localStorage.getItem("language") === "jp" ? "13 年" : "13 Year",
  },
  {
    money: localStorage.getItem("language") === "jp" ? "70 万円" : "$ 70,000",
    year: localStorage.getItem("language") === "jp" ? "14 年" : "14 Year",
  },
  {
    money: localStorage.getItem("language") === "jp" ? "75 万円" : "$ 75,000",
    year: localStorage.getItem("language") === "jp" ? "15 年" : "15 Year",
  },
  {
    money: localStorage.getItem("language") === "jp" ? "80 万円" : "$ 80,000",
    year: localStorage.getItem("language") === "jp" ? "16 年" : "16 Year",
  },
  {
    money: localStorage.getItem("language") === "jp" ? "85 万円" : "$ 85,000",
    year: localStorage.getItem("language") === "jp" ? "17 年" : "17 Year",
  },
  {
    money: localStorage.getItem("language") === "jp" ? "90 万円" : "$ 90,000",
    year: localStorage.getItem("language") === "jp" ? "18 年" : "18 Year",
  },
  {
    money: localStorage.getItem("language") === "jp" ? "95 万円" : "$ 95,000",
    year: localStorage.getItem("language") === "jp" ? "19 年" : "19 Year",
  },
  {
    money: localStorage.getItem("language") === "jp" ? "100 万円" : "$ 100,000",
    year: localStorage.getItem("language") === "jp" ? "20 年" : "20 Year",
  },
];
//
