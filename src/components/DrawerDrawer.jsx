import * as React from "react";
// import PropTypes from "prop-types";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Icon } from "@mui/material";
import ConfirmIcon from "../assets/img_confirm.svg";
// import FlexBetween from "./FlexBetween";
// import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
// import { textAlign } from "@mui/system";

const drawerBleeding = 64;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  ".PrivateSwipeArea-root": {
    display: "none",
  },
  // backgroundColor:
  //   theme.palette.mode === "light"
  //     ? grey[100]
  //     : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 56,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 22,
  left: "calc(50% - 28px)",
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
      {/* <CssBaseline /> */}
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            // height: `calc(50% - ${drawerBleeding}px)`,
            overflow: open === false ? "" : "visible",
          },
        }}
      />
      <Box
        p="0.6rem"
        width={"100%"}
        boxSizing={"border-box"}
        sx={{
          textAlign: "center",
        }}
      >
        <Button
          onClick={toggleDrawer(true)}
          sx={{
            borderRadius: "0px",
            color: "#fff",
            py: 1,
            boxSizing: "border-box",
            width: "100%",
            fontWeight: "bold",
            fontSize: "16px",
            backgroundColor: "#000",
            textTransform: "capitalize",
          }}
        >
          Save Plan
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
          <Box sx={{ py: 4, px: 3, color: "#000" }}></Box>
        </StyledBox>
        <Box
          sx={{
            mb: 3,
            width: "100%",
            height: "230px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "space-evenly",
            textAlign: "center",
          }}
        >
          <Icon sx={{ width: "87px", height: "87px" }}>
            <img src={ConfirmIcon} alt={ConfirmIcon} />
          </Icon>
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            Save Your Plan Completely
          </Typography>
          <Typography sx={{ lineHeight: "1.8", color: "#808080" }}>
            If you want to access your previous plans <br /> you have set up,
            please go tp Your Lifte Goals.
          </Typography>
        </Box>
      </SwipeableDrawer>
    </Root>
  );
}

// SwipeableEdgeDrawer.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

export default SwipeableEdgeDrawer;
