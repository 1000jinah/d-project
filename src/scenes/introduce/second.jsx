import React from "react";
import { Box, IconButton, useTheme, Typography, Stack } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import FlexBetween from "components/FlexBetween";
import IntroImgSecond from "../../assets/img_illustration_introduction_second.svg";
import SlideEmptyIcon from "../../assets/icon_circle_slide_empty.svg";
import SlideFillIcon from "../../assets/icon_circle_slide_fill.svg";
import { Link } from "react-router-dom";
function MarginBar() {
  return (
    <Box
      sx={{
        height: 40,
      }}
    />
  );
}
function IntroduceSecond() {
  const theme = useTheme();
  return (
    <Box sx={{ width: "100%", pl: "1rem", pr: "2rem", py: "0.5rem" }} theme={theme}>
      <Stack direction="column">
        {/* Intro Header */}
        <Box>
          <FlexBetween>
            <IconButton
              component={Link}
              to="/introduce/first"
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
            <Typography sx={{textDecoration: "underline", color:theme.palette.secondary[0], fontSize: "12px"}}>
                Skip
            </Typography>
          </Link>
          </FlexBetween>
        </Box>

        {/* Intro Image */}
        <MarginBar />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            height:"220px"
          }}
        >
          <img
            className="thumbnail"
            src={IntroImgSecond}
            alt="IntroImgSecond"
          ></img>
        </Box>

        {/* Intro Text  */}
        <MarginBar />
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4">How excition will you</Typography>
          <Typography variant="h4" sx={{ mt: "12px" }}>
            retirement adventures be?
          </Typography>
        </Box>

        {/* Intro Bottom Buttons  */}
        <MarginBar />
        <Box sx={{ textAlign: "center", height: "50px", display: "flex", alignItems: "center"   }}>
          <FlexBetween>
            <Box>
              <IconButton component={Link} to="/introduce/first">
                <img
                  className="thumbnail"
                  src={SlideEmptyIcon}
                  alt="SlideEmptyIcon"
                ></img>
              </IconButton>
              <IconButton component={Link} to="/introduce/second">
                <img
                  className="thumbnail"
                  src={SlideFillIcon}
                  alt="SlideFillIcon"
                ></img>
              </IconButton>
              <IconButton component={Link} to="/introduce/third">
                <img
                  className="thumbnail"
                  src={SlideEmptyIcon}
                  alt="SlideEmptyIcon"
                ></img>
              </IconButton>
            </Box>
          </FlexBetween>
        </Box>
      </Stack>
    </Box>
  );
}
export default IntroduceSecond;
