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
                            Originally from Chennai in India, I currently work at <a href="https://www.legalforcelaw.com" target="_blank" rel="noreferrer" className={classes.hiddenLinks}>LegalForce RAPC Worldwide</a> as an Operations and Project Manager.
                            I lead the Engineering and Product teams for two ventures under the company consisting of over 30 people working from across the country. I pursued my Bachelors degree in Information Technology from <a href="https://www.vit.ac.in" target="_blank" rel="noreferrer" className={classes.hiddenLinks}>Vellore Institute of Technology, Vellore</a>.
                        </Typography>
                        <Typography variant="h6" className={classes.subtitle}>
                            I had initially begun my career in the field of <b>Digital Marketing</b> where I was able to digitally grow companies exponentially. I loved helping grow companies and acquiring users but I believed there was a need for the perfect product. I then tried to pursue the role of a <b>Software Developer</b>. I explored multiple technical domains till I found the right fit for me- <b>Web Development</b>. Along with a few friends, I now co-founded a <b>startup</b> which developed softwares for clients based on their requirements. The startup did not work out, but it triggered the <b>business mindset</b> in me. I have now found my passion and I work on a <b>well-rounded managerial</b> role. Being from a technical background helps me guide developers and designers to set goals which can meet a realistic deadline, without compromising on quality.
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

