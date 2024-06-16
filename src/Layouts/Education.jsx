import Header from "../Components/Header/Header";
import { Container, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import Footer from "../Components/Footer/Footer.jsx";
import { makeStyles } from "@mui/styles";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Content from '../Lib/Content';
import AkshatGupta from '../Assets/Akshat_Gupta.jpeg';

// Styles for Education page
const styles = makeStyles(({ breakpoints, palette }) => {
  return {
    textColored: {
      color: `${palette.primary.main} !important`,
    },
    root: {
      height: "100%",
      minHeight: "100vh",
      padding: 10,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "7vh",
      [breakpoints.down("sm")]: {
        marginTop: "10vh",
      },
    },
    title: {
      fontWeight: "bolder !important",
      [breakpoints.down("sm")]: {
        fontSize: "1.8rem !important",
      },
    },
    hideSmall: {
      [breakpoints.down("sm")]: {
        display: "none !important"
      },
    },
    hiddenLinks: {
      color: `${palette.primary.main}`,
      "&:hover": {
        color: `${palette.primary.alt} !important`,
      },
    },
    photo: {
      width: "250px",
      height: "auto",
      borderRadius: "10px",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      [breakpoints.up("md")]: {
        marginLeft: "30px",
      },
    },
    timeline: {
      [breakpoints.up("md")]: {
        marginRight: "30px",
      },
    }
  };
});

function Education() {
  const classes = styles();
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      {/* Education Page */}
      <Header />
      <Container maxWidth="lg">
        <Grid
          container
          className={classes.root}
        >
          {/* Heading */}
          <Grid
            item
            xs={12}
          >
            <Typography variant="h3" className={classes.title}>
              Education
            </Typography>
          </Grid>
          {/* Grid */}
          <Grid
            item
            xs={12}
            sm={2}
            className={classes.hideSmall}
          >
            <img src={AkshatGupta} alt="Akshat Gupta" className={classes.photo} draggable="false" />
          </Grid>
          <Grid
            item
            xs={12}
            sm={10}
          >
            {/* Timeline */}
            <Timeline position={(small) ? "left" : "right"} className={classes.timeline}>
              <TimelineItem>
                <TimelineOppositeContent color="text.primary">
                  <Typography variant="h6" component="span">
                    {Content.education.ug.type}
                  </Typography>
                  <Typography>{Content.education.ug.duration}</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" component="span">
                    {Content.education.ug.name}
                  </Typography>
                  <Typography>{Content.education.ug.course}</Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="text.primary">
                  <Typography variant="h6" component="span">
                    {Content.education.highSchool.type}
                  </Typography>
                  <Typography>{Content.education.highSchool.duration}</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="secondary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" component="span">
                    {Content.education.highSchool.name}
                  </Typography>
                  <Typography>{Content.education.highSchool.course}</Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="text.primary">
                  <Typography variant="h6" component="span">
                    {Content.education.juniorSchool.type}
                  </Typography>
                  <Typography>{Content.education.juniorSchool.duration}</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" component="span">
                    {Content.education.juniorSchool.name}
                  </Typography>
                  <Typography>{Content.education.juniorSchool.course}</Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Grid>
          <Grid
            item
            xs={12}
          >
            {/* Text */}
            <Typography variant="h5" className={classes.title}>
              Do I depend solely on books? 📚
            </Typography>
            <Typography variant="body1" mt={1}>
              My learning is not limited to the academic institutions I've been to. I believe in practical learning and take up tasks in new domains. I learn how to complete a task and hence learn my way up to mastering that domain.
            </Typography>
            <Typography variant="body1" mt={1}>
              I prefer grasping an unfamiliar concept through blog posts or examples which is why whenever I want to learn something technical, I explore Medium Blogs, Stack Overflow or GitHub repositories for better understanding.
            </Typography>
            <Typography variant="body1" mt={1}>
              I've been certified by Microsoft, Google, Coursera and Udemy for my skills in various domains:
            </Typography>
            <ul mt={1} mb={2}>
              <li><a target="_blank" rel="noreferrer" className={classes.hiddenLinks} href="https://www.pmi.org/certifications/certification/resources/registry">Project Management Professional</a> (Credential ID 3711794)</li>
              <li><a target="_blank" rel="noreferrer" className={classes.hiddenLinks} href="https://www.credly.com/badges/5053df0e-dcc8-4330-9075-1b11b25b6ae3/github">AWS Certified Cloud Practitioner</a> (Credential ID 5053df0e-dcc8-4330-9075-1b11b25b6ae3)</li>
              <li><a target="_blank" rel="noreferrer" className={classes.hiddenLinks} href="https://www.youracclaim.com/badges/92059ed2-9f17-4b35-abda-23c1c9d3ff53">Microsoft Certified: Azure Fundamentals</a> (Credential ID: CbcH-Dw8E)</li>
              <li><a target="_blank" rel="noreferrer" className={classes.hiddenLinks} href="https://skillshop.exceedlms.com/student/award/63280081">Google Cloud Platform Business Professional Accreditation</a> (Credential ID: 63280081)</li>
              <li><a target="_blank" rel="noreferrer" className={classes.hiddenLinks} href="https://learndigital.withgoogle.com/digitalgarage/validate-certificate-code">The Fundamentals of Digital Marketing</a> (Credential ID: P7V 2QN 63L)</li>
              <li><a target="_blank" rel="noreferrer" className={classes.hiddenLinks} href="https://studentambassadors.microsoft.com/certificate/e14d1cd4-183c-43d3-aaad-34d05c6a82b6">Microsoft Learn Student Ambassador</a></li>
              <li><a target="_blank" rel="noreferrer" className={classes.hiddenLinks} href="https://www.coursera.org/account/accomplishments/verify/7PLZLGHTCPFZ">Google Cloud Platform Fundamentals: Core Infrastructure</a> (Credential ID: 7PLZLGHTCPFZ)</li>
              <li><a target="_blank" rel="noreferrer" className={classes.hiddenLinks} href="https://www.hackerrank.com/certificates/b7d22892d983">Python (Basic)</a> (Credential ID: B7D22892D983)</li>
              <li><a target="_blank" rel="noreferrer" className={classes.hiddenLinks} href="https://bit.ly/akshatvgCertificates">All Other Certificates</a></li>
            </ul>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Education;