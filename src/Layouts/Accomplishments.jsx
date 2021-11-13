import Header from "../Components/Header/Header";
import { Container, Grid, Typography, Paper } from "@mui/material";
import Footer from "../Components/Footer/Footer.jsx";
import { makeStyles } from "@mui/styles";
import Content from '../Lib/Content';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// Styles for Accomplishments page
const styles = makeStyles(({ breakpoints, palette }) => {
    return {
        root: {
            height: "100%",
            minHeight: "80vh",
            padding: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "10vh",
            [breakpoints.down("sm")]: {
                marginTop: "1vh",
                minHeight: "90vh",
            },
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
    };
});

function Accomplishments() {
    const classes = styles();

    return (
        <>
            {/* Accomplishments Page */}
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
                            Accomplishments
                        </Typography>
                        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                            <TableContainer>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>
                                                Award
                                            </TableCell>
                                            <TableCell>
                                                Description
                                            </TableCell>
                                            <TableCell>
                                                By
                                            </TableCell>
                                            <TableCell>
                                                When
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {Content.accomplishments.map((row, index) => (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                                <TableCell>
                                                    {row.award}
                                                </TableCell>
                                                <TableCell>
                                                    {row.description}
                                                </TableCell>
                                                <TableCell>
                                                    {row.by}
                                                </TableCell>
                                                <TableCell>
                                                    {row.when}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </>
    );
}

export default Accomplishments;