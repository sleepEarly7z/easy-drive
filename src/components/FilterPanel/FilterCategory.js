import React, { useState } from "react";
import { Checkbox, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Collapse } from "@mui/material";
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const FilterCategory = ({ category }) => {
    const name = category.name;
    const options = category.options;

    const [open, setOpen] = useState(true);
    const [openLicenseType, setOpenLicenseType] = useState(true);

    const [checked, setChecked] = useState([0]);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleClickLicenseType = () => {
        setOpenLicenseType(!openLicenseType);
    }

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };


    /**
     * 
     * @param {object} option
     * @param {string} option.type
     * @param {string[]} option.classes
     * 
     * @returns {ReactJSXElement}
     */
    const renderLicenceType = (option) => {
        return (
            <>
                <ListItemButton onClick={handleClickLicenseType}>
                    <ListItemText primary={option.type} />
                    {openLicenseType ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={openLicenseType} timeout="auto" unmountOnExit>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        {option.classes.map((className, index) => {
                            const uid = className + '_' + index;
                            return renderCheckboxes(uid, className);
                        })}
                    </List>
                </Collapse>
            </>
        );
    }

    const renderCheckboxes = (uid, option) => {
        return (
            <ListItem key={uid} disablePadding>
                <ListItemButton role={undefined} onClick={handleToggle(option)} dense>
                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            checked={checked.indexOf(option) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': option }}
                        />
                    </ListItemIcon>
                    <ListItemText id={uid} primary={`${option}`} />
                </ListItemButton>
            </ListItem>
        );
    }


    return (
        <>
            <ListItemButton onClick={handleClick}>
                <ListItemText primary={name} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {options.map((option, index) => {
                        const uid = name + '_' + index;
                        return (name === "licence type") ? renderLicenceType(option) : renderCheckboxes(uid, option)
                    })}
                </List>
            </Collapse>
        </>
    );
}

export default FilterCategory;