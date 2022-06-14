import React from 'react'
import './index.scss'
import STCard from './STCard';
import cathy from "../../../assets/images/jpg/IMG_1004.JPG";
import jack  from "../../../assets/images/jpg/IMG_1001.JPG";
import davis from "../../../assets/images/jpg/IMG_1003.JPG";
import chloe from "../../../assets/images/jpg/IMG_1005.JPG";

const team = [
  {
    name: "Kaiqian(Cathy) Yang",
    subtitle: "4th-year in CS",
    description: "I'm passionate about Web Development",
    image: cathy,
  },
  {
    name: "Yizhou(Jack) Li",
    subtitle: "4th-year in CS",
    description: "I'm passionate about Web Development",
    image: jack,
  },
  {
    name: "Haoliang(Davis)) Qi",
    subtitle: "4th-year in CS",
    description: "I'm passionate about Web Development",
    image: davis,
  },
  {
    name: "Chloe Zhang",
    subtitle: "4th-year in CS",
    description: "I'm passionate about Web Development",
    image: chloe,
  },
]

const OurTeam = () => {
  return (
    <div>
        <h1>Meet Our Team</h1>
        <h4>We are Team 405 FOUND</h4>
        <div className='ourteam_content'>
          {team.map((img, idx) => (
            <STCard props={team[idx]}/>
          ))}
        </div>
    </div>
  )
}

export default OurTeam;