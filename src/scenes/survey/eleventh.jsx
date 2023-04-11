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
// import StepEmptyCircleIcon from "../../assets/icon_golfball_gray.svg";
// import StepBarIcon from "../../assets/icon_progressbar_gray.svg";
import StepFlagIcon from "../../assets/icon_flag_gray.svg";
import SellEveryIcon from "../../assets/img_selleverything.svg";
import SellSomeIcon from "../../assets/img_sellsome.svg";
import DoNothingIcon from "../../assets/img_donothing.svg";
import BuyMoreIcon from "../../assets/img_buymore.svg";
import FixedBottomNavigation from "components/BottomHomeButton";
// import CoinQueIcon from "../../assets/img_illustration_coin_question1.svg";

// function MarginBar() {
//   return (
//     <Box
//       sx={{
//         height: 35,
//       }}
//     />
//   );
// }
function StepSpaceBar() {
  return (
    <Box
      sx={{
        mx: "2px",
      }}
    />
  );
}
function SurveyEleventh() {
  const theme = useTheme();
  //   const [message, setMessage] = useState("");

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
            to="/survey/tenth"
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
                sx={{ width: "100%", height: "100%", background: "#ff754b" }}
              ></Box>
            </Box>
            <StepSpaceBar />
            <img src={StepCircleIcon} alt={StepCircleIcon} width={"15px"} />
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
                sx={{ width: "100%", height: "100%", background: "#ff754b" }}
              ></Box>
            </Box>
            <StepSpaceBar />
            <img src={StepCircleIcon} alt={StepCircleIcon} width={"15px"} />
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
                sx={{ width: "80%", height: "100%", background: "#ff754b" }}
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
            <Typography
              sx={{
                textDecoration: "underline",
                color: theme.palette.secondary[0],
                fontSize: "12px",
              }}
            >
              Skip
            </Typography>
          </Link>
        </FlexBetween>
      </Box>
      <Box
        mt="3.2rem"
        p="1.2rem 1.6rem"
        mb="4.5rem"
        height="100%"
        // minHeight="667px"
        sx={{ background: theme.palette.secondary[900] }}
      >
        <Header
          title={"Choose the investment portfolio you want"}
          subtitle={
            "Imagine your investment of $1,000 becomes $750 over 3 months, but it's proven historically that it will recover in 3-5 years."
          }
          moresubtitle={"What will you do?"}
        />
        {/* <Box sx={{ textAlign: "center" }}>
          <img src={CoinQueIcon} alt={CoinQueIcon} />
        </Box> */}
        {/* <MarginBar /> */}
        <FormControl sx={{ width: "100%" }}>
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
                backgroundImage: { SellEveryIcon },
              }}
              // {<img src={SellEveryIcon} alt={SellEveryIcon} width={"17px"} />}
              value="1"
              control={<Radio />}
              label={
                <FlexBetween>
                  <img src={SellEveryIcon} alt={SellEveryIcon} width={"17px"} />
                  <Typography sx={{ ml: 1 }}>Sell everything</Typography>
                </FlexBetween>
              }
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
              label={
                <FlexBetween>
                  <img src={SellSomeIcon} alt={SellSomeIcon} width={"17px"} />
                  <Typography sx={{ ml: 1 }}>Sell some</Typography>
                </FlexBetween>
              }
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
              label={
                <FlexBetween>
                  <img src={DoNothingIcon} alt={DoNothingIcon} width={"17px"} />
                  <Typography sx={{ ml: 1 }}>Do nothing</Typography>
                </FlexBetween>
              }
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
              label={
                <FlexBetween>
                  <img
                    src={BuyMoreIcon}
                    alt={BuyMoreIcon}
                    width={"17px"}
                    height={"32px"}
                  />
                  <Typography sx={{ ml: 1 }}>Buy more</Typography>
                </FlexBetween>
              }
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
            background: theme.palette.secondary[900],
          }}
        >
          <Link to={"/survey/twelfth"} sx={{}}>
            <DefaultButton
              buttonName={"Continue"}
              sx={{
                p: "20px",
                backgroundColor: theme.palette.secondary[100],
              }}
            />
          </Link>
        </Box>
      </Box>
      <FixedBottomNavigation />
    </Box>
  );
}
export default SurveyEleventh;

//
