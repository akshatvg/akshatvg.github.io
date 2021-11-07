import { makeStyles } from "@mui/styles";

// Styles for about section
export default makeStyles(({ breakpoints, palette }) => {
    return {
        textColored: {
            color: `${palette.primary.main} !important`,
        },
        root: {
            padding: 10,
            alignItems: "center",
            justifyContent: "center",
        },
        attribution: {
            textAlign: "center",
            fontWeight: "500 !important",
            paddingBottom: "20px",
        },
    };
});