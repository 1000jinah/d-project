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

  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: open === false ? "" : "visible",
          },
        }}
      />
      <Box sx={{ textAlign: "center", pt: 1 }}>
        <Button onClick={toggleDrawer(true)} sx={{ color: "#fd3f01" }}>
          Open
        </Button>
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
          <Puller />
          <Box sx={{ py: 4, px: 3, color: "#000" }}>
            <Typography>Investment Value</Typography>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              $ 500,890
            </Typography>
          </Box>
        </StyledBox>
        <StyledBox>
          <Box>
            {/* <Header title="Bar Chart" subtitle="Simple Bar Chart" /> */}
            <Box sx={{ height: "200px" }}>
              <StreamChart />
              <Box sx={{ mt: "-45px", px: 2}}>
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
            <Typography sx={{ fontSize: "0.78rem", ml: 1 }}>
              We automaically assume a savings growth rate of <br /> 5%. You can
              adjust this later.
            </Typography>
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
