import { SORT_OPTIONS } from "../../../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from 'react'
import {
    ListSubheader,
    RadioGroup,
    Radio,
    FormControlLabel,
    FormControl,
} from '@mui/material'
import { updateQueryAsync } from "../../../../redux/query/thunks";

const SortByList = (props) => {
    const dispatch = useDispatch();
    const sortOptions = SORT_OPTIONS;
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        const value = event.target.value;
        // ui radio button
        setValue(value);

        const option = sortOptions.find(option => option.value === value);
        const sortBy = option.payload;
        dispatch(updateQueryAsync({ sortBy }));

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