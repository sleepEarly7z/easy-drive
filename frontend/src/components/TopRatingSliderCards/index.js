import './index.scss';
import React, { useState } from 'react';
import { Avatar, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Typography from '@mui/material/Typography';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useNavigate } from 'react-router-dom'

function TopRatingSliderCards({ instructor, backgroundImg }) {
    const navigate = useNavigate();
    const viewProfile = () => {
        navigate(`/showProfileRating/${instructor._id}`)
    }
    const getInitial = (name) => {
        return name.match(/(\b\S)?/g).join("").match(/(^\S|\S$)?/g).join("").toUpperCase()
    }

    return (
        <div className="ProfileCard-Yizhou">
            <div className="upper-container-Yizhou">
                <div className="upper-image-container-Yizhou">
                    <img className="upper-container-img" src={backgroundImg} alt="dsa"
                    />
                </div>
                <div className="image-container-Yizhou">
                    <div className="image-container-img-Yizhou">
                        {(instructor.photo)
                            ? <Avatar alt={instructor.name} src={instructor.photo} sx={{ width: 116, height: 116, cursor: 'pointer' }} onClick={viewProfile} />
                            : <Avatar sx={{ width: 116, height: 116, cursor: 'pointer' }} onClick={viewProfile}>{getInitial(instructor.name)}
                            </Avatar>}
                    </div>

                    {/* <img
                        className="image-container-img-Yizhou"
                        src={instructor.photo}
                        alt="profilePicture"
                        height="100px"
                        width="100px"
                    /> */}
                </div>
            </div>
            <div className="lower-container-Yizhou">
                <h2>
                    {instructor.first_name + " " + instructor.last_name}
                </h2>
                {/* <h4> {'Location: ' + location} </h4>
                <h4> {'Years of Experience: ' + years} </h4> */}
                <div className="star-rating-Yizhou">
                    {/* {'Rate: '} */}
                    {[...Array(5)].map((star, index) => {
                        index += 1
                        return (
                            <button
                                type="button"
                                key={index}
                                className={
                                    index <= (instructor.rating || instructor.rating)
                                        ? 'starOn-Yizhou'
                                        : 'starOff-Yizhou'
                                }
                            // onClick={() => setRating(index)}
                            // onMouseEnter={() => setHover(index)}
                            // onMouseLeave={() => setHover(rating)}
                            >
                                <span className="star-Yizhou">&#9733;</span>
                            </button>
                        )
                    })}
                </div>
                <p>
                    {instructor.description}
                    {/* {"Driving Instructor, 2006 to Present Autobahn Driving School, Apple Valley, CA Taught mechanical operation and driving techniques of a vehicle."} */}
                </p>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column', mt: 2 }}>
                    <Box sx={{ display: 'inline-flex' }}>
                        <LocationOnIcon sx={{ pr: 1 }} />
                        <Typography component="span"> {instructor.city} </Typography>
                    </Box>
                    <Box sx={{ display: 'inline-flex' }}>
                        <LanguageIcon sx={{ pr: 1 }} />
                        <Typography component="span"> {instructor.language} </Typography>
                    </Box>
                </Box>
            </div>
            <div className="profilecard-buttons-Yizhou">
                <button className="profileButton-Yizhou"
                    onClick={viewProfile}>See Profile</button>
                <br />
                {/* <button className="favouriteButton-Yizhou">Favourite</button> */}
            </div>
        </div>
    )
}

export default TopRatingSliderCards
