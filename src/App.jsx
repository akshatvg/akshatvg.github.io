import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Home from "./Layouts/Home";
import customTheme from "./utils/customTheme";
import { ThemeProvider } from '@mui/material/styles';

function App() {

  // Custom theme set
  const theme = customTheme;

  return (
    // Theme is used in the ThemeProvider
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route
            exact
            path="/projects"
            component={Projects}
          />
          <Route
            exact
            path="/work"
            component={Work}
          /> */}
          {/* <Route path="*" component={ErrorPage} /> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
