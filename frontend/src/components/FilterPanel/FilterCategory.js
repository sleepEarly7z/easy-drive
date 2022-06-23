import React, { useState, useEffect } from 'react'
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
import { useSelector, useDispatch } from 'react-redux';
import { getFiltersAsync,getInstructorsAsync,updateFilterAsync } from '../../redux/instructors/thunks';


const FilterCategory = ({ category }) => {
    const dispatch = useDispatch()
    const instructors = useSelector(state => state.instructors.list);
    // const filters = useSelector(state => state.instructors.filter);

    const name = category.name
    const options = category.options

    const [open, setOpen] = useState(true)
    const [checked, setChecked] = useState([0])

    const handleClick = () => {
        setOpen(!open)
    }

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value)
        const newChecked = [...checked]

        if (currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }

        setChecked(newChecked)
    }

    const handleFilterChecked = (option) => {
        dispatch(getFiltersAsync());
        console.log("checked")
        for (let instructor in instructors) {
            console.log(instructor.city)
            if (instructor.city === option || instructor.language === option) {
               
                const id = instructor.id;
                dispatch(updateFilterAsync({ id }));
            }
        }
    }

    // useEffect(() => {
    //     dispatch(getInstructorsAsync());
    //     dispatch(getFiltersAsync());
    //   }, []);

    return (
        <>
            <ListItemButton onClick={handleClick}>
                <ListItemText primary={name} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List
                    sx={{
                        width: '100%',
                        maxWidth: 360,
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
