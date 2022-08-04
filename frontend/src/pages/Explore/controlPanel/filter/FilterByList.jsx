import React from 'react'
import { FILTER_CATEGORIES } from '../../../../utils/constants';
import FilterCategory from './FilterCategory'
import { List, ListSubheader } from '@mui/material'
import { useState } from 'react';

const FilterByList = (props) => {
    const [filterBy, setFilterBy] = useState([]);

    const categories = FILTER_CATEGORIES;

    return (
        <List
            sx={{ width: 1 }}

            subheader={
                <ListSubheader component="div" id="nested-list-subheader" sx={{ alignSelf: 'flex-start' }}>
                    Filter By
                </ListSubheader>
            }
        >
            {categories.map((category) => (
                <FilterCategory
                    key={category.id}
                    category={category}
                    filterBy={filterBy}
                    setFilterBy={setFilterBy} />
            ))}
        </List>
    )
}

export default FilterByList