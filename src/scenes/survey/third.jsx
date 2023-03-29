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
// import CoinQueIcon from "../../assets/img_illustration_coin_question1.svg";

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
function SurveyThird() {
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
                sx={{ width: "80%", height: "100%", background: "#ff754b" }}
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
        height="100%"
        minHeight="667px"
        sx={{ background: theme.palette.secondary[900] }}
      >
        <Header
          title={"What level of profit do you expect?"}
          subtitle={"Please check the appropriate items."}
        />
        {/* <Box sx={{ textAlign: "center" }}>
          <img src={CoinQueIcon} alt={CoinQueIcon} />
        </Box> */}
        <MarginBar />
        <FormControl sx={{ width: "100%", mb: 3 }}>
          {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            // defaultValue="female"
            name="radio-buttons-group"
          >
            {/* Base ±10% */}

            <Box sx={{}}>
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
                  $490M
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
                  $-250M
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
              label="Base ±10% range of principai"
              labelPlacement="start"
            />
            {/* Base ±20% */}

            <Box sx={{}}>
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
                  $520M
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
                  $-300M
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
              label="Base ±20% range of principai"
              labelPlacement="start"
            />
            {/* Base ±50% */}
            <Box sx={{}}>
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
                  $550M
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
                  $-330M
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
              label="Base ±50% range of principai"
              labelPlacement="start"
            />
            {/* Base ±100% */}
            <Box sx={{}}>
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
                  $600M
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
                  $-420M
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
              label="Base ±100% range of principai"
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
          <Link to={"/survey/fourth"} sx={{}}>
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
    </Box>
  );
}
export default SurveyThird;

//
