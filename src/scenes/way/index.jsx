import * as React from "react";
// import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Box, useTheme, IconButton } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import ArrowUpIcon from "../../assets/icon_arrow_up.svg";
import ArrowDownIcon from "../../assets/icon_arrow_down.svg";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import QuickImage from "../../assets/img_illustration_quick.svg";
import CompreImage from "../../assets/icon_illustration_comprehensive.svg";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import DefaultButton from "components/DefaultButton";
import { ArrowBack } from "@mui/icons-material";
import TranslateButton from "../../components/Translate";
import { useTranslation } from "react-i18next";
const QuickTitle = () => {
  const { t } = useTranslation("page");
  return (
    <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold" }}>
      {t("Quick")}
    </Typography>
  );
};
const QuickDescript = () => {
  const { t } = useTranslation("page");
  return (
    <Typography sx={{ color: "#808080" }}>
      {/* theme.palette.secondary[500] */}
      {t("QuickDescript")}
    </Typography>
  );
};
const CompreTitle = () => {
  const { t } = useTranslation("page");
  return (
    <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold" }}>
      {t("Comprehensive")}
    </Typography>
  );
};
const CompreDescript = () => {
  const { t } = useTranslation("page");
  return (
    <Typography sx={{ color: "#808080" }}>
      {/* theme.palette.secondary[500] */}
      {t("CompreDescript")}
    </Typography>
  );
};
const TwoMin = () => {
  const { t } = useTranslation("page");
  return <Typography sx={{ textAlign: "center" }}>{t("TwoMin")}</Typography>;
};
const EightMin = () => {
  const { t } = useTranslation("page");
  return <Typography sx={{ textAlign: "center" }}>{t("EightMin")}</Typography>;
};
const Selected = () => {
  const { t } = useTranslation("page");
  return <DefaultButton buttonName={t("Selected")} />;
};
// const WayText = () => {
//   const { t } = useTranslation("main");
//   return (
//     <div className="content-button-wrap">
//       <button className="content-button">{t("writeCtsBtn")}</button>
//       <button className="content-button">{t("listCtsBtn")}</button>
//     </div>
//   );
// };
function MarginBar() {
  return (
    <Box
      sx={{
        height: 20,
      }}
    />
  );
}
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  body: {
    backgroundColor: theme.palette.secondary[800],
  },
  backgroundColor: "rgba(255, 255, 255, .05)",
  //   border: `1px solid ${theme.palette.divider}`,
  border: "none",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(
  ({ theme }) => ({
    flexDirection: "row-reverse",

    "& .MuiAccordionSummary-expandIconWrapper": {
      position: "absolute",
      bottom: "20px",
    },
    // "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    //   transform: "rotate(90deg)",
    // },
    "& .MuiAccordionSummary-content": {
      height: "180px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    "& .MuiCollapse-root": {
      height: "100%",
    },
  })
);

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  // const { t }  = useTranslation(['page'])

  // const onChangeLang = () => {
  //     i18n.changeLanguage('ko')
  // }
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState("panel1");
  const handleChange = (panel1) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel1 : false);
  };

  return (
    <Box theme={theme}>
      {/* Way Header */}
      <Box
        expanded={expanded === "panel1"}
        sx={{
          backgroundColor:
            expanded === "panel1"
              ? theme.palette.secondary[800]
              : theme.palette.secondary[1000],
          px: "1rem",
          py: "0.5rem",
        }}
      >
        <FlexBetween>
          <IconButton
            component={Link}
            to="/introduce"
            sx={{
              color:
                theme === "dark"
                  ? theme.palette.primary[1000]
                  : theme.palette.primary[0],
            }}
          >
            <ArrowBack />
          </IconButton>
          <TranslateButton />
        </FlexBetween>
      </Box>
      {/* Quick Accordion */}
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expanded={expanded === "panel1"}
          sx={{
            borderTop: "1px solid #000",
            borderBottom: "1px solid #000",
            display: expanded === "panel1" ? "none" : "block",
          }}
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          {/* Quick */}
          <QuickTitle />
          <MarginBar />
          {/* 2 min */}
          <TwoMin />
          <Box
            sx={{
              position: "absolute",
              bottom: "10px",
              ml: "-0.5rem",
              left: "50%",
            }}
          >
            <img
              sx={{
                fontSize: "0.9rem",
              }}
              src={ArrowDownIcon}
              alt="ArrowDownIcon"
            />
          </Box>
        </AccordionSummary>

        <AccordionDetails
          expanded={expanded === "panel1"}
          sx={{
            height: "calc(100vh -180px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderTop: "none",
            textAlign: "center",
            backgroundColor: theme.palette.secondary[800],
            // display: expanded === "panel1" ? "block" : "none",
          }}
        >
          <Box>
            <img className="thumbnail" src={QuickImage} alt="QuickImage"></img>
          </Box>
          <MarginBar />
          {/* Quick */}
          <QuickTitle />
          <MarginBar />
          {/* 2 min  */}
          <TwoMin />
          <MarginBar />

          {/* Uses extimates for income, saving and expenses. You can always add
            and update your information later. */}
          <QuickDescript />

          <MarginBar />
          <Link to="/goal/first">
            {/* Selected Button */}
            <Selected />
          </Link>
          <MarginBar />
        </AccordionDetails>
      </Accordion>

      {/* Comprehensive Accordion */}
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expanded={expanded === "panel2"}
          sx={{
            borderTop: "1px solid #000",
            display: expanded === "panel2" ? "none" : "block",
          }}
          aria-controls="panel2d-content"
          id="panel2d-header"
        >
          <Box
            sx={{
              position: "absolute",
              top: "10px",
              ml: "-0.5rem",
              left: "50%",
            }}
          >
            <img
              sx={{
                fontSize: "0.9rem",
              }}
              src={ArrowUpIcon}
              alt="ArrowUpIcon"
            />
          </Box>

          {/* Comprehensive */}
          <CompreTitle />

          {/* 8 min */}
          <EightMin />
        </AccordionSummary>

        <AccordionDetails
          sx={{
            height: "50vh + 100px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderTop: "none",
            textAlign: "center",
            backgroundColor: theme.palette.secondary[800],
            "& .MuiPaper-root-MuiAccordion-root": {
              transition: "height 300ms ease",
            },
          }}
        >
          <Box>
            <img
              className="thumbnail"
              src={CompreImage}
              alt="CompreImage"
            ></img>
          </Box>
          <MarginBar />
          <Typography
            variant="h4"
            sx={{ textAlign: "center", fontWeight: "bold" }}
          >
            {/* Comprehensive */}
            <CompreTitle />
          </Typography>
          <MarginBar />
          <Typography sx={{ textAlign: "center" }}>
            {/* 8 min */}
            <EightMin />
          </Typography>
          <MarginBar />
          <Typography sx={{ color: theme.palette.secondary[500] }}>
            {/* You can still estimate, but this allows you to input more information about your financesso your plan will  be more accurate once you're done. */}
            <CompreDescript />
          </Typography>
          <MarginBar />
          <Link to="/goal/first">
            {/* Selected Button */}
            <Selected />
          </Link>
          <MarginBar />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
