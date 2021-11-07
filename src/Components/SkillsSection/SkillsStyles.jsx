import { makeStyles } from "@mui/styles";

// Styles for skills section
export default makeStyles(({ breakpoints, palette }) => {
    return {
        textColored: {
            color: `${palette.primary.main} !important`,
        },
        root: {
            height: "100%",
            minHeight: "100vh",
            padding: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        title: {
            fontWeight: "bolder !important",
            marginTop: "10px !important",
            marginBottom: "20px !important",
            [breakpoints.down("sm")]: {
                fontSize: "1.8rem !important",
            },
        },
        subtitle: {
            marginTop: "30px !important",
            marginBottom: "30px !important",
            fontWeight: "bold !important",
        },
        byLine: {
            marginTop: "40px !important",
            fontWeight: "bold !important",
        },
        ChipPrimary: {
            padding: "15px !important",
            fontSize: "1.1rem !important",
            borderRadius: "5px !important",
            fontWeight: "600 !important",
            background: `${palette.primary.dark} !important`,
        },
        ChipSecondary: {
            padding: "15px !important",
            fontSize: "1.1rem !important",
            borderRadius: "5px !important",
            fontWeight: "600 !important",
            background: `${palette.primary.alt} !important`,
        },
    };
});