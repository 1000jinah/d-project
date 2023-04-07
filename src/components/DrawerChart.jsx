import * as React from "react";
// import PropTypes from "prop-types";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
// import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import { Icon } from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import InfoMountainIcon from "../assets/icon_mountain_information.svg";
// import { ResponsiveStream } from "@nivo/stream";
// import MyResponsiveStream from "components/Chart";
import StreamChart from "../components/StreamChart";
import FlexBetween from "../components/FlexBetween";
import { useTranslation } from "react-i18next";
const EnMoney = () => {
  const { t } = useTranslation("page");
  return <span>{t("EnMoney")}</span>;
};
const JpMoney = () => {
  const { t } = useTranslation("page");
  return <span sx={{ fontSize: "14px" }}>{t("JpMoney")}</span>;
};
const DrawerHeader = () => {
  const { t } = useTranslation("page");
  return (
    <Box sx={{ py: 4, px: 3, color: "#000" }}>
      <Typography>{t("InvestValue")}</Typography>
      <Box sx={{ display: "flex", alignItems: "baseline" }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", mr: 0.5 }}>
          {localStorage.getItem("language") === "en" ? (
            <EnMoney variant="h3" />
          ) : null}
          {localStorage.getItem("language") === "jp" ? "500,890 " : "5,000"}
          {/* {localStorage.getItem("language") === "en" ? "" : ""} */}
        </Typography>
        {localStorage.getItem("language") === "jp" ? <JpMoney /> : null}
      </Box>
    </Box>
  );
};
const AboutDrawerDescript = () => {
  const { t } = useTranslation("page");
  return (
    <Typography sx={{ fontSize: "0.78rem", ml: 1 }}>
      {t("AboutDrawerDescript")}
    </Typography>
  );
};

const drawerBleeding = 52;
const Root = styled("div")(({ theme }) => ({
  height: "100%",
  //   backgroundColor:
  //     theme.palette.mode === "light"
  //       ? grey[100]
  //       : theme.palette.background.default,
}));
const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));
const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));
function SwipeableEdgeDrawer(props) {
  const { window } = props;
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const CheckProfile = () => {
    const { t } = useTranslation("page");
    return (
      <Button
        onClick={toggleDrawer(true)}
        sx={{
          width: "100%",
          color: "#fd3f01",
          textTransform: "capitalize",
          p: "0",
          zIndex: "1200",
        }}
      >
        {t("CheckProfile")}
      </Button>
    );
  };

  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <Global
        styles={{
          ".MuiModal-root-MuiDrawer-root": {
            zIndex: "2001",
          },
          ".PrivateSwipeArea-root": {
            height: "0px",
          },
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: open === false ? "" : "visible",
          },
        }}
      />
      <Box sx={{ width: "100%", textAlign: "center", pt: 1 }}>
        {/* CheckProfile */}
        <CheckProfile />
      </Box>
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: "absolute",
            top: toggleDrawer === false ? "0" : -drawerBleeding,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            visibility: "visible",
            right: 0,
            left: 0,
          }}
        >
          <Puller zIndex={toggleDrawer === true ? "0" : "1"} />
          {/* Header */}
          <DrawerHeader />
        </StyledBox>
        <StyledBox>
          <Box>
            {/* <Header title="Bar Chart" subtitle="Simple Bar Chart" /> */}
            <Box sx={{ height: "200px" }}>
              <StreamChart />
              <Box sx={{ mt: "-45px", px: 2 }}>
                <FlexBetween>
                  <Typography fontWeight={"bold"}>2020</Typography>
                  <Typography fontWeight={"bold"}>2060</Typography>
                </FlexBetween>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              backgroundColor: "rgba(255, 117, 75, 0.1 )",
              p: "15px 20px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Icon>
              <img src={InfoMountainIcon} alt={InfoMountainIcon} />
            </Icon>
            {/* AboutDrawerDescript */}
            <AboutDrawerDescript wordBreak={"keep-all"} />
          </Box>
          {/* <Skeleton variant="rectangular" height="100%" /> */}
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}

// SwipeableEdgeDrawer.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func
// };

export default SwipeableEdgeDrawer;
