import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate, useLocation } from "react-router-dom";

// Setting styles for SidebarDrawer
const style = makeStyles(({ breakpoints, palette }) => {
    return {
        sideBarElement: {
            display: "flex",
            alignItems: "center",
            margin: 12,
            marginTop: 10,
            fontWeight: 500,
            width: 200,
            marginLeft: "10px",
            padding: "10px 20px",
            borderRadius: 5,
            cursor: "pointer",
            "&:hover": {
                background: "#F0F3F9",
            },
        },
        sideBarElementActive: {
            backgroundColor: palette.primary.main,
            color: "white",
            "&:hover": {
                backgroundColor: `${palette.primary.alt}`,
            },
        },
        sideBarElementInactive: {
            backgroundColor: "#F4F7FD",
            color: "black",
            "&:hover": {
                backgroundColor: "#DAE1EF",
            },
        },
        root: {
            left: 0,
            top: 64,
            background: "#FFFFFF",
            zIndex: 1,
        },
        mainLogo: {
            fontFamily: "Avenir Next",
            display: "flex",
            marginLeft: "auto",
            marginTop: "20px !important",
            marginBottom: "20px !important",
            alignSelf: "center",
            justifyContent: "center",
            color: "black",
            fontWeight: "bolder",
        },
        textColored: {
            color: palette.primary.alt,
        },
    };
});

// SidebarElement component
export function SidebarElement(props) {
    const classes = style();
    return (
        <div
            onClick={props.onClick}
            className={`${classes.sideBarElement} ${props.pathCheck ? classes.sideBarElementActive : classes.sideBarElementInactive
                }`}
            style={props.style}
        >
            <div>{props.children}</div>
        </div>
    );
}

// SidebarDrawer component
export function SidebarDrawer(props) {
    const classes = style();
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <div className={classes.root}>
            <Typography variant="h5" className={classes.mainLogo}>Akshat&nbsp;<span className={classes.textColored}>Gupta</span></Typography>
            <SidebarElement
                onClick={() => navigate("/")}
                pathCheck={location.pathname === "/" || location.pathname === "/home/" || location.pathname === "/home"}
            >
                Education
            </SidebarElement>
            <SidebarElement
                onClick={() => navigate("/work")}
                pathCheck={location.pathname === "/work" || location.pathname === "/work/"}
            >
                Work
            </SidebarElement>
            <SidebarElement
                onClick={() => navigate("/projects")}
                pathCheck={location.pathname === "/projects" || location.pathname === "/projects/"}
            >
                Projects
            </SidebarElement>
            <SidebarElement
                onClick={() => navigate("/accomplishments")}
                pathCheck={location.pathname === "/accomplishments" || location.pathname === "/accomplishments/"}
            >
                Accomplishments
            </SidebarElement>
            <SidebarElement
                onClick={() => navigate("/contact")}
                pathCheck={location.pathname === "/contact" || location.pathname === "/contact/"}
            >
                Contact
            </SidebarElement>
        </div>
    );
}

export default SidebarDrawer;