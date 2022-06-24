import React, { useState } from 'react'
import { FILTER_CATEGORIES, SORT_OPTIONS } from './FILTER_CATEGORIES';
import SortByList from './SortByList';
import FilterByList from './FilterByList'
import { Box, List, ListSubheader, Button, Stack, Grid, Container } from '@mui/material'

const FilterSortPanel = (props) => {
    const


    const [expanded, setExpanded] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submitted')
    }

    const handleClick = () => {
        setExpanded(!expanded)
    }

    const renderSmallPanel = () => {

    }

    const renderBigPanel = () => {
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

                <FilterByList setFilterBy={setFilterBy} />

                <SortByList setSortBy={setSortBy} />

                <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: 1 }}>
                    <Button variant="outline-primary">reset</Button>
                    <Button type="submit">apply</Button>
                </Box>

            </Box>
        );
    }

    return (
        <Container>
            {renderBigPanel()};
        </Container>
    )
}

export default FilterSortPanel