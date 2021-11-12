import { makeStyles } from "@mui/styles";

// Styles for work experience cards section
export default makeStyles(({ palette }) => {
    return {
        websiteBtn: {
            marginRight: "10px !important",
            textAlign: "center",
        },
        card: {
            display: 'flex', justifyContent: 'space-between', flexDirection: 'column', width: '100%',
        },
        grid: {
            display: 'flex',
        },
        feedback: {
            textAlign: "center",
        },
    };
});