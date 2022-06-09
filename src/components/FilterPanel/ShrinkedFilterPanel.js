import React, { useState } from 'react'
import {Button,Select,MenuItem, InputLabel} from '@mui/material';
import './ShrinkedFilterPanel.css'

export default function ShrinkedFilterPanel() {
  return (
    <div className='ShrinkedFilterPanel'>
      <div className='ShrinkedFilterPanel-leftPanel'>
    <Select className='ShrinkedFilterPanel-dropDown'>
      <MenuItem value={10}>Best Match</MenuItem>
      <MenuItem value={10}>Price Low-High</MenuItem>
      <MenuItem value={10}>Price High-Low</MenuItem>
      <MenuItem value={10}>Highest Rated</MenuItem>
    </Select> 
    
      </div>
      <div className='ShrinkedFilterPanel-rightPanel'>
    <Button className='ShrinkedFilterPanel-filter-button'>Filter</Button>
      </div>
  </div>
  )

}
