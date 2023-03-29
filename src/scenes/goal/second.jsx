import React from "react";
import Header from "components/Header";
import NextRoundIcon from "../../assets/icon_arrow_next.svg";
import AirBalloonIcon from "../../assets/img_illustration_airballoon@3x.png";
import OwnHomeIcon from "../../assets/img_illustration_house@3x.png";
import SavingIcon from "../../assets/img_illustration_saving@3x.png";
import WeddingFundIcon from "../../assets/img_illustration_wedding@3x.png";
import EducationIcon from "../../assets/img_illustration_education@3x.png";
import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { Link } from "react-router-dom";
import FlexBetween from "components/FlexBetween";
const GoalSecond = () => {
  const theme = useTheme();

  function MarginBar() {
    return (
      <Box
        sx={{
          height: 20,
        }}
      />
    );
  }
  return (
    <Box sx={{ width: "100%" }} theme={theme}>
      <Box
        sx={{
           backgroundColor: "#fafafa",
          pl: "1rem",
          pr: "2rem",
          py: "0.5rem",
        }}
      >
        <FlexBetween>
          <IconButton
            component={Link}
            to="/way"
            sx={{
              color:
                theme === "dark"
                  ? theme.palette.primary[1000]
                  : theme.palette.primary[0],
            }}
          >
            <ArrowBack />
          </IconButton>
        </FlexBetween>
      </Box>
      <Box
        p="1.2rem 1.6rem" height="100%" minHeight="667px"
        sx={{
           backgroundColor: "#fafafa",
        }}
      >
        {/* Header */}
        <Header
          sx={{ whiteSpace: "pre-line" }}
          title={"Your Goal"}
          subtitle={`Nice to meet you.`}
          moresubtitle={`What's your primary goal for this investment?`}
        />
        {/* Content */}
        <Stack direction={"column"}>
          <Box
            sx={{
              textDecoration: "none",
            }}
          >
            {/* Retirement */}
            <FlexBetween
              component={Link}
              to="/portname"
              sx={{
                position: "relative",
                backgroundColor: theme.palette.secondary[1000],
                border: "1px solid #000",
               p: "1rem 0.8rem",
                boxSizing: "border-box",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    pb: "20px",
                    color: theme.palette.secondary[0],
                  }}
                >
                  Retirement
                </Typography>

                <IconButton sx={{ p: "0px" }}>
                  <img src={NextRoundIcon} alt={NextRoundIcon} />
                </IconButton>
              </Box>
              <Box  sx={{ position: "absolute", bottom: "2px", right: "15px" }}>
                <img width={"82px"} src={AirBalloonIcon} alt={AirBalloonIcon} />
              </Box>
            </FlexBetween>

            <MarginBar />
            {/* Own home & Savings */}

            <FlexBetween>
              <FlexBetween
                component={Link}
                to="/portname"
                sx={{
                  position: "relative",
                  backgroundColor: theme.palette.secondary[1000],
                  border: "1px solid #000",
                  width: "47%",
                 p: "1rem 0.8rem",
                  boxSizing: "border-box",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      pb: "20px",
                      color: theme.palette.secondary[0],
                    }}
                  >
                    Own home
                  </Typography>

                  <IconButton sx={{ p: "0px" }}>
                    <img src={NextRoundIcon} alt={NextRoundIcon} />
                  </IconButton>
                </Box>
                <Box
                  sx={{ position: "absolute", bottom: "8px", right: "15px" }}
                >
                  <img width={"54px"} src={OwnHomeIcon} alt={OwnHomeIcon} />
                </Box>
              </FlexBetween>

              <FlexBetween
                component={Link}
                to="/portname"
                sx={{
                  width: "47%",
                  position: "relative",
                  backgroundColor: theme.palette.secondary[1000],
                  border: "1px solid #000",
                 p: "1rem 0.8rem",
                  boxSizing: "border-box",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      pb: "20px",
                      color: theme.palette.secondary[0],
                    }}
                  >
                    Savings
                  </Typography>

                  <IconButton sx={{ p: "0px" }}>
                    <img src={NextRoundIcon} alt={NextRoundIcon} />
                  </IconButton>
                </Box>
                <Box
                  sx={{ position: "absolute", bottom: "8px", right: "15px" }}
                >
                  <img width={"42px"} src={SavingIcon} alt={SavingIcon} />
                </Box>
              </FlexBetween>
            </FlexBetween>

            <MarginBar />
            {/* Wedding fund & Education */}

            <FlexBetween>
              <FlexBetween
                component={Link}
                to="/portname"
                sx={{
                  position: "relative",
                  backgroundColor: theme.palette.secondary[1000],
                  border: "1px solid #000",
                  width: "47%",
                 p: "1rem 0.8rem",
                  boxSizing: "border-box",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      pb: "20px",
                      color: theme.palette.secondary[0],
                    }}
                  >
                    Wedding fund
                  </Typography>

                  <IconButton sx={{ p: "0px" }}>
                    <img src={NextRoundIcon} alt={NextRoundIcon} />
                  </IconButton>
                </Box>
                <Box
                  sx={{ position: "absolute", bottom: "8px", right: "15px" }}
                >
                  <img
                    width={"48px"}
                    src={WeddingFundIcon}
                    alt={WeddingFundIcon}
                  />
                </Box>
              </FlexBetween>

              <FlexBetween
                component={Link}
                to="/portname"
                sx={{
                  width: "47%",
                  position: "relative",
                  backgroundColor: theme.palette.secondary[1000],
                  border: "1px solid #000",
                 p: "1rem 0.8rem",
                  boxSizing: "border-box",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      pb: "20px",
                      color: theme.palette.secondary[0],
                    }}
                  >
                    Education
                  </Typography>

                  <IconButton sx={{ p: "0px" }}>
                    <img src={NextRoundIcon} alt={NextRoundIcon} />
                  </IconButton>
                </Box>
                <Box
                  sx={{ position: "absolute", bottom: "8px", right: "15px" }}
                >
                  <img width={"50px"} src={EducationIcon} alt={EducationIcon} />
                </Box>
              </FlexBetween>
            </FlexBetween>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default GoalSecond;
