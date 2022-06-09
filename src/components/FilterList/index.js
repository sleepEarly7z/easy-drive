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
      <ProfileCard name={'Rick Astley'} location={'UK'} years={'10'} rate={'5'} imgSrc={"https://img.apmcdn.org/768cb350c59023919f564341090e3eea4970388c/square/72dd92-20180309-rick-astley.jpg"}/><br />
      <ProfileCard name={'John Depp'} location={'USA'} years={'2'} rate={'4'} imgSrc={"https://media.npr.org/assets/img/2022/04/20/depp-heard_sq-f026b0bd73a37ba94e5f2f66275b1f20ab10e7cc-s800-c85.jpg"}/><br />
      <ProfileCard name={'Donald Trump'} location={'USA'} years={'3'} rate={'2'} imgSrc={"https://pinchaninch.co.uk/wp-content/uploads/2016/11/donald-trump-incapable-of-embarrassment-r_0.jpg"}/><br />
    </div>
  )
}

export default FilterList