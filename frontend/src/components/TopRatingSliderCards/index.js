import './index.scss';
import React, { useState } from 'react';
import { Avatar, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Typography from '@mui/material/Typography';
import BookmarkIcon from '@mui/icons-material/Bookmark';

function TopRatingSliderCards({ name, location, years, rate,backgroundImg, iconImg }) {
    const [rating, setRating] = useState(rate)
    const [hover, setHover] = useState(rate)

    return (
        <div className="ProfileCard-Yizhou">
            <div className="upper-container-Yizhou">
                <div className="upper-image-container-Yizhou">
                    <img className="upper-container-img" src={backgroundImg} alt="dsa"
                    />
                </div>
                <div className="image-container-Yizhou">
                    <img
                        className="image-container-img-Yizhou"
                        src={iconImg}
                        alt="profilePicture"
                        height="100px"
                        width="100px"
                    />
                </div>
            </div>
            <div className="lower-container-Yizhou">
                <h2>
                    {name}
                    <IconButton variant="text">
                        <BookmarkIcon />
                    </IconButton>
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
                                    index <= (hover || rating)
                                        ? 'starOn-Yizhou'
                                        : 'starOff-Yizhou'
                                }
                                onClick={() => setRating(index)}
                                onMouseEnter={() => setHover(index)}
                                onMouseLeave={() => setHover(rating)}
                            >
                                <span className="star-Yizhou">&#9733;</span>
                            </button>
                        )
                    })}
                </div>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column', mt: 2 }}>
                    <Box sx={{ display: 'inline-flex' }}>
                        <LocationOnIcon sx={{ pr: 1 }} />
                        <Typography component="span"> {location} </Typography>
                    </Box>
                    <Box sx={{ display: 'inline-flex' }}>
                        <LanguageIcon sx={{ pr: 1 }} />
                        <Typography component="span"> {"language"} </Typography>
                    </Box>
                </Box>
            </div>
            <div className="profilecard-buttons-Yizhou">
                <button className="profileButton-Yizhou">See Profile</button>
                <br />
                {/* <button className="favouriteButton-Yizhou">Favourite</button> */}
            </div>
        </div>
    )
}

export default TopRatingSliderCards
