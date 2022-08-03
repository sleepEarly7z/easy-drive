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

            <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={3}>
                    <ControlPanel />
                </Grid>
                <Grid item xs={8}>
                    <Typography gutterBottom variant='h5'>
                        Search Results
                    </Typography>
                    <Divider />
                    <ResultList />
                </Grid>
            </Grid >
        </ThemeProvider >
    )
}

export default Explore
