import * as React from "react";
import FlexBetween from "./FlexBetween";
import PropTypes from "prop-types";
import { Box, Slider, Typography, Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles";
// import SliderButton from "../assets/btn_barbutton.svg";
function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}
ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};
const marks = [
  {
    value: 0,
  },
  {
    value: 25,
  },
  {
    value: 50,
  },
  {
    value: 75,
  },
  {
    value: 100,
  },
];
const IOSSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#211d1d" : "#211d1d",
  padding: "15px 0",
  "& .MuiSlider-root": {
    height: "1px",
    padding: "0px",
  },

  "& .MuiSlider-thumb": {
    height: 22,
    width: 22,
    "&:before": {
      //   content: `url("http://127.0.0.1:5500/playgolf/src/assets/btn_barbutton.svg")`,
      ///차선책어떤걸까
    },
    // backgroundImage: `url("/playgolf/src/assets/btn_barbutton.svg")`,
    // backgroundColor: '#000',
    // border: "2px solid #000",
    // boxShadow: iOSBoxShadow,
    "&:focus, &:hover, &.Mui-active": {
      // background: "#fff",
      width: 22,
      height: 22,
      //   boxShadow:
      //     '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        // boxShadow: iOSBoxShadow,
      },
    },
  },
  "& .MuiSlider-valueLabel": {
    fontSize: 12,
    fontWeight: "normal",
    top: -6,
    backgroundColor: "unset",
    color: theme.palette.text.primary,
    "&:before": {
      display: "none",
    },
    "& *": {
      background: "transparent",
      color: theme.palette.mode === "dark" ? "#fff" : "#211d1d",
    },
  },
  "& .MuiSlider-track": {
    border: "none",
    background: "transparent",
  },
  "& .MuiSlider-rail": {
    opacity: "1",
    height: "1px",
    backgroundColor: "#211d1d",
  },
  "& .MuiSlider-mark": {
    backgroundColor: "#211d1d",
    height: 8,
    width: 1,
    // '&.MuiSlider-markActive': {
    //   opacity: 1,
    //   background: {SliderButton},
    // },
  },
}));
function valueLabelFormat(value) {
  //   const units = ["KB", "MB", "GB", "TB"];

  // let unitIndex = 0;
  let scaledValue = value;

  // while (scaledValue >= 1024 && unitIndex < units.length - 1) {
  //   unitIndex += 1;
  //   scaledValue /= 1024;
  // }
  return `${scaledValue} `;

  //   return `${scaledValue} ${units[unitIndex]}`;
}

function calculateValue(value) {
  return value;
}

export default function NonLinearSlider({ SliderTitle, SliderType }) {
  const [value, setValue] = React.useState(10);

  const handleChange = (event, newValue) => {
    if (typeof newValue === "number") {
      setValue(newValue);
    }
  };

  return (
    <Box>
      <FlexBetween>
        <Typography
          fontSize={"12px"}
          color={"#808080"}
          id="non-linear-slider"
          gutterBottom
        >
          {SliderTitle}
        </Typography>
        <FlexBetween>
          <Typography
            variant="h5"
            sx={{
              display: SliderType === "$" ? "none" : "block",
            }}
          >
            {calculateValue(value)} {SliderType}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              display:
                SliderType !== "$" ||
                SliderType === "Age" ||
                SliderType === "Years"
                  ? "none"
                  : "block",
            }}
          >
            {SliderType} {calculateValue(value)}
          </Typography>
        </FlexBetween>
      </FlexBetween>
      <IOSSlider
        aria-label="ios slider"
        marks={marks}
        value={value}
        // min={5}

        // max={30}
        scale={calculateValue}
        getAriaValueText={valueLabelFormat}
        valueLabelFormat={valueLabelFormat}
        onChange={handleChange}
        valueLabelDisplay="off"
      />
    </Box>
  );
}
