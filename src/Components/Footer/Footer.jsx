import { Container, Grid, Typography } from "@mui/material";
import styles from "./FooterStyles.jsx";

function Footer() {
    const classes = styles();

    return (
        <>
            {/* Footer Section */}
            <Container maxWidth="lg" id="footer">
                <Grid
                    container
                    className={classes.root}
                >
                    <Grid
                        item
                        xs={12}
                    >
                        <Typography variant="body1" className={classes.attribution}>
                            Developed by <a href="https://www.linkedin.com/in/akshatvg" className={classes.textColored} target="_blank" rel="noreferrer">Akshat Gupta</a>.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Footer;

