import React, { useState } from 'react'
import {
    Checkbox,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Collapse,
} from '@mui/material'
import { ExpandLess, ExpandMore } from '@mui/icons-material'

const FilterCategory = (props) => {
    const { category, filterBy, setFilterBy } = props;

    const name = category.name
    const options = category.options

    const [open, setOpen] = useState(true)
    const [checked, setChecked] = useState([])

    const handleClick = () => {
        setOpen(!open)
    }

    const handleToggle = (value) => () => {
        // ui toggle
        const currentIndex = checked.indexOf(value)
        const newChecked = [...checked]

        if (currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }
        setChecked(newChecked)

        // update filterBy
        updateFilterBy(name, newChecked);
        console.log(filterBy);
    }

    const updateFilterBy = (categoryName, checkedOptions) => {
        console.log(filterBy);
        // find the categrory in the list in state and then update it
        for (const category of filterBy) {
            if (category.categoryName === categoryName) {
                category['options'] = checkedOptions;
                return setFilterBy(filterBy);
            }
        }
        // category is not in filterBy, add new category
        filterBy.push({ categoryName, options: checkedOptions });
        setFilterBy(filterBy);
    }

    return (
        <>
            <ListItemButton onClick={handleClick} minwidth="sm">
                <ListItemText primary={name} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List
                    sx={{
                        width: '100%',
                        minwidth: 'sm',
                        bgcolor: 'background.paper',
                    }}
                >
                    {options.map((option, index) => {
                        const uid = name + '_' + index
                        return (
                            <ListItem key={uid} disablePadding>
                                <ListItemButton
                                    role={undefined}
                                    onClick={handleToggle(option)}
                                    dense
                                >
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={
                                                checked.indexOf(option) !== -1
                                            }
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{
                                                'aria-labelledby': option,
                                            }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText
                                        id={uid}
                                        primary={`${option}`}
                                    />
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </List>
            </Collapse>
        </>
    )
}

export default FilterCategory
