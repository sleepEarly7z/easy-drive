import './index.scss'
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getInstructorByIdAsync } from '../../redux/instructors/thunks'

function ProfileCard({ name, location, years, rate, imgSrc, instructorId }) {
    const dispatch = useDispatch()

    const [rating, setRating] = useState(rate)
    const [hover, setHover] = useState(rate)

    // Version 1
    const navigate = useNavigate()

    const handleClickSeeProfile = () => {
        navigate(`/showProfileRating/${instructorId}`)
    }

    return (
        <div className="ProfileCard">
            <div className="upper-container">
                <div className="image-container">
                    <img
                        className="image-container-img"
                        src={imgSrc}
                        alt="profilePicture"
                        height="100px"
                        width="100px"
                    />
                </div>
            </div>
            <div className="lower-container">
                <h2> {'Name: ' + name} </h2>
                <br />
                <h4> {'Location: ' + location} </h4>
                <h4> {'Years of Experience: ' + years} </h4>
                <div className="star-rating">
                    {'Rate: '}
                    {[...Array(5)].map((star, index) => {
                        index += 1
                        return (
                            <button
                                type="button"
                                key={index}
                                className={
                                    index <= (hover || rating)
                                        ? 'starOn'
                                        : 'starOff'
                                }
                            // onClick={() => setRating(index)}
                            // onMouseEnter={() => setHover(index)}
                            // onMouseLeave={() => setHover(rating)}
                            >
                                <span className="star">&#9733;</span>
                            </button>
                        )
                    })}
                </div>
            </div>
            <div className="profilecard-buttons">
                {/* <Link to={`/showProfileRating/${instructorId}`}> */}
                <button
                    className="profileButton"
                    onClick={handleClickSeeProfile}
                >
                    See Profile
                </button>
                {/* </Link> */}
                <br />
                <button className="favouriteButton">Favourite</button>
            </div>
        </div>
    )
}

export default ProfileCard
