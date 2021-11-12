import {
    AppBar,
    Toolbar,
    useTheme,
    useMediaQuery,
    IconButton,
    SwipeableDrawer,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import styles from "./HeaderStyles";
import { Link } from 'react-router-dom'
import SidebarDrawer from "../Sidebar/SidebarDrawer";
import MenuRounded from "@mui/icons-material/MenuRounded";
import { useLocation, useNavigate } from "react-router-dom";

// NavBarElement component
export function NavBarElement(props) {
    const classes = styles();
    return (
        <div
            onClick={props.onClick}
            className={`${props.pathCheck ? classes.activeNav : classes.navLinks
                }`}
            style={props.style}
        >
            <div>{props.children}</div>
        </div>
    );
}

// Header component
function Header(props) {
    const classes = styles();
    const theme = useTheme();
    const small = useMediaQuery(theme.breakpoints.down("sm"));
    const [drawerOpen, setDrawerOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <AppBar className={classes.root} elevation={0}>
            <Toolbar className={classes.toolbar}>
                {/* Left Side */}
                <Link
                    to={`/`}
                    style={{ textDecoration: "none" }}
                >
                    <Typography variant="h5" className={classes.mainLogo}>Akshat&nbsp;<span className={classes.textColored}>Gupta</span></Typography>
                </Link>
                {/* Right Side */}
                <div className={classes.cta}>
                    <>
                        <div
                            className={classes.navbarElementsContainer}
                        >
                            {!small ? (
                                <>
                                    <NavBarElement
                                        onClick={() => navigate("/")}
                                        pathCheck={location.pathname === "/" || location.pathname === "/home/" || location.pathname === "/home"}
                                    >
                                        Home
                                    </NavBarElement>
                                    <NavBarElement
                                        onClick={() => navigate("/education")}
                                        pathCheck={location.pathname === "/education" || location.pathname === "/education/"}
                                    >
                                        Education
                                    </NavBarElement>
                                    <NavBarElement
                                        onClick={() => navigate("/work")}
                                        pathCheck={location.pathname === "/work" || location.pathname === "/work/"}
                                    >
                                        Work
                                    </NavBarElement>
                                    <NavBarElement
                                        onClick={() => navigate("/accomplishments")}
                                        pathCheck={location.pathname === "/accomplishments" || location.pathname === "/accomplishments/"}
                                    >
                                        Accomplishments
                                    </NavBarElement>
                                    <NavBarElement
                                        onClick={() => navigate("/contact")}
                                        pathCheck={location.pathname === "/contact" || location.pathname === "/contact/"}
                                    >
                                        Contact
                                    </NavBarElement>
                                </>
                            ) :
                                (
                                    <div>
                                        <IconButton
                                            edge="end"
                                            onClick={() => {
                                                setDrawerOpen(true);
                                            }}
                                            style={{ color: "black", borderColor: "black", marginLeft: "5px" }}
                                        >
                                            <MenuRounded />
                                        </IconButton>
                                    </div>
                                )}
                        </div>
                    </>
                </div>
            </Toolbar>
            {/* Swipeable Drawer */}
            <SwipeableDrawer
                anchor="left"
                variant="temporary"
                open={drawerOpen}
                onOpen={() => {
                    setDrawerOpen(true);
                }}
                onClose={() => {
                    setDrawerOpen(false);
                }}
            >
                <SidebarDrawer />
            </SwipeableDrawer>
        </AppBar>
    );
}

export default Header;