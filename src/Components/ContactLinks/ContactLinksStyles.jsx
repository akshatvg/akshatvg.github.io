import { makeStyles } from "@mui/styles";

// Styles for Contact Link section
export default makeStyles(({ breakpoints, palette }) => {
    return {
        textColored: {
            color: `${palette.primary.light} !important`,
        },
        github: {
            color: `#000000 !important`,
            marginLeft: "7px",
            marginRight: "7px",
            marginTop: "10px",
            "&:hover": {
                transform: "scale(1.5)",
                color: `#24292f !important`,
            },
        },
        linkedin: {
            color: `#0C64C3 !important`,
            marginLeft: "7px",
            marginRight: "7px",
            marginTop: "10px",
            "&:hover": {
                transform: "scale(1.5)",
                color: `#216ec2 !important`,
            },
        },
        twitter: {
            color: `#1D9DEE !important`,
            marginLeft: "7px",
            marginRight: "7px",
            marginTop: "10px",
            "&:hover": {
                transform: "scale(1.5)",
                color: `#2ca7f5 !important`,
            },
        },
        youtube: {
            color: `#FF0301 !important`,
            marginLeft: "7px",
            marginRight: "7px",
            marginTop: "10px",
            "&:hover": {
                transform: "scale(1.5)",
                color: `#f51311 !important`,
            },
        },
        instagram: {
            color: `#DA2D6C !important`,
            marginLeft: "7px",
            marginRight: "7px",
            marginTop: "10px",
            "&:hover": {
                transform: "scale(1.5)",
                color: `#de3e78 !important`,
            },
        },
        phone: {
            color: `#31CF60 !important`,
            marginLeft: "7px",
            marginRight: "7px",
            marginTop: "10px",
            "&:hover": {
                transform: "scale(1.5)",
                color: `#3fd46c !important`,
            },
        },
        medium: {
            color: `#000000 !important`,
            marginLeft: "7px",
            marginRight: "7px",
            marginTop: "10px",
            "&:hover": {
                transform: "scale(1.5)",
                color: `#24292f !important`,
            },
        },
        email: {
            color: `#4284F2 !important`,
            marginLeft: "7px",
            marginRight: "7px",
            marginTop: "10px",
            "&:hover": {
                transform: "scale(1.5)",
                color: `#5c94f2 !important`,
            },
        },
        themeBtn: {
            backgroundColor: `${palette.primary.main} !important`,
            boxShadow: "none !important",
            fontWeight: "600 !important",
            color: "#ffffff",
            height: "46px",
            width: "20%",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            "&:hover": {
                backgroundColor: `${palette.primary.alt} !important`,
            },
            [breakpoints.down("sm")]: {
                height: "50px",
                width: "65%",
            },
        },
    };
});