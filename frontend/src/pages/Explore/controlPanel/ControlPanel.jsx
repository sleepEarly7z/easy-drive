import { Box, Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';

import FilterByList from './filter/FilterByList';
import SortByList from './sort/SortByList';
import { getInstructorsAsync } from '../../../redux/instructors/thunks';

const ControlPanel = (props) => {
    const dispatch = useDispatch();
    const query = useSelector((state) => (state.query));

    const applyQuery = () => {
        console.log('clicked');
        dispatch(getInstructorsAsync(query));
    }

    return (
        <Box
            sx={{
                p: 2,
                display: { xs: 'none', md: 'flex' },
                flexDirection: 'column',
                alignItems: 'flex-start',
                height: '80vh',
                overflowY: 'scroll',
                maxWidth: 300,
                overflowX:'hidden'
            }}
        >

            <FilterByList />

            <SortByList />

            <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: 1 }}>
                <Button variant="outline-primary">reset</Button>
                <Button onClick={applyQuery}>apply</Button>
            </Box>
        </Box>
    )
}

export default ControlPanel