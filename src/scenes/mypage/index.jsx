import React from "react";
import {
  Box,
  useTheme,
  IconButton,
  Typography,
  Icon,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import FlexBetween from "components/FlexBetween";
import MyPageProfile from "../../assets/img_user@3x.png";
import MyPageChart from "components/MyPageChart";
import MoneyIcon from "../../assets/icon_addnewlifeplan.svg";
import PlanAddIcon from "../../assets/icon_add.svg";
import CollegeIcon from "../../assets/icon_mycollege.svg";
import RetirementIcon from "../../assets/icon_retirement.svg";
import DollarsIcon from "../../assets/icon_raising50milliondollor.svg";
const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const MyPage = () => {
  const theme = useTheme();
  return (
    <Box
      theme={theme}
      sx={{
        "& .MuiIcon-root": {
          width: "auto",
          height: "auto",
        },
      }}
    >
      <Box
        sx={{
          // backgroundColor: theme.palette.secondary[900],

          backgroundColor: "#fafafa",
          py: 2,
          zIndex: "1000",
        }}
      >
        <Box sx={{ p: "1.2rem 1.6rem" }}>
          <FlexBetween mb={6}>
            <Box>
              <Typography
                variant="h5"
                sx={{
                  mb: 1.4,
                }}
              >
                May, 20 2023
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                }}
              >
                Your Life Plan
              </Typography>
            </Box>
            <Icon>
              <img width={"55px"} src={MyPageProfile} alt={MyPageProfile} />
            </Icon>
          </FlexBetween>
          <Typography variant="h5" fontWeight={"bold"}>
            Status by Plan
          </Typography>
        </Box>
        <Box>
          {/*  */}
          <StyledBox
            sx={{ height: "154px" }}
            borderBottom={"2px solid #000"}
            borderTop={"1px solid #000"}
          >
            <Box sx={{ height: "200px" }}>
              <MyPageChart />
              <Box sx={{ mt: "-40px", px: 3 }}>
                <FlexBetween>
                  <Typography>2021</Typography>
                  <Typography>2075</Typography>
                </FlexBetween>
              </Box>
            </Box>
          </StyledBox>
        </Box>

        <Box mt="45px">
          <Divider />
        </Box>
        <Box p={2}>
          <FlexBetween
            p={2}
            backgroundColor={"#fff"}
            boxShadow={"0 3px 5px rgb(199 199 199 / 0.16)"}
          >
            <FlexBetween>
              <Icon sx={{ lineHeight: "0.8" }}>
                <img src={MoneyIcon} alt={MoneyIcon} />
              </Icon>
              <Box ml={2}>
                <Typography color={"#211d1d"}>
                  Add your new life plan
                </Typography>
                <Typography fontSize={"11px"} color={"#808080"}>
                  Manage one's portfolio
                </Typography>
              </Box>
            </FlexBetween>
            <IconButton>
              <img src={PlanAddIcon} alt={PlanAddIcon} />
            </IconButton>
          </FlexBetween>
        </Box>

        <Box p={2}>
          <Box boxShadow={"0 3px 5px rgb(199 199 199 / 0.16)"}>
            <FlexBetween p={2} backgroundColor={"#fff"}>
              <Typography variant="h5" fontWeight={"bold"}>
                My Goals
              </Typography>
              <Typography color={"#fd3f01"} borderBottom={"1px solid #fd3f01"}>
                More
              </Typography>
            </FlexBetween>
            <FlexBetween p={2} backgroundColor={"#fff"}>
              <FlexBetween>
                <Icon sx={{ lineHeight: "0.8" }}>
                  <img src={CollegeIcon} alt={CollegeIcon} />
                </Icon>

                <Box ml={2}>
                  <Typography color={"#211d1d"}>
                    Life Plan Investment
                  </Typography>
                  <Typography fontSize={"11px"} color={"#808080"}>
                    My College
                  </Typography>
                </Box>
              </FlexBetween>
              <Box>
                <Typography fontWeight={"bold"}>$ 70M</Typography>
                <Typography
                  textAlign={"right"}
                  fontSize={"11px"}
                  color={"#808080"}
                >
                  42%
                </Typography>
              </Box>
            </FlexBetween>
            <Box px={2} pb={2} backgroundColor={"#fff"}>
              <Box width="100%" height="3px" backgroundColor="#e8e8e8">
                <Box width="42%" height="100%" backgroundColor="#f9af02"></Box>
              </Box>
            </Box>

            <FlexBetween p={2} backgroundColor={"#fff"}>
              <FlexBetween>
                <Icon sx={{ lineHeight: "0.8" }}>
                  <img src={RetirementIcon} alt={RetirementIcon} />
                </Icon>
                <Box ml={2}>
                  <Typography color={"#211d1d"}>
                    Life Plan investment
                  </Typography>
                  <Typography fontSize={"11px"} color={"#808080"}>
                    Retirement
                  </Typography>
                </Box>
              </FlexBetween>
              <Box>
                <Typography fontWeight={"bold"}>$ 75M</Typography>
                <Typography
                  textAlign={"right"}
                  fontSize={"11px"}
                  color={"#808080"}
                >
                  23%
                </Typography>
              </Box>
            </FlexBetween>
            <Box px={2} pb={2} backgroundColor={"#fff"}>
              <Box width="100%" height="3px" backgroundColor="#e8e8e8">
                <Box width="23%" height="100%" backgroundColor="#2e9875"></Box>
              </Box>
            </Box>

            <FlexBetween p={2} backgroundColor={"#fff"}>
              <FlexBetween>
                <Icon sx={{ lineHeight: "0.8" }}>
                  <img src={DollarsIcon} alt={DollarsIcon} />
                </Icon>
                <Box ml={2}>
                  <Typography color={"#211d1d"}>General Investment</Typography>
                  <Typography fontSize={"11px"} color={"#808080"}>
                    Rasing $50million investment
                  </Typography>
                </Box>
              </FlexBetween>
              <Box>
                <Typography fontWeight={"bold"}>$ 35M</Typography>
                <Typography
                  textAlign={"right"}
                  fontSize={"11px"}
                  color={"#808080"}
                >
                  68%
                </Typography>
              </Box>
            </FlexBetween>
            <Box px={2} pb={2} backgroundColor={"#fff"}>
              <Box width="100%" height="3px" backgroundColor="#e8e8e8">
                <Box width="68%" height="100%" backgroundColor="#3e7ad3"></Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MyPage;
