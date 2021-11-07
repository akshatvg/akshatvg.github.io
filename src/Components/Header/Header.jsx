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

// Header component
function Header() {
    const classes = styles();
    const theme = useTheme();
    const small = useMediaQuery(theme.breakpoints.down("sm"));
    const [open, setOpen] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);

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
                            onClick={(e) => {
                                setOpen(e.currentTarget);
                            }}
                        >
                            {!small ? (
                                <>
                                    <Link to="/education" variant="body1" className={classes.navLinks}>Education</Link>
                                    <Link to="/work" variant="body1" className={classes.navLinks}>Work</Link>
                                    <Link to="/projects" variant="body1" className={classes.navLinks}>Projects</Link>
                                    <Link to="/accomplishments" variant="body1" className={classes.navLinks}>Accomplishments</Link>
                                    <Link to="/contact" variant="body1" className={classes.navLinks}>Contact</Link>
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