import { SORT_OPTIONS } from "./FILTER_CATEGORIES";

import React, { useState } from 'react'

import {
    List,
    ListSubheader,
    RadioGroup,
    Radio,
    FormControlLabel

} from '@mui/material'

const SortingList = () => {
    const sortOptions = SORT_OPTIONS;

    return (
        <>
            <List
                sx={{ bgcolor: 'background.paper' }}

                subheader={
                    <ListSubheader component="div" id="nested-list-subheader" sx={{ alignSelf: 'flex-start' }}>
                        Sort By
                    </ListSubheader>
                }
            >

                <RadioGroup
                    sx={{ pl: 2 }}
                    defaultValue=""
                >

                    {sortOptions.map(option => (
                        <FormControlLabel value={option.value} control={<Radio />} label={option.label} />
                    ))}

                </RadioGroup>

            </List>
        </>
    );

}

export default SortingList;