import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getInstructorsAsync } from '../../redux/instructors/thunks';
import NewProfileCard from './ProfileCard';
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';

const ResultList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getInstructorsAsync());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const instructors = useSelector((state) => state.instructors.list);

    return (
        <Box sx={{ overflowY: 'scroll', height: '70vh' }}>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {instructors.map((x) => (
                    <ListItem alignItems="flex-start" key={x._id}>
                        <NewProfileCard
                            id={x._id}
                            name={`${x.first_name} ${x.last_name}`}
                            location={x.city}
                            year={x.experience}
                            rating={x.rating}
                            language={x.language}
                            profileUrl={x.photo}
                            instructorId={x._id}
                        />
                    </ListItem>))}
            </List>
        </Box >
    );
}

export default ResultList;
