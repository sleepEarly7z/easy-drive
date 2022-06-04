import './index.scss'
import React, { useState } from 'react'

const ProfileCard = () => {
    const [name, setName] = useState('Name: Rick Astley');
    const [location, setLocation] = useState('Location: Earth');
    const [years, setYears] = useState('Years of Experience: 10+years');
    const [rate, setRate] = useState('Rate: ');
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <div className='ProfileCard'>
            <div className='upper-container'>
                <div className='image-container'>
                    <img src={require("./you're tricked.png")} alt='profilePicture' height='100px' width='100px' />
                </div>
            </div>
            <div className="lower-container">
                <h2> {name} </h2>
                <h4> {location} </h4>
                <h4> {years} </h4>
                <div className="star-rating">
                    {rate}
                    {[...Array(5)].map((star, index) => {
                        index += 1;
                        return (
                            <button
                                type="button"
                                key={index}
                                className={index <= (hover || rating) ? "starOn" : "starOff"}
                                onClick={() => setRating(index)}
                                onMouseEnter={() => setHover(index)}
                                onMouseLeave={() => setHover(rating)}
                            >
                                <span className="star">&#9733;</span>
                            </button>
                        );
                    })}
                </div>

            </div>
            <div className='buttons'>
                <button>See Profile</button><br />
                <button>Add as favourite</button>
            </div>
        </div>
    )
}

export default ProfileCard