import React, { useState } from 'react';
import './App.css';
import { SnackbarProvider } from "notistack";
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Slide from '@mui/material/Slide';
import Home from "./Layouts/Home";
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {

  // Keep the theme in app state
  const [theme, setTheme] = useState({
    palette: {
      type: "light"
    }
  });

  // Change the palette type of the theme in state
  const toggleDarkTheme = () => {
    let newPaletteType = theme.palette.type === "light" ? "dark" : "light";
    setTheme({
      palette: {
        type: newPaletteType
      }
    });
  };

  // Create the theme
  const muiTheme = createTheme(theme);

  return (
    // Theme is used in the ThemeProvider
    <ThemeProvider theme={muiTheme}>
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={1500}
        preventDuplicate
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        TransitionComponent={Slide}
      >
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} onToggleDark={toggleDarkTheme} />
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
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
