import { createTheme } from "@mui/material";

// Primary theme
const colorPallete = {
    primary: {
        main: "#0C9CFC",
        light: "#D5E7FE",
        dark: "#000E4B",
        alt: "#1B6DF6",
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
    // Overrides
    overrides: {
        MuiIconButton: {
            colorPrimary: {
                backgroundColor: colorPallete.primary.main,
                color: "white",
                "&:hover": {
                    backgroundColor: `${colorPallete.primary.dark}`,
                },
            },
        },
        MuiButton: {
            root: {
                height: "45px",
                borderRadius: "10px",
                textTransform: "none",
                paddingInline: "20px",
                textAlign: "center",
                "& .MuiButton-label": {
                    display: "inline",
                    lineHeight: "normal",
                    textDecoration: "none",
                },
            },
            containedPrimary: {
                backgroundColor: colorPallete.primary.main,
                color: "#FFFFFF",
                border: `2px solid ${colorPallete.primary.main}`,
                "&:hover": {
                    backgroundColor: colorPallete.primary.dark,
                    color: "#FFFFFF",
                },
                "&:disabled": {
                    border: "2px solid #fcfcfc",
                }
            },
            outlinedPrimary: {
                color: colorPallete.primary.main,
                border: `2px solid ${colorPallete.primary.main}`,
                "&:hover": {
                    backgroundColor: colorPallete.primary.main,
                    color: "#FFFFFF",
                },
            },
        },
    },
});

export default customTheme;