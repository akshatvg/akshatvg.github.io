import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import MediumIcon from '@mui/icons-material/Create';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import Phone from '@mui/icons-material/Phone';
import styles from "./ContactLinksStyles";
import { Typography, Button } from "@mui/material";
import Resume from "../../Assets/Akshat_Gupta_Resume.pdf";

const ContactLinks = () => {
    const classes = styles();
    return (
        <>
            <Typography variant="h5" className={classes.title}>
                Primary
            </Typography>
            <a href="mailto:akshatvg23@gmail.com">
                <EmailIcon fontSize="large" className={classes.email} />
            </a>
            <a href="tel:+918799979997">
                <Phone fontSize="large" className={classes.phone} />
            </a>
            <Typography variant="h5" className={classes.title} mt={2}>
                Social
            </Typography>
            <a href="https://github.com/akshatvg">
                <GitHubIcon fontSize="large" className={classes.github} />
            </a>
            <a href="https://www.linkedin.com/in/akshatvg">
                <LinkedInIcon fontSize="large" className={classes.linkedin} />
            </a>
            <a href="https://twitter.com/akshatvg">
                <TwitterIcon fontSize="large" className={classes.twitter} />
            </a>
            <a href="https://akshatvg.medium.com/">
                <MediumIcon fontSize="large" className={classes.medium} />
            </a>
            <a href="https://www.youtube.com/channel/UCjyVQRAcNuim27a7Q_2X_fA?sub_confirmation=1">
                <YouTubeIcon fontSize="large" className={classes.youtube} />
            </a>
            <a href="https://www.instagram.com/akshatvg">
                <InstagramIcon fontSize="large" className={classes.instagram} />
            </a>
            <Typography variant="h5" className={classes.title} mt={2} mb={2}>
                Resume
            </Typography>
            <Button variant="contained" href={Resume} className={classes.themeBtn} download>Download Resume</Button>
        </>
    );
};

export default ContactLinks;