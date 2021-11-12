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

function App() {

  // Custom theme set
  const theme = customTheme;

  return (
    // Theme is used in the ThemeProvider
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/education" element={<Education />} />
          <Route exact path="/work" element={<WorkExperience />} />
          <Route exact path="/contact" element={<Contact />} />
          {/* <Route exact path="*" element={<ErrorPage />} /> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
