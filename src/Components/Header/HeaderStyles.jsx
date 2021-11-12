import { makeStyles } from '@mui/styles';

// Setting styles for the Header component
export default makeStyles(({ breakpoints, palette }) => {
    return {
        toolbar: {
            minHeight: 55,
            width: "100%",
            maxWidth: "1800px",
            display: 'flex',
            backgroundColor: "white",
            boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
        },
        navbarElementsContainer: {
            color: "black",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            [breakpoints.down("sm")]: {
                marginRight: "0px",
            },
        },
        cta: {
            marginLeft: 'auto',
            marginRight: "30px",
            color: "#6d6e6e",
            "&:hover": {
                color: `${palette.primary.main} !important`,
            },
        },
        root: {
            backgroundColor: "white",
            position: "fixed",
            height: "auto",
            display: "flex",
            alignItems: "center",
        },
        mainLogo: {
            fontFamily: "Avenir Next",
            display: "flex",
            marginLeft: "20px !important",
            alignSelf: "center",
            justifyContent: "center",
            color: "black",
            fontWeight: "bolder !important",
        },
        navLinks: {
            marginLeft: "15px !important",
            marginRight: "15px !important",
            fontWeight: "600 !important",
            textDecoration: "none",
            color: "#6d6e6e",
            "&:hover": {
                color: `${palette.primary.main} !important`,
            },
        },
        activeNav: {
            marginLeft: "15px !important",
            marginRight: "15px !important",
            fontWeight: "600 !important",
            textDecoration: "none",
            color: `${palette.primary.main} !important`,
            "&:hover": {
                color: `${palette.primary.alt} !important`,
            },
        },
        textColored: {
            color: `${palette.primary.main} !important`,
        },
    };
});