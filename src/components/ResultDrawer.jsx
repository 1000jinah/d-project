import * as React from "react";
// import PropTypes from "prop-types";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Icon, Input, FormControl, useTheme } from "@mui/material";
import DownPDFIcon from "../assets/img_illustration_downloadpdf.svg";
import ArrowShareIcon from "../assets/icon_arrow_share.svg";
// import FlexBetween from "./FlexBetween";
// import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
// import { textAlign } from "@mui/system";
import { useTranslation } from "react-i18next";

const drawerBleeding = 64;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  ".PrivateSwipeArea-root": {
    display: "none",
  },
  "& .MuiTextField-root": {
    width: "25ch",
    color: theme.palette.primary[1000],
  },
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
function MarginBar() {
  return (
    <Box
      sx={{
        height: 20,
      }}
    />
  );
}
function SwipeableEdgeDrawer(props) {
  const theme = useTheme();
  const { window } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const DownloadButton = () => {
    const { t } = useTranslation("page");
    return (
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
        {t("Download")}
      </Button>
    );
  };

  const DownloadPDFTitle = () => {
    const { t } = useTranslation("page");
    return (
      <Typography variant="h3" sx={{ fontWeight: "bold" }}>
        {t("DownloadPDF")}
      </Typography>
    );
  };

  const DownloadPDFDescript = () => {
    const { t } = useTranslation("page");
    return (
      <Typography sx={{ lineHeight: "1.8", color: "#b3b3b3" }}>
        {t("DownloadPDFDescript")}
      </Typography>
    );
  };

  const DownloadPDFInputs = () => {
    const { t } = useTranslation("page");
    return (
      <Box sx={{ width: "100%", padding: "30px", pt: 3 }}>
        <FormControl variant="standard" sx={{ minWidth: "100%" }}>
          <Input
            type="text"
            id="Name"
            name="Name"
            placeholder={t("Name")}
            sx={{ padding: "4px 0px 8px" }}
          />
        </FormControl>
        <MarginBar />
        <FormControl variant="standard" sx={{ minWidth: "100%" }}>
          <Input
            type="text"
            id="MobileNumber"
            name="Mobile Number"
            placeholder={t("MobileNumber")}
            sx={{ padding: "4px 0px 8px" }}
          />
        </FormControl>
        <MarginBar />
        <FormControl variant="standard" sx={{ minWidth: "100%" }}>
          <Input
            type="text"
            id="EmailAddress"
            name="Email Address"
            placeholder={t("EmailAddress")}
            sx={{ padding: "4px 0px 8px" }}
          />
        </FormControl>
        <Button
          sx={{
            mt: "40px",
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
          {t("Submit")}
        </Button>
        <Box
          sx={{
            mt: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon width="auto">
            <img
              src={ArrowShareIcon}
              alt={ArrowShareIcon}
              width={"13px"}
              height={"13px"}
            />
          </Icon>
          <Typography fontWeight={"bold"} color="#fd3f01" ml={1}>
            {t("Share")}
          </Typography>
        </Box>
      </Box>
    );
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
            height: `calc(90% - ${drawerBleeding}px)`,
            overflow: open === false ? "" : "visible",
          },
        }}
      />
      <Box
        theme={theme}
        p="0.6rem"
        width={"100%"}
        boxSizing={"border-box"}
        sx={{
          textAlign: "center",
        }}
      >
        {/* DownloadButton */}
        <DownloadButton />
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
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "space-evenly",
            textAlign: "center",
            "& .MuiFormLabel-root:before": {
              color: theme.palette.primary[1000],
            },
            "& .MuiInput-root:after": {
              borderBottomColor:
                theme === "dark"
                  ? theme.palette.primary[900]
                  : theme.palette.secondary[0],
            },
            ".MuiIcon-root": {
              width: "auto",
              height: "auto",
            },
          }}
        >
          <Icon sx={{ width: "127px", height: "96px" }}>
            <img src={DownPDFIcon} alt={DownPDFIcon} />
          </Icon>
          {/* DownloadPDFTitle */}
          <DownloadPDFTitle />
          {/* DownloadPDFDescript */}
          <DownloadPDFDescript />
          {/* DownloadPDFInputs */}
          <DownloadPDFInputs />
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
