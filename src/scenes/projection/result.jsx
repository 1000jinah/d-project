import React from "react";
import { ArrowBack } from "@mui/icons-material";
import {
  Box,
  useTheme,
  //   FormControl,
  IconButton,
  Typography,
  Tab,

  // Icon,
  // List,
  // ListItem,
  // ListItemText,
  // ListItemButton,
  //   Typography,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import BasicTable from "../../components/HoldingTable";
import ResultTable from "../../components/ResultTable";
// import DefaultButton from "components/DefaultButton";
import FlexBetween from "components/FlexBetween";
// import Header from "components/Header";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";
import OutcomeChart from "../../components/OutcomeChart";
// import SwipeableEdgeDrawer from "components/DrawerChart";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

// import InfoMountainIcon from "../../assets/icon_mountain_information.svg";
// import ProjectionSliders from "components/Sliders";
import SwipeableEdgeDrawer from "components/ResultDrawer";
const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : "#000",
}));
function MarginBar() {
  return (
    <Box
      sx={{
        height: 20,
      }}
    />
  );
}

// function StepSpaceBar() {
//   return (
//     <Box
//       sx={{
//         mx: "2px",
//       }}
//     />
//   );
// }
function ProjectionResult() {
  const theme = useTheme();
  //   const [message, setMessage] = useState("");
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
        "& .MuiTab-root.Mui-selected": {
          color: "& .MuiTab-root.Mui-selected"
            ? "#ff754b"
            : theme.palette.secondary[800],
        },
        "& .MuiTabs-indicator": {
          backgroundColor: "& .MuiTab-root.Mui-selected" ? "#ff754b" : "none",
        },
      }}
    >
      <Box
        sx={{
          // backgroundColor: theme.palette.secondary[900],
          pl: "1rem",
          pr: "2rem",
          // py: "0.5rem",
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          backgroundColor: "#fafafa",
          py: 2,
          zIndex: "1000",
        }}
      >
        <FlexBetween sx={{}}>
          <IconButton
            component={Link}
            to="/survey/eleventh"
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
          <Typography
            sx={{
              width: "100%",
              ml: -2,
              textAlign: "center",
            }}
          >
            {value === "1"
              ? "Projection Profile"
              : value === "2"
              ? "Asset Allocation"
              : "Holding Details"}
          </Typography>

          {/* Skip  */}
          {/* <Link
            variant="text"
            sx={{
              color:
                theme === "dark"
                  ? theme.palette.primary[1000]
                  : theme.palette.primary[0],
              textTransform: "capitalize",
              
            }}
            to="/way"
          >
            <Typography
              sx={{
                visibility: "hidden",
                textDecoration: "underline",
                color: theme.palette.secondary[0],
                fontSize: "12px",
              }}
            >
              Skip
            </Typography>
          </Link> */}
        </FlexBetween>
      </Box>
      <Box
        mt="3.2rem"
        // p="1.2rem 1.6rem"
        p="0.8rem"
        height="100%"
        minHeight="667px"
        sx={{ background: theme.palette.secondary[900] }}
      >
        <Box sx={{ width: "100%" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                indicatorColor="#ff754b"
                centered
                sx={
                  {
                    //   textColor: tabIndex ="0" ? "#ff754b" : "#000",
                  }
                }
              >
                <Tab
                  sx={{ fontSize: "9px", p: " 0.45rem 0.5rem" }}
                  label="Projection Profile"
                  value="1"
                />
                <Tab
                  sx={{ fontSize: "9px", p: " 0.45rem 0.5rem" }}
                  label="Asset Allocation"
                  value="2"
                />
                <Tab
                  sx={{ fontSize: "9px", p: " 0.45rem 0.5rem" }}
                  label="Holding Details"
                  value="3"
                />
              </TabList>
            </Box>
            <TabPanel value="1" sx={{ p: "0", m: " 0" }}>
              <MarginBar />
              <Box>
                <Typography sx={{ mb: "10px", textIndent: "10px" }}>
                  Expected Outcome
                </Typography>

                <Typography
                  variant="h1"
                  sx={{
                    textIndent: "10px",
                    fontWeight: "bold",
                    letterSpacing: "-1px",
                  }}
                >
                  $ 169,769
                </Typography>
              </Box>
              <MarginBar />
              <Box>
                <StyledBox>
                  <Box>
                    {/* <Header title="Bar Chart" subtitle="Simple Bar Chart" /> */}
                    <Box sx={{ height: "350px" }}>
                      <OutcomeChart />
                      <Box sx={{ mt: "-45px" }}>
                        {/* <FlexBetween>
                          <Typography fontWeight={"bold"}>2020</Typography>
                          <Typography fontWeight={"bold"}>2060</Typography>
                        </FlexBetween> */}
                      </Box>
                    </Box>
                  </Box>

                  {/* <Skeleton variant="rectangular" height="100%" /> */}
                </StyledBox>
              </Box>
              <FlexBetween sx={{ backgroundColor: "#000", p: "1rem" }}>
                {/* Risk Score */}
                <Box width={"100%"}>
                  <Typography
                    variant="h4"
                    pb={1}
                    mb={0.5}
                    borderBottom={"1px solid"}
                    borderBottomColor={theme.palette.secondary[200]}
                    color={theme.palette.secondary[900]}
                  >
                    5
                  </Typography>
                  <Typography
                    fontSize={"10px"}
                    color={theme.palette.secondary[200]}
                  >
                    Risk Score
                  </Typography>
                </Box>
                {/* Edit score retake test */}
                <Box width={"100%"} mx={1}>
                  <Typography
                    variant="h4"
                    borderBottom={"1px solid"}
                    pb={1}
                    mb={0.5}
                    borderBottomColor={theme.palette.secondary[200]}
                    color={theme.palette.secondary[900]}
                  >
                    5
                  </Typography>
                  <Typography
                    fontSize={"10px"}
                    color={theme.palette.secondary[200]}
                  >
                    Edit score retake test
                  </Typography>
                </Box>
                {/* Expected Return */}
                <Box width={"100%"}>
                  <Typography
                    variant="h4"
                    pb={1}
                    mb={0.5}
                    borderBottom={"1px solid"}
                    borderBottomColor={theme.palette.secondary[200]}
                    color={theme.palette.secondary[900]}
                  >
                    9.8%
                  </Typography>
                  <Typography
                    fontSize={"10px"}
                    color={theme.palette.secondary[200]}
                  >
                    Expected Return
                  </Typography>
                </Box>
              </FlexBetween>
              <MarginBar />
              <ResultTable />
              <MarginBar />
            </TabPanel>
            <TabPanel value="2" sx={{ p: "0", m: " 0" }}>
              <MarginBar />
              <Box>
                <Typography sx={{ mb: "10px", textIndent: "10px" }}>
                  Expected Outcome
                </Typography>

                <Typography
                  variant="h1"
                  sx={{
                    textIndent: "10px",
                    fontWeight: "bold",
                    letterSpacing: "-1px",
                  }}
                >
                  $ 169,769
                </Typography>
              </Box>
              <MarginBar />
              <Box>
                <StyledBox>
                  <Box>
                    {/* <Header title="Bar Chart" subtitle="Simple Bar Chart" /> */}
                    <Box sx={{ height: "350px" }}>
                      <PieChart />
                      <Box sx={{ mt: "-45px" }}>
                        {/* <FlexBetween>
                          <Typography fontWeight={"bold"}>2020</Typography>
                          <Typography fontWeight={"bold"}>2060</Typography>
                        </FlexBetween> */}
                      </Box>
                    </Box>
                  </Box>

                  {/* <Skeleton variant="rectangular" height="100%" /> */}
                </StyledBox>
              </Box>
              <FlexBetween sx={{ backgroundColor: "#000", p: "1rem" }}>
                {/* Risk Score */}
                <Box width={"100%"}>
                  <Typography
                    variant="h4"
                    pb={1}
                    mb={0.5}
                    borderBottom={"1px solid"}
                    borderBottomColor={theme.palette.secondary[200]}
                    color={theme.palette.secondary[900]}
                  >
                    5
                  </Typography>
                  <Typography
                    fontSize={"10px"}
                    color={theme.palette.secondary[200]}
                  >
                    Risk Score
                  </Typography>
                </Box>
                {/* Edit score retake test */}
                <Box width={"100%"} mx={1}>
                  <Typography
                    variant="h4"
                    borderBottom={"1px solid"}
                    pb={1}
                    mb={0.5}
                    borderBottomColor={theme.palette.secondary[200]}
                    color={theme.palette.secondary[900]}
                  >
                    5
                  </Typography>
                  <Typography
                    fontSize={"10px"}
                    color={theme.palette.secondary[200]}
                  >
                    Edit score retake test
                  </Typography>
                </Box>
                {/* Expected Return */}
                <Box width={"100%"}>
                  <Typography
                    variant="h4"
                    pb={1}
                    mb={0.5}
                    borderBottom={"1px solid"}
                    borderBottomColor={theme.palette.secondary[200]}
                    color={theme.palette.secondary[900]}
                  >
                    9.8%
                  </Typography>
                  <Typography
                    fontSize={"10px"}
                    color={theme.palette.secondary[200]}
                  >
                    Expected Return
                  </Typography>
                </Box>
              </FlexBetween>
              <MarginBar />
              <ResultTable />
              <MarginBar />
            </TabPanel>
            <TabPanel value="3" sx={{ p: "0", m: " 0" }}>
              {" "}
              <MarginBar />
              <Box>
                <Typography sx={{ mb: "10px", textIndent: "10px" }}>
                  Expected Outcome
                </Typography>

                <Typography
                  variant="h1"
                  sx={{
                    textIndent: "10px",
                    fontWeight: "bold",
                    letterSpacing: "-1px",
                  }}
                >
                  $ 169,769
                </Typography>
              </Box>
              <MarginBar />
              <Box>
                <StyledBox>
                  <Box>
                    {/* <Header title="Bar Chart" subtitle="Simple Bar Chart" /> */}
                    <Box sx={{ height: "50px" }}>
                      <BarChart />
                    </Box>
                    <Box px={1}>
                      <BasicTable />
                    </Box>
                  </Box>

                  {/* <Skeleton variant="rectangular" height="100%" /> */}
                </StyledBox>
              </Box>
              <FlexBetween sx={{ backgroundColor: "#000", p: "1rem" }}>
                {/* Risk Score */}
                <Box width={"100%"}>
                  <Typography
                    variant="h4"
                    pb={1}
                    mb={0.5}
                    borderBottom={"1px solid"}
                    borderBottomColor={theme.palette.secondary[200]}
                    color={theme.palette.secondary[900]}
                  >
                    5
                  </Typography>
                  <Typography
                    fontSize={"10px"}
                    color={theme.palette.secondary[200]}
                  >
                    Risk Score
                  </Typography>
                </Box>
                {/* Edit score retake test */}
                <Box width={"100%"} mx={1}>
                  <Typography
                    variant="h4"
                    borderBottom={"1px solid"}
                    pb={1}
                    mb={0.5}
                    borderBottomColor={theme.palette.secondary[200]}
                    color={theme.palette.secondary[900]}
                  >
                    5
                  </Typography>
                  <Typography
                    fontSize={"10px"}
                    color={theme.palette.secondary[200]}
                  >
                    Edit score retake test
                  </Typography>
                </Box>
                {/* Expected Return */}
                <Box width={"100%"}>
                  <Typography
                    variant="h4"
                    pb={1}
                    mb={0.5}
                    borderBottom={"1px solid"}
                    borderBottomColor={theme.palette.secondary[200]}
                    color={theme.palette.secondary[900]}
                  >
                    9.8%
                  </Typography>
                  <Typography
                    fontSize={"10px"}
                    color={theme.palette.secondary[200]}
                  >
                    Expected Return
                  </Typography>
                </Box>
              </FlexBetween>
              <MarginBar />
              <ResultTable />
              <MarginBar />
            </TabPanel>
          </TabContext>
        </Box>
        {/* <Box sx={{ textAlign: "center" }}>
          <img src={CoinQueIcon} alt={CoinQueIcon} />
        </Box> */}
        <SwipeableEdgeDrawer />
      </Box>
    </Box>
  );
}

export default ProjectionResult;
