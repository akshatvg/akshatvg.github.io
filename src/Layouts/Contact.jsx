import Header from "../Components/Header/Header";
import { Container, Grid, Typography } from "@mui/material";
import ContactLink from '../Components/ContactLinks/ContactLinks.jsx';
import Footer from "../Components/Footer/Footer.jsx";
import { makeStyles } from "@mui/styles";

// Styles for contact page
const styles = makeStyles(({ breakpoints, palette }) => {
  return {
    textColored: {
      color: `${palette.primary.main} !important`,
    },
    root: {
      height: "100%",
      minHeight: "90vh",
      padding: 10,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      fontWeight: "bolder !important",
      marginTop: "10px !important",
      marginBottom: "20px !important",
      [breakpoints.down("sm")]: {
        fontSize: "1.8rem !important",
        marginTop: "10vh !important",
      },
    },
    subtitle: {
      marginBottom: "30px !important",
    },
    hiddenLinks: {
      color: `${palette.primary.main}`,
      textDecoration: "none",
      "&:hover": {
        color: `${palette.primary.alt} !important`,
      },
    }
  };
});

function Contact() {
  const classes = styles();
  return (
    <>
      {/* Contact Page */}
      <Header />
      <Container maxWidth="lg">
        <Grid
          container
          className={classes.root}
        >
          <Grid
            item
            xs={12}
          >
            <Typography variant="h3" className={classes.title}>
              Get in <span className={classes.textColored}>Touch</span>
            </Typography>
            <ContactLink spacing={2} />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Contact;