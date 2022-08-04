import './index.scss'
import Slider from '../../components/Slider'
import React from 'react';
import Grid from '@mui/material/Grid';
import ResultList from './ResultList';
import ControlPanel from './controlPanel/ControlPanel'
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const Explore = () => {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#FFD800'
            }
        },
    });

    return (
        <ThemeProvider
            theme={theme}
        >
            <Slider />

            <Grid container spacing={2} sx={{ mt: 2, pl: 3 }}>
                <Grid item xs={0} sm={3}>
                    <ControlPanel />
                </Grid>
                <Grid item xs={12} sm={9}>
                    <Typography gutterBottom variant='h5'>
                        Matching Instructors
                    </Typography>
                    <Divider />
                    <ResultList />
                </Grid>
            </Grid >
        </ThemeProvider >
    )
}

export default Explore
