import { createTheme } from "@mui/material";

// Primary theme
const colorPallete = {
    primary: {
        main: "#2C8AFD",
        light: "#D5E7FE",
        dark: "#0987db",
        alt: "#0C9CFC",
    },
};

// Create Theme
const customTheme = createTheme({
    // Setting the theme content
    palette: {
        ...colorPallete,
    },
    typography: {
        fontFamily: [
            "Avenir Next",
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(","),
    },
});

export default customTheme;