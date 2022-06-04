import './index.scss'
import React,{useState} from 'react'

const ProfileCard = () => {
  const [name,setName] = useState('Name: ');
  const [location, setLocation] = useState('Location: ');
  const [years, setYears] = useState('Years of Experience: ');
  const [rate, setRate] = useState('Rate: star');

  return (
      <div className='ProfileCard'>
          <div className = 'upper-container'>
              <div className='image-container'>
                  <img src={require("./you're tricked.png")} alt='profilePicture' height='100px' width='100px' />
              </div>
          </div>
          <div className="lower-container">
              <h2> { name } </h2>
              <h4> {location} </h4>
              <h4> {years} </h4>
              <h4> {rate} </h4>
              <button>See Profile</button>
              <button>Add as favourite</button>
          </div>
      </div>
  )
}

export default ProfileCard