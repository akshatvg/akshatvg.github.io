import { Container, Grid, Typography, useMediaQuery, useTheme, Button } from "@mui/material";
import styles from "./HeadStyles.jsx";
import AkshatGupta from "../../Assets/Public_Speaking_akshatvg.jpeg";
import Typewriter from 'typewriter-effect';
import { useEffect } from "react";
import Resume from "../../Assets/Akshat_Gupta_Resume.pdf";

function HeadSection() {
    const classes = styles();
    const theme = useTheme();
    const small = useMediaQuery(theme.breakpoints.down("sm"));
    useEffect(() => {
        let url = window.location.href.split("/");
        let target = url[url.length - 1].toLowerCase();
        let element = document.getElementById(target);
        element && element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, []);
    return (
        <>
            {/* Head Section */}
            <Container maxWidth="lg" id="head-section">
                <Grid
                    container
                    className={classes.root}
                >
                    {small && (
                        <Grid
                            item
                            xs={12}
                            md={6}
                            style={{ textAlign: "center" }}
                        >
                            <img src={AkshatGupta} alt="Akshat Gupta" className={classes.heroImage} draggable="false" />
                        </Grid>
                    )}
                    <Grid
                        item
                        xs={12}
                        md={6}
                        style={{ minHeight: "200px" }}
                    >
                        <Typography variant="h3" className={classes.welcomeTitle}>Hey!</Typography>
                        <Typography variant="h3" className={classes.title}>
                            I'm <span className={classes.textColored}>Akshat.</span>
                        </Typography>
                        <Typography variant="h6" className={classes.subtitle}>
                            <Typewriter
                                options={{
                                    strings: ['I plan, strategise, manage and execute large-scale projects.', 'I write code and develop projects.', 'I  can make a project, a business.', 'I can help your product get users and a product-market fit.', 'I have recruited and managed teams of 50+ people.'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </Typography>
                        <Button variant="contained" href="/contact" className={classes.themeBtn}>Get In Touch</Button>
                        <Button variant="outlined" href={Resume} className={classes.altBtn}>Download Resume</Button>
                    </Grid>
                    {!small && (
                        <Grid
                            item
                            xs={12}
                            md={6}
                            style={{ textAlign: "center" }}
                        >
                            <img src={AkshatGupta} alt="Akshat Gupta" className={classes.heroImage} draggable="false" />
                        </Grid>
                    )}
                </Grid>
                {!small && (<span className="scroll-btn">
                    <a href="#about-section" onClick={e => {
                        let whereTo = document.getElementById("about-section");
                        e.preventDefault();
                        whereTo && whereTo.scrollIntoView({ behavior: "smooth", block: "start" });
                    }} style={{
                        display: "flex", justifyContent: "center",
                    }}
                    >
                        <span className="mouse">
                            <span>
                            </span>
                        </span>
                    </a>
                </span>
                )}
            </Container>
        </>
    );
}

export default HeadSection;

