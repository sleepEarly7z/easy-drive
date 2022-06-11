import './index.scss'
import React, { useState } from 'react'

function TopRatingSliderCards ({name,location,years,rate,imgSrc}) {
    const [rating, setRating] = useState(rate);
    const [hover, setHover] = useState(rate);

    return (
        <div className='ProfileCard-Yizhou'>
            <div className='upper-container-Yizhou'>
                <div className='image-container-Yizhou'>
                    <img className='image-container-img-Yizhou'src={imgSrc} alt='profilePicture' height='100px' width='100px' />
                </div>
            </div>
            <div className="lower-container-Yizhou">
                <h2> {"Name: " + name} </h2><br/>
                <h4> {"Location: " + location} </h4>
                <h4> {"Years of Experience: " + years} </h4>
                <div className="star-rating-Yizhou">
                    {"Rate: "}
                    {[...Array(5)].map((star, index) => {
                        index += 1;
                        return (
                            <button
                                type="button"
                                key={index}
                                className={index <= (hover || rating) ? "starOn-Yizhou" : "starOff-Yizhou"}
                                onClick={() => setRating(index)}
                                onMouseEnter={() => setHover(index)}
                                onMouseLeave={() => setHover(rating)}
                            >
                                <span className="star-Yizhou">&#9733;</span>
                            </button>
                        );
                    })}
                </div>

            </div>
            <div className='profilecard-buttons-Yizhou'>
                <button className='profileButton-Yizhou'>See Profile</button><br />
                <button className='favouriteButton-Yizhou'>Favourite</button>
            </div>
        </div>
    )
}

export default TopRatingSliderCards