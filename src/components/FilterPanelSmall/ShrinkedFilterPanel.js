import React, { useState,useEffect,useRef } from 'react'
import { Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import './ShrinkedFilterPanel.scss'
import FilterPanel from '../../components/FilterPanel/FilterPanel'

import $ from 'jquery';

let useClickOutside = (handler) => {
  let closeFilterRef = useRef();
  useEffect(() => {
    let maybeHandler = (event)=> {
      if(!closeFilterRef.current.contains(event.target))
      handler();
    }
    document.addEventListener("mousedown",maybeHandler);
    return ()=> {
      document.removeEventListener("mousedown",maybeHandler);
    };
  });
    return closeFilterRef
  };

export default function ShrinkedFilterPanel() {
  const [openFilter, setOpenFilter] = useState(false)

  let closeFilterRef = useClickOutside(() => {
    handleCloseFilter();
  })

  function handleOpenFilter() {
    setOpenFilter(true)
    // document.documentElement.style.setProperty('background-color', 'red');
    $(document.body).css("background-color", 'rgba(0,0,0,0.4)');
    $("div.ShrinkedFilterPanel-main").css("background-color", "rgba(0,0,0,0)");
    $("div.ShrinkedFilterPanel-filterPanel").css("background-color", "white");
    $(".shrinkedFilterPanel").css("height", "100%");
    // $('.upper-container').css("background", 'rgba(0,0,0,0.4)');
    // $('.image-container').css("background-color", 'rgba(0,0,0,0.4)');
    // $('.image-container-img').css("background-color", 'rgba(0,0,0,0.4)');
    // $('.lower-container').css("background-color", 'rgba(0,0,0,0.4)');
    // $('.profilecard-buttons').css("background-color", 'rgba(0,0,0,0.4)');
    // $('.profileButton').css("background-color", 'rgba(0,0,0,0)');
    // $('.favouriteButton').css("background-color", 'rgba(0,0,0,0)');

    window.addEventListener("resize", checkWindowSize);
  }

  function checkWindowSize() {
    if (window.innerWidth > 700) {
      handleCloseFilter()
    }
  }

  function handleCloseFilter() {
    setOpenFilter(false)
    $(document.body).css("background-color", '');
    $("div.ShrinkedFilterPanel-main").css("background-color", "")
    $("div.ShrinkedFilterPanel-filterPanel").css("background-color", "");
    $(".shrinkedFilterPanel").css("height", "");
  }

  return (
    <div className='ShrinkedFilterPanel'>
      <div className='ShrinkedFilterPanel-main'>
        <div className='ShrinkedFilterPanel-leftPanel'>
          <FormControl className='classes.formControl'>
            <InputLabel>Sort</InputLabel>
            <Select className='ShrinkedFilterPanel-dropDown' defaultValue="Best Match" >
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
      <div className='ShrinkedFilterPanel-filterPanel' ref={closeFilterRef}>
        <FilterPanel mainFilter={false} open={openFilter} onClose={handleCloseFilter} />
      </div>
    </div>
  )

}
