import React, { useState } from "react";
import { ArrowBack } from "@mui/icons-material";
import { Box, useTheme, FormControl, Input, IconButton } from "@mui/material";
import DefaultButton from "components/DefaultButton";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import { Link } from "react-router-dom";
function MarginBar() {
  return (
    <Box
      sx={{
        height: 50,
      }}
    />
  );
}
function PortfolioName() {
  const theme = useTheme();
  const [message, setMessage] = useState("");

  return (
    <Box
      theme={theme}
      sx={{
        display: "flex",
        flexDirection: "column",
        "&": {
          backgroundColor: theme.palette.secondary[900],
        },
        "& .MuiTextField-root": {
          width: "25ch",
          color: theme.palette.primary[1000],
        },
        "& .MuiFormLabel-root:before": {
          color: theme.palette.primary[1000],
        },
        "& .MuiInput-root:after": {
          borderBottomColor:
            theme === "dark"
              ? theme.palette.primary[900]
              : theme.palette.secondary[0],
        },
        "& .MuiButtonBase-root.MuiCheckbox-root.Mui-checked": {
          color:
            theme === "dark"
              ? theme.palette.primary[900]
              : theme.palette.secondary[0],
        },
      }}
    >
      <Box
        sx={{
           backgroundColor: "#fafafa",
          px: "1rem",
          py: "0.5rem",
        }}
      >
        <FlexBetween >
          <IconButton
            component={Link}
            to="/goal/first"
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
        p="1.2rem 1.6rem"
        height="100%"
        minHeight="667px"
        sx={{
           backgroundColor: "#fafafa",
        }}
      >
        <Header
        
          title={"Name Your Portfolio"}
          subtitle={
            "75% of people who are financial secure build and manage a finacial plan."
          }
          moresubtitle={"We can help you build one that works for you."}
        />

        <FormControl variant="standard" sx={{ width: "100%", height: "100%" }}>
          <Input
            type="text"
            id="message"
            name="message"
            placeholder="Example: Sending our youngest to college"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </FormControl>
        <MarginBar />
        <Link to={!message ? "" : "/aboutyou"}>
          <DefaultButton
            buttonName={"Continue"}
            sx={{
              backgroundColor:
                !message === true ? theme.palette.secondary[100] : "#000",
            }}
          />
        </Link>
      </Box>
    </Box>
  );
}
export default PortfolioName;
