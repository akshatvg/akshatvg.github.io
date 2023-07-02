import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Home from "./Layouts/Home";
import Contact from "./Layouts/Contact";
import Education from "./Layouts/Education";
import customTheme from "./Utils/customTheme";
import { ThemeProvider } from '@mui/material/styles';
import WorkExperience from './Layouts/WorkExperience';
import Accomplishments from './Layouts/Accomplishments';
import ErrorPage from './Layouts/ErrorPage';
import ScrollToTop from './Utils/ScrollToTop';

function App() {

  // Custom theme set
  const theme = customTheme;

  return (
    // Theme is used in the ThemeProvider
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollToTop />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SPEMCLQ8VG" id="google-analytics" defer
          strategy="afterInteractive"></script>
        <script id="google-analytics-measurement" dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SPEMCLQ8VG');`,
        }}
          defer
          strategy="afterInteractive"
        />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/education" element={<Education />} />
          <Route exact path="/work" element={<WorkExperience />} />
          <Route exact path="/accomplishments" element={<Accomplishments />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
