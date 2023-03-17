import { Typography, Box, useTheme } from "@mui/material";
const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  return (
    <Box mb="30px">
      <Typography
        variant="h4"
        color={theme.palette.primary[100]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h6" color={theme.palette.secondary[100]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;