import { SORT_OPTIONS } from "../../../../utils/constants";

import React, { useState } from 'react'

import {
    ListSubheader,
    RadioGroup,
    Radio,
    FormControlLabel,
    FormControl,
} from '@mui/material'

const SortByList = (props) => {
    const { sortBy, setSortBy } = props;
    const sortOptions = SORT_OPTIONS;

    const [value, setValue] = useState(sortBy);

    const handleChange = (event) => {
        //ui
        setValue(event.target.value);

        // sortBy state
        setSortBy(event.target.value);
    };

    return (

        <FormControl>
            <ListSubheader component="div" id="nested-list-subheader" sx={{ alignSelf: 'flex-start' }}>
                Sort By
            </ListSubheader>
            <RadioGroup
                sx={{ pl: 2 }}
                value={value}
                onChange={handleChange}
            >
                {sortOptions.map(option => (
                    <FormControlLabel value={option.value} control={<Radio />} label={option.label} />
                ))}

            </RadioGroup>
        </FormControl>
    );
}

export default SortByList;