import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";

const Layout = () => {

  //   useEffect(() => {
  //     if (localStorage.getItem('lang') === 'korea') {
  //         i18n.changeLanguage('ko');
  //     }
  //     else if (localStorage.getItem("lang") === 'usa') {
  //         i18n.changeLanguage('en');
  //     }
  //     else if (localStorage.getItem("lang") === 'japan') {
  //         i18n.changeLanguage('jp');
  //     }
  // }, [localStorage.getItem('lang')]);

  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={1}>
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
