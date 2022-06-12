import React, { useState } from 'react'
import './index.scss'
import { FILTER_CATEGORIES } from '../../utils/constants'
import FilterCategory from './FilterCategory'
import { Box, List, ListSubheader, Button, Stack, Grid } from '@mui/material'

const FilterPanel = ({ mainFilter, open, onClose }) => {
    const [expanded, setExpanded] = useState(true)

    if (!open) return null
    const categories = FILTER_CATEGORIES

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submitted')
    }

    const handleClick = () => {
        setExpanded(!expanded)
    }

    return (
        <Box
            item
            className={mainFilter ? 'FilterPanel' : 'sideFilterPanel'}
            sx={{ p: 2, minWidth: 250 }}
        >
            <List
                sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Filter By
                    </ListSubheader>
                }
            >
                <div className="filterPanel-Close-Button-div">
                    <Button
                        className="filterPanel-Close-Button"
                        onClick={onClose}
                    >
                        Close
                    </Button>
                </div>
                {categories.map((category) => (
                    <FilterCategory key={category.id} category={category} />
                ))}
            </List>

            <Stack spacing={1} derection="row" className="FilterPanel-Stack">
                <Button variant="outline-primary">reset</Button>
                <Button type="submit">apply</Button>
            </Stack>
        </Box>
    )
}

export default FilterPanel
