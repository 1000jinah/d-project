import React from "react";
import { ArrowBack } from "@mui/icons-material";
import {
  Box,
  useTheme,
  //   FormControl,
  IconButton,
  Typography,
  FormControl,
  //   FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,

  //   Typography,
} from "@mui/material";
import DefaultButton from "components/DefaultButton";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import { Link } from "react-router-dom";
// import InputLabel from "@mui/material/InputLabel";
// import Select from "@mui/material/Select";
import StepCircleIcon from "../../assets/icon_golfball_orange.svg";
import StepEmptyCircleIcon from "../../assets/icon_golfball_gray.svg";
// import StepBarIcon from "../../assets/icon_progressbar_gray.svg";
import StepFlagIcon from "../../assets/icon_flag_gray.svg";
import CoinQueIcon from "../../assets/img_illustration_coin_question1.svg";
import { useTranslation } from "react-i18next";
import FixedBottomNavigation from "components/BottomHomeButton";
const SurveyFirstHeader = () => {
  const { t } = useTranslation("page");
  return (
    <Header title={t("SurveyFirstTitle")} subtitle={t("SurveyFirstDescipt")} />
  );
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
function SurveyFirst() {
  const theme = useTheme();
  //   const [message, setMessage] = useState("");
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
  const Continue = () => {
    const { t } = useTranslation("page");
    return (
      <DefaultButton
        buttonName={t("Continue")}
        sx={{
          p: "20px",
          backgroundColor: theme.palette.secondary[100],
        }}
      />
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
        // "& .MuiTextField-root": {
        //   width: "25ch",
        //   color: theme.palette.primary[1000],
        // },
        // "& .MuiFormLabel-root:before": {
        //   color: theme.palette.primary[1000],
        // },
        // "& .MuiInput-root:after": {
        //   borderBottomColor:
        //     theme === "dark"
        //       ? theme.palette.primary[900]
        //       : theme.palette.secondary[0],
        // },
        "& .MuiButtonBase-root.MuiRadio-root.Mui-checked": {
          color:
            theme === "dark"
              ? theme.palette.primary[900]
              : theme.palette.secondary[0],
        },
        "& .MuiFormControlLabel-root": {
          mx: "0px",
        },
      }}
    >
      <Box
        sx={{
          backgroundColor: theme.palette.secondary[900],
          pl: "1rem",
          pr: "2rem",
          py: "0.5rem",
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
        }}
      >
        <FlexBetween>
          <IconButton
            component={Link}
            to="/aboutyou"
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
                sx={{
                  height: "100%",
                  background: "#ff754b",
                  width:
                    localStorage.getItem("language") === "jp" ? "100%" : "20%",
                }}
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
            sx={{
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
        mt="3.2rem"
        mb="3rem"
        p="1.2rem 1.6rem"
        // height="100%"
        // minHeight="667px"
        sx={{ background: theme.palette.secondary[900] }}
      >
        {/* Header */}
        <SurveyFirstHeader />
        <Box sx={{ textAlign: "center" }}>
          <img src={CoinQueIcon} alt={CoinQueIcon} />
        </Box>
        <MarginBar />
        <FormControl sx={{ width: "100%", mb: 3 }}>
          {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            // defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              sx={{
                display: "flex",
                justifyContent: "space-between",
                py: 0.5,
                mb: 2,
                px: 1,
                border: "1px solid",
                borderColor: theme.palette.primary[450],
              }}
              value="1"
              control={<Radio />}
              label="0%"
              labelPlacement="start"
            />
            <FormControlLabel
              sx={{
                display: "flex",
                justifyContent: "space-between",
                py: 0.5,
                mb: 2,
                px: 1,
                border: "1px solid",
                borderColor: theme.palette.primary[450],
              }}
              value="2"
              control={<Radio />}
              label="0% - 2%"
              labelPlacement="start"
            />
            <FormControlLabel
              sx={{
                display: "flex",
                justifyContent: "space-between",
                py: 0.5,
                mb: 2,
                px: 1,
                border: "1px solid",
                borderColor: theme.palette.primary[450],
              }}
              value="3"
              control={<Radio />}
              label="2% - 4%"
              labelPlacement="start"
            />
            <FormControlLabel
              sx={{
                display: "flex",
                justifyContent: "space-between",
                py: 0.5,
                mb: 2,
                px: 1,
                border: "1px solid",
                borderColor: theme.palette.primary[450],
              }}
              value="4"
              control={<Radio />}
              label="4% - 5%"
              labelPlacement="start"
            />
            <FormControlLabel
              sx={{
                display: "flex",
                justifyContent: "space-between",
                py: 0.5,
                mb: 2,
                px: 1,
                border: "1px solid",
                borderColor: theme.palette.primary[450],
              }}
              value="5"
              control={<Radio />}
              label="High than 5%"
              labelPlacement="start"
            />
          </RadioGroup>
        </FormControl>
        <Box
          sx={{
            position: "fixed",
            bottom: "0",
            left: "0",
            right: "0",
            p: "25px",
            background: "#fff",
          }}
        >
          <Link to={"/survey/second"} sx={{}}>
            {/* Continue */}
            <Continue />
          </Link>
        </Box>
      </Box>
      <FixedBottomNavigation/>
    </Box>
  );
}
export default SurveyFirst;

//
