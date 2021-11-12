import React from 'react';
import styles from "./WorkExperienceCardsStyles.jsx";
import { Typography, Button, Card, CardContent, CardActions, Grid } from "@mui/material";

// Work Experience Card
const WorkExperienceCards = (props) => {
    const classes = styles();
    return (
        <>
            <Grid
                item
                className={classes.grid}
                xs={12}
                md={6}
            >
                <Card className={classes.card}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" color="primary">
                            {props.work.company}
                        </Typography>
                        <Typography gutterBottom variant="body1" component="div" color="secondary">
                            {props.work.role}
                        </Typography>
                        <Typography gutterBottom variant="body2" component="div" color="text.secondary">
                            {props.work.duration}
                        </Typography>
                        {props.work.description.map((line, index) => {
                            return (
                                <Typography variant="body1" color="text.primary" className="text-xl" key={index}>
                                    {line}
                                </Typography>
                            );
                        })}
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="secondary" variant="outlined" href={props.work.link} target="_blank" rel="noreferrer" className={classes.websiteBtn} download>
                            View Website
                        </Button>
                        {props.work.feedback &&
                            <Button size="small" color="primary" variant="outlined" href={props.work.feedback} target="_blank" rel="noreferrer" download className={classes.feedback}>
                                Employer Feedback
                            </Button>
                        }
                    </CardActions>
                </Card>
            </Grid>
        </>
    );
};

export default WorkExperienceCards;