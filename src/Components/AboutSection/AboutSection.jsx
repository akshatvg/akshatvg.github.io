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
                            CEO of <a href="https://www.peritys.com">Peritys</a> and entrepreneur from Chennai, India, I specialize in leveraging IT and marketing consultancy to bring SaaS innovations like <a href="https://www.interacts.ai">Interacts AI</a> to market. My journey began with founding VAMSA Tech Private Limited during my university years, where I discovered my passion for converting groundbreaking ideas into reality. My experience includes a leadership role at LegalForce RAPC Worldwide, guiding global teams in engineering, design, and product management.
                        </Typography>
                        <Typography variant="h6" className={classes.subtitle}>
                            What I bring to the table:
                            <ul>
                                <li><b>Strategic Leadership:</b> Proven ability in ideation, developing offshore development centers, and global expansion, transforming concepts into profitable business models.</li>
                                <li><b>Project Mastery:</b> Expert in navigating the complete project lifecycle, ensuring products resonate with their market and deliver exceptional user experiences.</li>
                                <li><b>Technical Acumen:</b> A foundation in software development and DevOps, committed to building scalable, efficient systems.</li>
                                <li><b>Team Development:</b> A track record of assembling and nurturing teams, promoting innovation, and achieving collective excellence.</li>
                                <li><b>Strategic IT Consultancy:</b> Aligning technology strategies with business goals to optimize growth and process efficiency.</li>
                                <li><b>Financial Stewardship:</b> Skilled in navigating the financial and operational facets of business to fuel sustainable growth.</li>
                            </ul>
                        </Typography>
                        <Typography variant="h6" className={classes.subtitle}>
                            I am driven by the challenge of turning the nascent stages of ideas into thriving business entities, demonstrating a keen ability to scale ventures from zero to one across diverse global landscapes.
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