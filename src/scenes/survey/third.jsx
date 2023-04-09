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
import StepFlagOrangeIcon from "../../assets/icon_flag_orange.svg";
// import CoinQueIcon from "../../assets/img_illustration_coin_question1.svg";
import { useTranslation } from "react-i18next";
import FixedBottomNavigation from "components/BottomHomeButton";
const SurveyThirdHeader = () => {
  const { t } = useTranslation("page");
  return (
    <Header title={t("SurveyThirdTitle")} subtitle={t("SurveyThirdDescipt")} />
  );
};
// const EnMoney = () => {
//   const { t } = useTranslation("page");
//   return <span>{t("EnMoney")}</span>;
// };
// const JpMoney = () => {
//   const { t } = useTranslation("page");
//   return <span>{t("JpMoney")}</span>;
// };
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
function SurveyThird() {
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
            to="/survey/second"
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
                  width:
                    localStorage.getItem("language") === "jp" ? "100%" : "80%",
                  height: "100%",
                  background: "#ff754b",
                }}
              ></Box>
            </Box>
            <StepSpaceBar />
            <img
              src={
                localStorage.getItem("language") === "jp"
                  ? StepCircleIcon
                  : StepEmptyCircleIcon
              }
              alt={
                localStorage.getItem("language") === "jp"
                  ? StepCircleIcon
                  : StepEmptyCircleIcon
              }
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
                sx={{
                  width:
                    localStorage.getItem("language") === "jp" ? "100%" : "0%",
                  height: "100%",
                  background: "#ff754b",
                }}
              ></Box>
            </Box>
            <StepSpaceBar />
            <img
              src={
                localStorage.getItem("language") === "jp"
                  ? StepCircleIcon
                  : StepEmptyCircleIcon
              }
              alt={
                localStorage.getItem("language") === "jp"
                  ? StepCircleIcon
                  : StepEmptyCircleIcon
              }
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
                sx={{
                  width:
                    localStorage.getItem("language") === "jp" ? "100%" : "0%",
                  height: "100%",
                  background: "#ff754b",
                }}
              ></Box>
            </Box>
            <StepSpaceBar />
            <img
              src={
                localStorage.getItem("language") === "jp"
                  ? StepFlagOrangeIcon
                  : StepFlagIcon
              }
              alt={
                localStorage.getItem("language") === "jp"
                  ? StepFlagOrangeIcon
                  : StepFlagIcon
              }
              width={"15px"}
            />
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
        p="1.2rem 1.6rem"
        height="100%"
        // minHeight="667px"
        sx={{ background: theme.palette.secondary[900] }}
      >
        {/* Header */}
        <SurveyThirdHeader />
        {/* <MarginBar /> */}
        <FormControl sx={{ width: "100%", mb: 3 }}>
          {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            // defaultValue="female"
            name="radio-buttons-group"
          >
            {/* Base ±10% */}

            <Box sx={{ height: "32px" }}>
              <Box
                sx={{
                  width: "100%",
                  background: theme.palette.secondary[600],
                  borderBottom: "1px solid #ffff",
                }}
              >
                <Box
                  sx={{
                    width: "27%",
                    height: "100%",
                    background: "#ff754b",
                    color: "#fff",
                    fontSize: "10px",
                    textAlign: "end",
                    pr: "3px",
                  }}
                >
                  {localStorage.getItem("language") === "jp"
                    ? "490万円"
                    : "$490M"}
                </Box>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  background: theme.palette.secondary[600],
                  borderBottom: "1px solid #ffff",
                }}
              >
                <Box
                  sx={{
                    width: "14%",
                    height: "100%",
                    background: "#b3b3b3",
                    color: "#fff",
                    fontSize: "7px",
                    textAlign: "end",
                    pr: "3px",
                  }}
                >
                  {" "}
                  {localStorage.getItem("language") === "jp"
                    ? "-250万円"
                    : "$-250M"}
                </Box>
              </Box>
            </Box>

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
              label={
                localStorage.getItem("language") === "jp"
                  ? "元金の基準±10％の範囲"
                  : "Base ±10% range of principai"
              }
              labelPlacement="start"
            />
            {/* Base ±20% */}

            <Box sx={{ height: "32px" }}>
              <Box
                sx={{
                  width: "100%",
                  background: theme.palette.secondary[600],
                  borderBottom: "1px solid #ffff",
                }}
              >
                <Box
                  sx={{
                    width: "39%",
                    height: "100%",
                    background: "#ff754b",
                    color: "#fff",
                    fontSize: "10px",
                    textAlign: "end",
                    pr: "3px",
                  }}
                >
                  {localStorage.getItem("language") === "jp"
                    ? "520万円"
                    : "$520M"}
                </Box>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  background: theme.palette.secondary[600],
                  borderBottom: "1px solid #ffff",
                }}
              >
                <Box
                  sx={{
                    width: "18%",
                    height: "100%",
                    background: "#b3b3b3",
                    color: "#fff",
                    fontSize: "7px",
                    textAlign: "end",
                    pr: "3px",
                  }}
                >
                  {localStorage.getItem("language") === "jp"
                    ? "-300万円"
                    : "$-300M"}
                </Box>
              </Box>
            </Box>
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
                localStorage.getItem("language") === "jp"
                  ? "元金の基準±20％の範囲"
                  : "Base ±20% range of principai"
              }
              labelPlacement="start"
            />
            {/* Base ±50% */}
            <Box sx={{ height: "32px" }}>
              <Box
                sx={{
                  width: "100%",
                  background: theme.palette.secondary[600],
                  borderBottom: "1px solid #ffff",
                }}
              >
                <Box
                  sx={{
                    width: "44%",
                    height: "100%",
                    background: "#ff754b",
                    color: "#fff",
                    fontSize: "10px",
                    textAlign: "end",
                    pr: "3px",
                  }}
                >
                  {localStorage.getItem("language") === "jp"
                    ? "550万円"
                    : "$550M"}
                </Box>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  background: theme.palette.secondary[600],
                  borderBottom: "1px solid #ffff",
                }}
              >
                <Box
                  sx={{
                    width: "22%",
                    height: "100%",
                    background: "#b3b3b3",
                    color: "#fff",
                    fontSize: "7px",
                    textAlign: "end",
                    pr: "3px",
                  }}
                >
                  {localStorage.getItem("language") === "jp"
                    ? "-330万円"
                    : "$-330M"}
                </Box>
              </Box>
            </Box>

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
                localStorage.getItem("language") === "jp"
                  ? "元金の基準±50％の範囲"
                  : "Base ±50% range of principai"
              }
              labelPlacement="start"
            />
            {/* Base ±100% */}
            <Box sx={{ height: "32px" }}>
              <Box
                sx={{
                  width: "100%",
                  background: theme.palette.secondary[600],
                  borderBottom: "1px solid #ffff",
                }}
              >
                <Box
                  sx={{
                    width: "44%",
                    height: "100%",
                    background: "#ff754b",
                    color: "#fff",
                    fontSize: "10px",
                    textAlign: "end",
                    pr: "3px",
                  }}
                >
                  {localStorage.getItem("language") === "jp"
                    ? "600万円"
                    : "$600M"}
                </Box>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  background: theme.palette.secondary[600],
                  borderBottom: "1px solid #ffff",
                }}
              >
                <Box
                  sx={{
                    width: "22%",
                    height: "100%",
                    background: "#b3b3b3",
                    color: "#fff",
                    fontSize: "7px",
                    textAlign: "end",
                    pr: "3px",
                  }}
                >
                  {localStorage.getItem("language") === "jp"
                    ? "420万円"
                    : "$-420M"}
                </Box>
              </Box>
            </Box>

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
                localStorage.getItem("language") === "jp"
                  ? "元金の基準±100％の範囲"
                  : "Base ±100% range of principai"
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
            background: "#fff",
          }}
        >
          <Link to={localStorage.getItem("language") === "jp"
                  ? "/projection/default"
                  : "/survey/fourth"} sx={{}}>
            {/* Continue */}
            <Continue />
          </Link>
        </Box>
      </Box>
      <FixedBottomNavigation/>
    </Box>
  );
}
export default SurveyThird;

//
