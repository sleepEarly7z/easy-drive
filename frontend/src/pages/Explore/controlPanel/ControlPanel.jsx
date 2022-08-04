import { Box, Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import FilterByList from './filter/FilterByList';
import SortByList from './sort/SortByList';
import { getInstructorsAsync } from '../../../redux/instructors/thunks';

const ControlPanel = (props) => {
    const dispatch = useDispatch();
    const query = useSelector((state) => (state.query));

    const applyQuery = () => {
        dispatch(getInstructorsAsync(query));
    }

    return (
        <Box
            sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start'
            }}
        >

            <FilterByList />

            <SortByList />

            <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: 1 }}>
                <Button onClick={applyQuery}>apply</Button>
            </Box>
        </Box>
    )
}

export default ControlPanel