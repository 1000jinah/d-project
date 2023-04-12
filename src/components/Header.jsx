import { Typography, Box, useTheme } from "@mui/material";
const Header = ({ title, subtitle, moresubtitle }) => {
  const theme = useTheme();
  return (
    <Box mb="30px">
      <Typography
        variant="h4"
        color={theme.palette.primary[100]}
        fontWeight="bold"
        style={{ whiteSpace: "pre-line" }}
        sx={{ mb: "5px", lineHeight: "1.5" }}
      >
        {title}
      </Typography>
      <Typography
        variant="h6"
        style={{ whiteSpace: "pre-line" }}
        color={theme.palette.secondary[100]}
      >
        {subtitle}
      </Typography>
      <Typography
        variant="h6"
        style={{ whiteSpace: "pre-line" }}
        color={theme.palette.secondary[100]}
      >
        {moresubtitle}
      </Typography>
    </Box>
  );
};

export default Header;
