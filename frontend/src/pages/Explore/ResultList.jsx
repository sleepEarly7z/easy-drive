import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getInstructorsAsync } from '../../redux/instructors/thunks';
import NewProfileCard from './ProfileCard';

const ResultList = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getInstructorsAsync());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const instructors = useSelector((state) => state.instructors.list);

    return (
        <Grid container
            rowSpacing={1}
            columnSpacing={2}>
            {instructors.map((x, index) => (
                <Grid item key={`${x._id}_${index}`} sx={{ minWidth: 300 }}>
                    <NewProfileCard
                        key={x._id}
                        id={x._id}
                        name={`${x.first_name} ${x.last_name}`}
                        location={x.city}
                        year={x.experience}
                        rating={x.rating}
                        language={x.language}
                        profileUrl={x.photo}
                        instructorId={x._id}
                    />
                </Grid>
            ))
            }
        </Grid >
    );
}

export default ResultList;
