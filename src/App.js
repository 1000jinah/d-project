import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { themeSettings } from "theme";
// import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
import Introduce from "scenes/introduce";
import Way from "scenes/way";
import GoalFirst from "scenes/goal/first";
import GoalSecond from "scenes/goal/second";
import PortfolioName from "scenes/portname";
import AboutYou from "scenes/aboutyou";
import SurveyFirst from "scenes/survey/first";
import Surveysecond from "scenes/survey/second";
import SurveyThird from "scenes/survey/third";
import SurveyFourth from "scenes/survey/fourth";
import SurveyFifth from "scenes/survey/fifth";
import SurveySixth from "scenes/survey/sixth";
import SurveySeventh from "scenes/survey/seventh";
import SurveyEighth from "scenes/survey/eighth";
import SurveyNinth from "scenes/survey/ninth";
import SurveyTenth from "scenes/survey/tenth";
import SurveyEleventh from "scenes/survey/eleventh";
import SurveyTwelfth from "scenes/survey/twelfth";
// import SurveyThirteenth from "scenes/survey/thirteenth";
import Projection from "scenes/projection/default";
import ProjectionResult from "scenes/projection/result";
import MyPage from "scenes/mypage";
// import TranslateButton from "components/Translate";
// import "./locales";
// import { useTranslation } from "react-i18next";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            {/* <Route element={<Layout />}> */}
              <Route path="/" element={<Navigate to="/way" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/introduce" element={<Introduce />} />
              {/* <Route path="/introduce/first" element={<IntroduceFirst />} />
              <Route path="/introduce/second" element={<IntroduceSecond />} />
              <Route path="/introduce/third" element={<IntroduceThird />} /> */}
              <Route path="/way" element={<Way />} />
              <Route path="/goal/first" element={<GoalFirst />} />
              <Route path="/goal/second" element={<GoalSecond />} />
              <Route path="/portname" element={<PortfolioName />} />
              <Route path="/aboutyou" element={<AboutYou />} />
              {/* <Route path="/survey" element={<Survey />} /> */}
              <Route path="/survey/first" element={<SurveyFirst />} />
              <Route path="/survey/second" element={<Surveysecond />} />
              <Route path="/survey/third" element={<SurveyThird />} />
              <Route path="/survey/fourth" element={<SurveyFourth />} />
              <Route path="/survey/fifth" element={<SurveyFifth />} />
              <Route path="/survey/sixth" element={<SurveySixth />} />
              <Route path="/survey/seventh" element={<SurveySeventh />} />
              <Route path="/survey/eighth" element={<SurveyEighth />} />
              <Route path="/survey/ninth" element={<SurveyNinth />} />
              <Route path="/survey/tenth" element={<SurveyTenth />} />
              <Route path="/survey/eleventh" element={<SurveyEleventh />} />
              <Route path="/survey/twelfth" element={<SurveyTwelfth />} />
              <Route path="/projection/default" element={<Projection />} />
              <Route
                path="/projection/result/:profilename"
                element={<ProjectionResult />}
              />
              <Route path="/mypage" element={<MyPage />} />
            {/* </Route> */}
            {/* <Route element={<TranslateButton />}/> */}
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
