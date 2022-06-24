import React, { useState } from 'react'
import { FILTER_CATEGORIES, SORT_OPTIONS } from './FILTER_CATEGORIES';
import FilterCategory from './FilterCategory'
import { Box, List, ListSubheader, Button, Stack, Grid, Container } from '@mui/material'

const FilterList = () => {
    const [expanded, setExpanded] = useState(true)

    const categories = FILTER_CATEGORIES

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
            <List
                sx={{ bgcolor: 'background.paper', width: 300 }}

                subheader={
                    <ListSubheader component="div" id="nested-list-subheader" sx={{ alignSelf: 'flex-start' }}>
                        Filter By
                    </ListSubheader>
                }
            >
                {categories.map((category) => (
                    <FilterCategory key={category.id} category={category} />
                ))}
            </List>
        );
    }

    return (
        renderBigPanel()
    )
}

export default FilterList