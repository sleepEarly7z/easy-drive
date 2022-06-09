import React, { useState } from 'react'
import { Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import './ShrinkedFilterPanel.css'
import SideFilterPanel from './SideFilterPanel';
import $ from 'jquery';

export default function ShrinkedFilterPanel() {
  const [openFilter, setOpenFilter] = useState(false)

  function handleOpenFilter() {
    setOpenFilter(true)
    // document.documentElement.style.setProperty('background-color', 'red');
    $(document.body).css("background-color", 'rgba(0,0,0,0.4)');
    $("div.ShrinkedFilterPanel-main").css("background-color", "rgba(0,0,0,0)")
    $("div.ShrinkedFilterPanel-filterPanel").css("background-color", "white")
  }

  function handleCloseFilter() {
    setOpenFilter(false)
    $(document.body).css("background-color", '');
    $("div.ShrinkedFilterPanel-main").css("background-color", "")
  }

  return (
    <div className='ShrinkedFilterPanel'>
      <div className='ShrinkedFilterPanel-main'>
        <div className='ShrinkedFilterPanel-leftPanel'>
          <FormControl className='classes.formControl'>
            <InputLabel>Sort</InputLabel>
            <Select className='ShrinkedFilterPanel-dropDown'>
              <MenuItem value={"Best Match"}>Best Match</MenuItem>
              <MenuItem value={"Price Low-High"}>Price Low-High</MenuItem>
              <MenuItem value={"Price High-Low"}>Price High-Low</MenuItem>
              <MenuItem value={"Highest Rated"}>Highest Rated</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className='ShrinkedFilterPanel-rightPanel'>
          <Button className='ShrinkedFilterPanel-filter-button'
            onClick={handleOpenFilter}>Filter</Button>
        </div>
      </div>
      <div className='ShrinkedFilterPanel-filterPanel'>
        <SideFilterPanel open={openFilter} onClose={handleCloseFilter} />
      </div>
    </div>
  )

}
