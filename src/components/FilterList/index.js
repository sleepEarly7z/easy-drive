import './index.scss'
import React, { useState } from 'react'
import ProfileCard from '../ProfileCard'

function FilterList() {
  const [name, setName] = useState('Name: Your name');
  const [location, setLocation] = useState('Location: Your location');
  const [years, setYears] = useState('Years of Experience: x years');
  return (
    <div className='FilterList'>
      <h1>FilterList</h1>
      <ProfileCard name={'Rick Astley'} location={'Earth'} years={'10+'} rate={'5'}/><br />
      <ProfileCard name={'Edward'} location={'Vancouver'} years={'2'} rate={'3'}/><br />
      <ProfileCard name={'Trump'} location={'Richmond'} years={'3'} rate={'2'}/><br />
    </div>
  )
}

export default FilterList