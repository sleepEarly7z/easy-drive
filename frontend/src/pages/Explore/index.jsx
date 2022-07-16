import './index.scss'
import Slider from '../../components/Slider'
import React, { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ResultList from './ResultList';
import ControlPanel from './controlPanel/ControlPanel'
import { useDispatch, useSelector } from 'react-redux';
import { getInstructorsAsync } from '../../redux/instructors/thunks';

const Explore = () => {
    const dispatch = useDispatch();

    // states
    const [filterBy, setFilterBy] = useState([]);
    const [sortBy, setSortBy] = useState('ratingDesc');

    useEffect(() => {
        dispatch(getInstructorsAsync());
    }, []);

    const instructors = useSelector((state) => state.instructors.list);

    return (
        <div className="Explore">
            <Box xs={{ mb: 2 }}>
                <Slider />
            </Box>

            <Grid container>
                <Grid item xs={4}>
                    <ControlPanel
                        filterBy={filterBy}
                        setFilterBy={setFilterBy}
                        sortBy={sortBy}
                        setSortBy={setSortBy}
                    />
                </Grid>

                <Grid item xs={8}>
                    <ResultList
                        instructors={instructors}
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default Explore
