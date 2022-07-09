import './index.scss'
import Slider from '../../components/Slider'
import React, { useState } from 'react';

import Grid from '@mui/material/Grid';
import ResultList from './ResultList';
import ControlPanel from './controlPanel/ControlPanel'

const Explore = () => {
    // states
    const [filterBy, setFilterBy] = useState([]);
    const [sortBy, setSortBy] = useState('ratingDesc');

    return (
        <div className="Explore">
            <Slider />

            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <ControlPanel
                        filterBy={filterBy}
                        setFilterBy={setFilterBy}
                        sortBy={sortBy}
                        setSortBy={setSortBy}
                    />
                </Grid>

                <Grid item xs={8}>
                    <ResultList />
                </Grid>

            </Grid>
        </div>
    )
}

export default Explore
