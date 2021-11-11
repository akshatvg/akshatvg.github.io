import { createTheme } from "@mui/material";

// Primary theme
const colorPallete = {
    primary: {
        main: "#3F0071",
        light: "#610094",
        dark: "#130050",
        alt: "#610094",
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