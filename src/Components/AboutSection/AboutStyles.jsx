import { makeStyles } from "@mui/styles";

// Styles for about section
export default makeStyles(({ breakpoints, palette }) => {
    return {
        textColored: {
            color: `${palette.primary.main} !important`,
        },
        root: {
            height: "100%",
            minHeight: "90vh",
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
                marginTop: "10vh !important",
            },
        },
        subtitle: {
            marginBottom: "30px !important",
        },
        hiddenLinks: {
            color: `${palette.primary.main}`,
            textDecoration: "none",
            "&:hover": {
                color: `${palette.primary.alt} !important`,
            },
        }
    };
});