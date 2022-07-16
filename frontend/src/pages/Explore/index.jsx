import './index.scss'
import Slider from '../../components/Slider'
import React, { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ResultList from './ResultList';
import ControlPanel from './controlPanel/ControlPanel'

const Explore = () => {
    return (
        <div className="Explore">
            <Box xs={{ mb: 2 }}>
                <Slider />
            </Box>

            <Grid container>
                <Grid item xs={4}>
                    <ControlPanel />
                </Grid>

                <Grid item xs={8}>
                    <ResultList />
                </Grid>
            </Grid>
        </div>
    )
}

export default Explore
