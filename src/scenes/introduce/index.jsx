import * as React from "react";
import { useTheme, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import FlexBetween from "components/FlexBetween";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
// import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
// import DefaultButton from "components/DefaultButton";
import Button from "@mui/material/Button";
// import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import IntroImgFirst from "../../assets/img_illustration_introduction_first.svg";
import IntroImgSecond from "../../assets/img_illustration_introduction_second.svg";
import IntroImgThird from "../../assets/img_illustration_introduction_third.svg";
// import { autoPlay } from "react-swipeable-views-utils";
import { useTranslation } from "react-i18next";
const IntroduceFirst = () => {
  const { t } = useTranslation("page");
  return <span>{t("IntroduceFirst")}</span>;
};
const IntroduceSecond = () => {
  const { t } = useTranslation("page");
  return <span>{t("IntroduceSecond")}</span>;
};
const IntroduceThird = () => {
  const { t } = useTranslation("page");
  return <span>{t("IntroduceThird")}</span>;
};
const StartButton = () => {
  const { t } = useTranslation("page");
  return (
    <Button
      sx={{
        borderRadius: "0px",
        color: "#fff",
        py: 1.4,
        boxSizing: "border-box",
        width: "122px",
        fontWeight: "bold",
        fontSize: "16px",
        backgroundColor: "#000",
        textTransform: "capitalize",
      }}
    >
      {t("Start")}
    </Button>
  );
};

const AutoPlaySwipeableViews = SwipeableViews;

const images = [
  {
    label: <IntroduceFirst />,
  },
  {
    label: <IntroduceSecond />,
  },
  {
    label: <IntroduceThird />,
  },
  // {
  //   toplabel: "How excition will you",
  //   midlabel: "retirement adventures be?",
  // },
  // {
  //   toplabel: "At the end of the day,",
  //   midlabel: "we want a place to call our own.",
  // },
  // {
  //   toplabel: "At the end of the day,",
  //   midlabel: "we want a place to call our own",
  //   btmlabel: "Let's turn dreams into reality.",
  // },
];
// function MarginBar() {
//   return (
//     <Box
//       sx={{
//         height: 40,
//       }}
//     />
//   );
// }
function Introduce() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;
  const Skip = () => {
    const { t } = useTranslation("page");
    return (
      <Typography
        sx={{
          display: activeStep === 2 ? "none" : "block",
          textDecoration: "underline",
          color: theme.palette.secondary[0],
          fontSize: "12px",
        }}
      >
        {t("Skip")}
      </Typography>
    );
  };

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          pl: "1rem",
          pr: "2rem",
          py: "0.5rem",
          position: "fixed",
          zIndex: "2000",
          top: "0",
          left: "0",
          right: "0",
          backgroundColor: "#fff",
        }}
      >
        <FlexBetween>
          <IconButton
            component={Link}
            to="/dashboard"
            sx={{
              color:
                theme === "dark"
                  ? theme.palette.primary[1000]
                  : theme.palette.primary[0],
            }}
          >
            <ArrowBack />
          </IconButton>
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
            to="/way"
          >
            {/* SkipButton */}
            <Skip />
          </Link>
        </FlexBetween>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "column",
          pt: 5,
          boxSizing: "border-box",
          height: "100vh",
          "& .MuiTypography-root": {
            lineHeight: 1.6,
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
          }}
        >
          <AutoPlaySwipeableViews
            style={{ overflow: "clip" }}
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {images.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box sx={{ overflow: "clip" }}>
                    <Box
                      component="img"
                      sx={{
                        height: "220px",
                        display: "block",
                        // maxWidth: 400,
                        overflow: "hidden",
                        width: "100%",
                        mb: 8,
                      }}
                      src={
                        index === 0
                          ? IntroImgFirst
                          : index === 1
                          ? IntroImgSecond
                          : IntroImgThird
                      }
                      // alt={step.label}
                    />
                    <Box
                      sx={{
                        textAlign: "center",
                        padding: "0 20px",
                        boxSizing: "border-box",
                      }}
                      onChangeIndex={handleStepChange}
                    >
                      <Typography variant="h4">
                        {activeStep === 0
                          ? images[0].label
                          : activeStep === 1
                          ? images[1].label
                          : images[2].label}
                      </Typography>
                    </Box>
                  </Box>
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          {/* Intro Text  */}
        </Box>
        {/* Intro Bottom Buttons  */}

        <Box
          sx={{
            width: "100%",
            ".start_link": {
              position: "absolute",
              bottom: "28px",
              right: "16px",
              display: activeStep !== 2 ? "none" : "block",
            },
            // ".start_btn": {
            //   padding: "10px 32px",
            // },
          }}
        >
          <MobileStepper
            sx={{
              position: "absolute",
              bottom: "40px",
              left: "16px",
              "& .MuiMobileStepper-dot": {
                backgroundColor: "#f3f3f3",
                width: "10px",
                height: "10px",
              },
              "& .MuiMobileStepper-dotActive": {
                backgroundColor: "#fd3f01",
              },
            }}
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            // nextButton={
            //   <Button
            //     size="small"
            //     onClick={handleNext}
            //     disabled={activeStep === maxSteps - 1}
            //   >
            //     Next
            //     {theme.direction === "rtl" ? (
            //       <KeyboardArrowLeft />
            //     ) : (
            //       <KeyboardArrowRight />
            //     )}
            //   </Button>
            // }
            // backButton={
            //   <Button
            //     size="small"
            //     onClick={handleBack}
            //     disabled={activeStep === 0}
            //   >
            //     {theme.direction === "rtl" ? (
            //       <KeyboardArrowRight />
            //     ) : (
            //       <KeyboardArrowLeft />
            //     )}
            //     Back
            //   </Button>
            // }
          />

          <Link to="/way" className="start_link">
            {/* StartButton */}
            <StartButton />
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Introduce;
