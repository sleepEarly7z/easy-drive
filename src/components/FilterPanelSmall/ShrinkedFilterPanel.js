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
    $("div.fadeMe").css("opacity",0.5)
    $("div.fadeMe").css("background","#000")
    $("div.fadeMe").css("width","100%")
    $("div.fadeMe").css("height","100%")
    $("div.fadeMe").css("top","0")
    $("div.fadeMe").css("left","0")
    $("div.fadeMe").css("position","fixed")
    $("div.ShrinkedFilterPanel-filterPanel").css("z-index", "99");
    $("div.shrinkedFilterPanel-filterPanel").css("height", "100%");
    $("div.ShrinkedFilterPanel-filterPanel").css("background-color", "white");
    

    // $(document.body).css("background-color", 'rgba(0,0,0,0.4)');
    // $("div.ShrinkedFilterPanel-main").css("background-color", "rgba(0,0,0,0)");
    // $(".shrinkedFilterPanel").css("height", "100%");
    // $(".shrinkedFilterPanel").css("z-index", "99");


    window.addEventListener("resize", checkWindowSize);
  }

  function checkWindowSize() {
    if (window.innerWidth > 700) {
      handleCloseFilter()
    }
  }

  function handleCloseFilter() {
    setOpenFilter(false)
    $("div.fadeMe").css("opacity","")
    $("div.fadeMe").css("background","")
    $("div.fadeMe").css("width","")
    $("div.fadeMe").css("height","")
    $("div.fadeMe").css("z-index","")
    $("div.ShrinkedFilterPanel-filterPanel").css("z-index", "");
    $("div.fadeMe").css("top","")
    $("div.fadeMe").css("left","")
    $("div.fadeMe").css("position","")
    $("div.ShrinkedFilterPanel").css("z-index", "");
    $("div.shrinkedFilterPanel").css("height", "");
    $("div.ShrinkedFilterPanel").css("background-color", "");
    
    // $(document.body).css("background-color", '');
    // $("div.ShrinkedFilterPanel-main").css("background-color", "")
    // $("div.ShrinkedFilterPanel-filterPanel").css("background-color", "");
    // $(".shrinkedFilterPanel").css("height", "");
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
      <div class="fadeMe">
      </div>
      <div className='ShrinkedFilterPanel-filterPanel' ref={closeFilterRef}>
        <FilterPanel mainFilter={false} open={openFilter} onClose={handleCloseFilter} />
      </div>
    </div>
  )

}
