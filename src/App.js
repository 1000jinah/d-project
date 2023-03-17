import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
// import Introduce from "scenes/introduce/";
import IntroduceFirst from "scenes/introduce/first";
import IntroduceSecond from "scenes/introduce/second";
import IntroduceThird from "scenes/introduce/third";


function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              {/* <Route path="/introduce" element={<Introduce />} /> */}
              <Route path="/introduce/first" element={<IntroduceFirst />} />
              <Route path="/introduce/second" element={<IntroduceSecond />} />
              <Route path="/introduce/third" element={<IntroduceThird />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
