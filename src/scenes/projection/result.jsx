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
// import ResultTable from "../../components/ResultTable";
// import DefaultButton from "components/DefaultButton";
import FlexBetween from "components/FlexBetween";
// import Header from "components/Header";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";
// import OutcomeChart from "../../components/OutcomeChart";
import ProjectionChartImage from "../../assets/img_projectionprofile_chart.svg";
import AssetAllocationLabelImage from "../../assets/img_assetallocation_label.svg";
import AssetAllocationLabelJapanImage from "../../assets/img_assetallocation_label_jp.svg";
// import SwipeableEdgeDrawer from "components/DrawerChart";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useParams } from "react-router-dom";
// import InfoMountainIcon from "../../assets/icon_mountain_information.svg";
// import ProjectionSliders from "components/Sliders";
import SwipeableEdgeDrawer from "components/ResultDrawer";
import { useTranslation } from "react-i18next";
import FixedBottomNavigation from "components/BottomHomeButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";

import TableRow from "@mui/material/TableRow";
const EnMoney = () => {
  const { t } = useTranslation("page");
  return <span>{t("EnMoney")}</span>;
};
const JpMoney = () => {
  const { t } = useTranslation("page");
  return <span>{t("JpMoney")}</span>;
};

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
  const { profilename } = useParams();
  console.log(profilename);
  function createData(name, percentage) {
    return { name, percentage };
  }

  const rows = [
    createData(
      profilename === "1"
        ? localStorage.getItem("language") === "jp"
          ? "退職する予定年齢"
          : "Investment Horizon"
        : profilename === "2"
        ? localStorage.getItem("language") === "jp"
          ? "退職する予定年齢"
          : "Retirement Age"
        : localStorage.getItem("language") === "jp"
        ? "退職する予定年齢"
        : "Investment Horizon",
      profilename === "1"
        ? localStorage.getItem("language") === "jp"
          ? "65 歳"
          : "3 Years"
        : profilename === "2"
        ? localStorage.getItem("language") === "jp"
          ? "65 歳"
          : "70 Age"
        : localStorage.getItem("language") === "jp"
        ? "65 歳"
        : "10 Years"
    ),
    createData(
      profilename === "1"
        ? localStorage.getItem("language") === "jp"
          ? "退職後の収入"
          : "Target Investment Amount"
        : profilename === "2"
        ? localStorage.getItem("language") === "jp"
          ? "退職後の収入"
          : "Retirement income"
        : localStorage.getItem("language") === "jp"
        ? "退職後の収入"
        : "Target Investment Amount",
      profilename === "1"
        ? localStorage.getItem("language") === "jp"
          ? "15 万円"
          : "$ 4,500"
        : profilename === "2"
        ? localStorage.getItem("language") === "jp"
          ? "15 万円"
          : "$ 97,000"
        : localStorage.getItem("language") === "jp"
        ? "15 万円"
        : "$ 20,700"
    ),
    createData(
      profilename === "1"
        ? localStorage.getItem("language") === "jp"
          ? "初期投資金額"
          : "Initial Investment Amount"
        : profilename === "2"
        ? localStorage.getItem("language") === "jp"
          ? "初期投資金額"
          : "Initial Investment Amount"
        : localStorage.getItem("language") === "jp"
        ? "初期投資金額"
        : "Initial Investment Amount",
      profilename === "1"
        ? localStorage.getItem("language") === "jp"
          ? "10 万円"
          : "$ 1,000"
        : profilename === "2"
        ? localStorage.getItem("language") === "jp"
          ? "10 万円"
          : "$ 15,000"
        : localStorage.getItem("language") === "jp"
        ? "10 万円"
        : "$ 1,820"
    ),
    createData(
      profilename === "1"
        ? localStorage.getItem("language") === "jp"
          ? "毎月積立額"
          : "Monthly Investment Amount"
        : profilename === "2"
        ? localStorage.getItem("language") === "jp"
          ? "毎月積立額"
          : "Monthly Investment Amount"
        : localStorage.getItem("language") === "jp"
        ? "毎月積立額"
        : "Monthly Investment Amount",
      profilename === "1"
        ? localStorage.getItem("language") === "jp"
          ? "5 年"
          : "$ 1,160"
        : profilename === "2"
        ? localStorage.getItem("language") === "jp"
          ? "5 年"
          : "$ 2,000"
        : localStorage.getItem("language") === "jp"
        ? "5 年"
        : "$ 2,500"
    ),
  ];
  const ProjectionHeader = () => {
    const { t } = useTranslation("page");
    return (
      <Box>
        <Typography sx={{ mb: "10px", textIndent: "10px" }}>
          {t("ExpectedOutcome")}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "baseline" }}>
          <Typography
            variant="h1"
            sx={{
              textIndent: "8px",
              fontWeight: "bold",
              letterSpacing: "-1px",
              mr: 1,
            }}
          >
            {localStorage.getItem("language") === "en" ? <EnMoney /> : null}
            {profilename === "1"
              ? localStorage.getItem("language") === "jp"
                ? "169,769"
                : " 4,500"
              : profilename === "2"
              ? localStorage.getItem("language") === "jp"
                ? "169,769"
                : " 97,000"
              : localStorage.getItem("language") === "jp"
              ? "169,769"
              : " 21,700"}{" "}
          </Typography>
          <Typography variant="h4">
            {localStorage.getItem("language") === "jp" ? <JpMoney /> : null}
          </Typography>
        </Box>

        {/* <Box>
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
                </Box> */}
      </Box>
    );
  };

  const theme = useTheme();
  const ProjectionRiskBox = () => {
    const { t } = useTranslation("page");
    return (
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
          <Typography fontSize={"10px"} color={theme.palette.secondary[200]}>
            {localStorage.getItem("language") === "jp"
              ? "リスク許容度"
              : "Risk Score"}
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
          <Typography fontSize={"10px"} color={theme.palette.secondary[200]}>
            {localStorage.getItem("language") === "jp"
              ? "現在のリスク許容度"
              : "Edit score retake test"}
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
          <Typography fontSize={"10px"} color={theme.palette.secondary[200]}>
            {localStorage.getItem("language") === "jp"
              ? "期待リターン"
              : "Expected Return"}
          </Typography>
        </Box>
      </FlexBetween>
    );
  };
  const ChartYears = () => {
    const { t } = useTranslation("page");
    return (
      <Box>
        <FlexBetween>
          <Typography fontWeight={"bold"}>2020</Typography>
          <Typography
            fontWeight={"bold"}
            sx={{
              display:
                localStorage.getItem("language") === "en" && profilename === "1"
                  ? "block"
                  : "none",
            }}
          >
            2023
          </Typography>
          <Typography
            fontWeight={"bold"}
            sx={{
              display:
                profilename === "2" ||
                profilename !== "1" ||
                localStorage.getItem("language") === "jp"
                  ? "block"
                  : "none",
            }}
          >
            2030
          </Typography>
          <Typography
            fontWeight={"bold"}
            sx={{
              display:
                profilename === "2" || localStorage.getItem("language") === "jp"
                  ? "block"
                  : profilename !== "2"
                  ? "none"
                  : "block",
            }}
          >
            2040
          </Typography>
          <Typography
            fontWeight={"bold"}
            sx={{
              display:
                profilename === "2" || localStorage.getItem("language") === "jp"
                  ? "block"
                  : profilename !== "2"
                  ? "none"
                  : "block",
            }}
          >
            2050
          </Typography>
          <Typography
            fontWeight={"bold"}
            sx={{
              display:
                profilename === "2" || localStorage.getItem("language") === "jp"
                  ? "block"
                  : profilename !== "2"
                  ? "none"
                  : "block",
            }}
          >
            2060
          </Typography>
        </FlexBetween>
      </Box>
    );
  };

  const TableList = () => {
    const { t } = useTranslation("page");
    return (
      <Table sx={{}} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                width: "100%",
                height: "45px",
              }}
            >
              <TableCell
                sx={{ fontSize: "14px", p: "0px", color: "#808080" }}
                component="th"
                scope="row"
              >
                {row.name}
              </TableCell>
              <TableCell
                sx={{ p: "0px", fontSize: "14px", textAlign: "right" }}
              >
                {row.percentage}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };
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
            to="/mypage"
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
            {profilename === "1"
              ? localStorage.getItem("language") === "jp"
                ? "大学の進学資金"
                : "My College"
              : profilename === "2"
              ? localStorage.getItem("language") === "jp"
                ? "ゆとりのある老後の生活"
                : "My Life After Retirement"
              : localStorage.getItem("language") === "jp"
              ? "投資で50万円を調達"
              : "Rasing $21,700 in invest"}
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
        sx={{
          background: theme.palette.secondary[900],
          "& .MuiTabs-flexContainer": {
            justifyContent: "space-between",
          },
        }}
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
                  sx={{ fontSize: "12px", p: " 0.45rem 0.5rem" }}
                  label={
                    localStorage.getItem("language") === "jp"
                      ? "将来の予想"
                      : "Projection Profile"
                  }
                  value="1"
                />
                <Tab
                  sx={{ fontSize: "12px", p: " 0.45rem 0.5rem" }}
                  label={
                    localStorage.getItem("language") === "jp"
                      ? "ポートフォリオ"
                      : "Asset Allocation"
                  }
                  value="2"
                />
                <Tab
                  sx={{ fontSize: "12px", p: " 0.45rem 0.5rem" }}
                  label={
                    localStorage.getItem("language") === "jp"
                      ? "投資商品"
                      : "Holding Details"
                  }
                  value="3"
                />
              </TabList>
            </Box>
            <TabPanel value="1" sx={{ p: "0", m: " 0" }}>
              <MarginBar />
              {/* ProjectionHeader */}
              <ProjectionHeader />
              <MarginBar />
              <Box mb="0.8rem">
                <StyledBox>
                  <Box>
                    {/* <Header title="Bar Chart" subtitle="Simple Bar Chart" /> */}
                    <Box sx={{ m: "0.8rem", py: "0.8rem" }}>
                      {/* <OutcomeChart /> */}
                      <img
                        width="100%"
                        src={ProjectionChartImage}
                        alt={ProjectionChartImage}
                      />
                      {/* ChartYears */}
                      <ChartYears />
                    </Box>
                  </Box>

                  {/* <Skeleton variant="rectangular" height="100%" /> */}
                </StyledBox>
              </Box>
              {/* ProjectionRiskBox */}
              <ProjectionRiskBox />
              <MarginBar />
              <TableContainer
                component={Paper}
                sx={{
                  boxShadow: "none",
                  "& .MuiTableCell-root": {
                    padding: "10px",
                  },
                }}
              >
                <TableList />
              </TableContainer>

              <MarginBar />
            </TabPanel>
            <TabPanel value="2" sx={{ p: "0", m: " 0" }}>
              <MarginBar />
              {/* ProjectionHeader */}
              <ProjectionHeader />
              <MarginBar />
              <Box mb="0.8rem">
                <StyledBox>
                  <Box>
                    {/* <Header title="Bar Chart" subtitle="Simple Bar Chart" /> */}
                    <Box sx={{ height: "275px" }}>
                      <PieChart />
                      <Box
                        sx={{
                          mt: "-45px",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          textAlign="center"
                          src={
                            localStorage.getItem("language") === "en"
                              ? AssetAllocationLabelImage
                              : AssetAllocationLabelJapanImage
                          }
                          alt={
                            localStorage.getItem("language") === "en"
                              ? AssetAllocationLabelImage
                              : AssetAllocationLabelJapanImage
                          }
                        />
                      </Box>
                    </Box>
                  </Box>

                  {/* <Skeleton variant="rectangular" height="100%" /> */}
                </StyledBox>
              </Box>
              {/* ProjectionRiskBox */}
              <ProjectionRiskBox />
              <MarginBar />
              <TableContainer
                component={Paper}
                sx={{
                  boxShadow: "none",
                  "& .MuiTableCell-root": {
                    padding: "10px",
                  },
                }}
              >
                <TableList />
              </TableContainer>

              <MarginBar />
            </TabPanel>
            <TabPanel value="3" sx={{ p: "0", m: " 0" }}>
              <MarginBar />
              {/* ProjectionHeader */}
              <ProjectionHeader />
              <MarginBar />
              <Box mb="0.8rem">
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
              {/* ProjectionRiskBox */}
              <ProjectionRiskBox />
              <MarginBar />
              <TableContainer
                component={Paper}
                sx={{
                  boxShadow: "none",
                  "& .MuiTableCell-root": {
                    padding: "10px",
                  },
                }}
              >
                <TableList />
              </TableContainer>

              <MarginBar />
            </TabPanel>
          </TabContext>
        </Box>
        {/* <Box sx={{ textAlign: "center" }}>
          <img src={CoinQueIcon} alt={CoinQueIcon} />
        </Box> */}
        <SwipeableEdgeDrawer />
      </Box>
      <FixedBottomNavigation />
    </Box>
  );
}

export default ProjectionResult;
