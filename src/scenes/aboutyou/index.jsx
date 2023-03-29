import React from "react";
import { ArrowBack } from "@mui/icons-material";
import {
  Box,
  useTheme,
  FormControl,
  IconButton,
  Typography,
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
import NativeSelect from "@mui/material/NativeSelect";
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
        "& .MuiNativeSelect-select ": {
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
        p="1.2rem 1.6rem"
        height="100%"
        minHeight="667px"
        sx={{ backgroundColor: "#fafafa" }}
      >
        <Header
          title={"About You"}
          subtitle={"Please enter or choose the basic information."}
        />

        {/* Investment Horizon Start */}
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
          Investment Horizon
        </Typography>
        <FormControl fullWidth>
          <NativeSelect
            defaultValue={50}
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
          >
            <option value={10}>1 Year</option>
            <option value={20}>2 Year</option>
            <option value={30}>3 Year</option>
            <option value={40}>4 Year</option>
            <option value={50}>5 Year</option>
            <option value={60}>6 Year</option>
            <option value={70}>7 Year</option>
            <option value={80}>8 Year</option>
            <option value={90}>9 Year</option>
            <option value={100}>10 Year</option>
          </NativeSelect>
        </FormControl>
        {/* Investment Horizon End */}

        <MarginBar />

        {/* Monthly Investment Amount Start */}
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
          Monthly Investment Amount
        </Typography>
        <FormControl fullWidth>
          <NativeSelect
            defaultValue={50}
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
          >
            <option value={10}>$ 5,000</option>
            <option value={20}>$ 10,000</option>
            <option value={30}>$ 15,000</option>
            <option value={40}>$ 20,000</option>
            <option value={50}>$ 25,000</option>
            <option value={60}>$ 30,000</option>
            <option value={70}>$ 35,000</option>
            <option value={80}>$ 45,000</option>
            <option value={90}>$ 50,000</option>
            <option value={100}>$ 55,000</option>
          </NativeSelect>
        </FormControl>
        {/* Monthly Investment Amount End */}

        <MarginBar />

        {/* Target Investment Amount Start */}
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
          Target Investment Amount
        </Typography>
        <FormControl fullWidth>
          <NativeSelect
            defaultValue={30}
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
          >
            <option value={10}>$ 50,000</option>
            <option value={20}>$ 100,000</option>
            <option value={30}>$ 150,000</option>
            <option value={40}>$ 200,000</option>
            <option value={50}>$ 250,000</option>
            <option value={60}>$ 300,000</option>
            <option value={70}>$ 350,000</option>
            <option value={80}>$ 450,000</option>
            <option value={90}>$ 500,000</option>
            <option value={100}>$ 550,000</option>
          </NativeSelect>
        </FormControl>
        {/* Target Investment Amount End */}

        <MarginBar />

        {/* Initial Investment Amount Start */}
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
          Initial Investment Amount
        </Typography>
        <FormControl fullWidth>
          <NativeSelect
            defaultValue={50}
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
          >
            <option value={10}>$ 5,000</option>
            <option value={20}>$ 10,000</option>
            <option value={30}>$ 15,000</option>
            <option value={40}>$ 20,000</option>
            <option value={50}>$ 25,000</option>
            <option value={60}>$ 30,000</option>
            <option value={70}>$ 35,000</option>
            <option value={80}>$ 45,000</option>
            <option value={90}>$ 50,000</option>
            <option value={100}>$ 55,000</option>
          </NativeSelect>
        </FormControl>
        {/* Initial Investment Amount End */}

        <MarginBar />

        <Link to={"/survey/first"}>
          <DefaultButton
            buttonName={"Continue"}
            sx={{
              backgroundColor: theme.palette.secondary[100],
            }}
          />
        </Link>

        {/* <Box sx={{ color: "#fd3f01" }}>
          Check profile
        </Box> */}
        <SwipeableEdgeDrawer />
      </Box>
    </Box>
  );
}
export default PortfolioName;

//
