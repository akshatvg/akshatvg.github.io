import { Container, Grid, Typography } from "@mui/material";
import styles from "./SkillsStyles.jsx";
import Chip from '@mui/material/Chip';
import Content from '../../Lib/Content.jsx';
import { Link } from 'react-router-dom';

function SkillsSection() {
    const classes = styles();

    return (
        <>
            {/* Skills Section */}
            <Container maxWidth="lg" id="skills-section">
                <Grid
                    container
                    className={classes.root}
                >
                    <Grid
                        item
                        xs={12}
                    >
                        <Typography variant="h3" className={classes.title}>
                            My <span className={classes.textColored}>Skills</span>
                        </Typography>
                        <Typography variant="h5" className={classes.subtitle}>
                            Languages, Frameworks, Tools and SDKs
                        </Typography>
                        <Grid container spacing={1}>
                            {Content.languagesFrameworksTools.map((item, index) => {
                                return (<Grid item key={index}><Chip label={item} color="primary" size="medium" className={(index % 2 === 0) ? classes.ChipPrimary : classes.ChipSecondary} key={index} md={3} /></Grid>);
                            }
                            )}
                        </Grid>
                        <Typography variant="h5" className={classes.subtitle}>
                            Project Management
                        </Typography>
                        <Grid container spacing={1}>
                            {Content.projectManagement.map((item, index) => {
                                return (<Grid item key={index}><Chip label={item} color="primary" size="medium" className={(index % 2 === 0) ? classes.ChipPrimary : classes.ChipSecondary} key={index} md={3} /></Grid>);
                            }
                            )}
                        </Grid>
                        <Typography variant="h5" className={classes.subtitle}>
                            Marketing
                        </Typography>
                        <Grid container spacing={1}>
                            {Content.marketing.map((item, index) => {
                                return (<Grid item key={index}><Chip label={item} color="primary" size="medium" className={(index % 2 === 0) ? classes.ChipPrimary : classes.ChipSecondary} key={index} md={3} /></Grid>);
                            }
                            )}
                        </Grid>
                        <Typography variant="h5" className={classes.subtitle}>
                            DevOps and Cloud Computing
                        </Typography>
                        <Grid container spacing={1}>
                            {Content.devOpsCloud.map((item, index) => {
                                return (<Grid item key={index}><Chip label={item} color="primary" size="medium" className={(index % 2 === 0) ? classes.ChipPrimary : classes.ChipSecondary} key={index} md={3} /></Grid>);
                            }
                            )}
                        </Grid>
                        <Typography variant="body1" className={classes.byLine}>
                            You can check out some of <a href="https://www.linkedin.com/in/akshatvg" className={classes.textColored} target="_blank" rel="noreferrer">my work</a> or <Link to="/contact" className={classes.textColored}>get in touch</Link> with me.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default SkillsSection;

