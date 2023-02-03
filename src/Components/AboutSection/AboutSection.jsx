import { Container, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import styles from "./AboutStyles.jsx";
import { useEffect } from "react";

function AboutSection() {
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
            {/* About Section */}
            <Container maxWidth="lg" id="about-section">
                <Grid
                    container
                    className={classes.root}
                >
                    <Grid
                        item
                        xs={12}
                    >
                        <Typography variant="h3" className={classes.title}>
                            About <span className={classes.textColored}>Me</span>
                        </Typography>
                        <Typography variant="h6" className={classes.subtitle}>
                        Hailing from Chennai in India, I currently work at LegalForce RAPC Worldwide as an <b>Operations and Engineering Manager</b>. I lead the Engineering, Design, and Product teams for multiple ventures within the company, comprising more than 50 personnel that are operating from various locations across the globe.
                        </Typography>
                        <Typography variant="h6" className={classes.subtitle}>
                        I started my career as a <b>Software Developer</b> where I explored multiple technical domains till I found the right fit for me- <b>Web Development</b>. In my eagerness to keep exploring, I also learned about SEO, SEM, and <b>Digital Marketing</b> in my free time. While pursuing my undergraduate degree, I co-founded a service-based <b>startup</b> along with a few friends, which honed my business acumen and entrepreneurial instincts. I am passionate about my current role which is primarily focused on technical project management; the role occasionally also requires me to roll up my sleeves and showcase my technological prowess.
                        </Typography>
                        <Typography variant="h6" className={classes.subtitle}>
                            In my free time, I binge on Netflix and YouTube, listen to songs, go for long drives, and try new cuisines at local restaurants (foodie at heart).
                        </Typography>
                    </Grid>
                </Grid>
                {!small && (<span className="scroll-btn">
                    <a href="#skills-section" onClick={e => {
                        let whereTo = document.getElementById("skills-section");
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

export default AboutSection;

