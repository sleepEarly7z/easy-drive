import { Box, Button } from '@mui/material'
import { useSelector } from 'react-redux';

import FilterByList from './filter/FilterByList';
import SortByList from './sort/SortByList';

const ControlPanel = (props) => {
    const query = useSelector((state) => (state.query));

    return (
        <Box
            sx={{
                p: 2,
                display: { xs: 'none', md: 'flex' },
                flexDirection: 'column',
                alignItems: 'flex-start',
                width: 300
            }}
        >

            <FilterByList />

            <SortByList />

            <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: 1 }}>
                <Button variant="outline-primary">reset</Button>
                <Button onClick={() => { }}>apply</Button>
            </Box>
        </Box>
    )
}

export default ControlPanel