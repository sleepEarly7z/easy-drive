import './index.scss'
import React, { useState } from 'react'

function ProfileCard ({name,location,years,rate}) {
    const [rating, setRating] = useState(rate);
    const [hover, setHover] = useState(rate);

    return (
        <div className='ProfileCard'>
            <div className='upper-container'>
                <div className='image-container'>
                    <img src={require("./you're tricked.png")} alt='profilePicture' height='100px' width='100px' />
                </div>
            </div>
            <div className="lower-container">
                <h2> {"Name: " + name} </h2>
                <h4> {"Location: " + location} </h4>
                <h4> {"Years of Experience: " + years} </h4>
                <div className="star-rating">
                    {"Rate: "}
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
                <button className='profileButton'>See Profile</button><br />
                <button className='favouriteButton'>Add as favourite</button>
            </div>
        </div>
    )
}

export default ProfileCard