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

const AutoPlaySwipeableViews = SwipeableViews;

const images = [
  {
    toplabel: "How excition will you",
    midlabel: "retirement adventures be?",
  },
  {
    toplabel: "At the end of the day,",
    midlabel: "we want a place to call our own.",
  },
  {
    toplabel: "At the end of the day,",
    midlabel: "we want a place to call our own",
    btmlabel: "Let's turn dreams into reality.",
  },
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
            to="/"
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
            <Typography
              sx={{
                display: activeStep === 2 ? "none" : "block",
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
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            position: "relative",
          }}
        >
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {images.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      height: "220px",
                      display: "block",
                      // maxWidth: 400,
                      overflow: "hidden",
                      width: "100%",
                      mb: 5,
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
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          {/* Intro Text  */}

          <Box sx={{ textAlign: "center" }} onChangeIndex={handleStepChange}>
            <Typography variant="h4">
              {activeStep === 0
                ? images[0].toplabel
                : activeStep === 1
                ? images[1].toplabel
                : images[2].toplabel}
            </Typography>
            <Typography variant="h4" sx={{ mt: "12px" }}>
              {activeStep === 0
                ? images[0].midlabel
                : activeStep === 1
                ? images[1].midlabel
                : images[2].midlabel}
            </Typography>
            <Typography variant="h4" sx={{ mt: "12px" }}>
              {activeStep === 2 ? images[2].btmlabel : null}
            </Typography>
          </Box>
        </Box>
        {/* Intro Bottom Buttons  */}

        <Box
          sx={{
            ".start_link": {
              position: "absolute",
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
              Start
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Introduce;
