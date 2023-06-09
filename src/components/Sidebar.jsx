import React from "react";
import {
  Box,
  // Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  // SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  // ShoppingCartOutlined,
  // Groups2Outlined,
  // ReceiptLongOutlined,
  // PublicOutlined,
  // PointOfSaleOutlined,
  // TodayOutlined,
  // CalendarMonthOutlined,
  // AdminPanelSettingsOutlined,
  // TrendingUpOutlined,
  // PieChartOutlined,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
// import profileImage from "assets/profile.gif";

const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    text: "Introduce/First",
    icon: <HomeOutlined />,
  },
  {
    text: "Way",
    icon: <HomeOutlined />,
  },
  {
    text: "Goal/First",
    icon: <HomeOutlined />,
  },
  {
    text: "PortName",
    icon: <HomeOutlined />,
  },

];

const Sidebar = ({
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      {!isSidebarOpen && (
        <Drawer
          open={!isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              // color: theme.palette.secondary[1000],
              // backgroundColor: theme.palette.background.alt,
              boxSizing: "border-box",
              borderWidth: 0,
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem">
              <FlexBetween
              // color={theme.palette.secondary.main}
              >
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography variant="h4" fontWeight="bold">
                    Play GOLP
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {navItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography
                      key={text}
                      sx={{ m: "2.25rem 0 1rem 3rem" }}
                      // color={theme.palette.secondary.main}
                    >
                      {text}
                    </Typography>
                  );
                }
                const lcText = text.toLowerCase();
                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`);
                        setActive(lcText);
                      }}
                      sx={{
                        backgroundColor:
                          active === lcText ? theme.palette.primary[500] : "transparent",
                        color:
                          active === lcText
                            ? theme.palette.secondary[500]
                            : theme.palette.secondary[10]
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color:
                            active === lcText
                              ? theme.palette.secondary[500]
                              : theme.palette.secondary[10]
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === lcText && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
