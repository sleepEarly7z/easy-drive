import React from "react";
import { Checkbox } from "@mui/material";
import Stack from '@mui/material/Stack';

const FilterCategory = ({ category }) => {
    const name = category.name;
    const options = category.options;

    return (
        <li className="FilterCategory">
            <div className="category-name">{name}</div>
            <Stack
                className="options-container"
                direction="column"
                justifyContent="flex-start"
                alignItems="stretch"
                spacing={0.5}>

                {options.map((option, index) => {
                    const uid = name + '_' + index;
                    return (
                        <div key={uid} className="option">
                            <Checkbox type="checkbox" id={uid} name={name} value={option} />
                            <label htmlFor={uid}>{option}</label>
                        </div>
                    )
                })}

            </Stack>
        </li >
    );
}

export default FilterCategory;