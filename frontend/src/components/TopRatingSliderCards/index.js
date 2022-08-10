import './index.scss';
import React from 'react';
import { Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom'

function TopRatingSliderCards({ instructor, backgroundImg }) {
    const navigate = useNavigate();
    const viewProfile = () => {
        navigate(`/showProfileRating/${instructor._id}`)
        window.location.reload(false)
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
                </div>
            </div>
            <div className="lower-container-Yizhou">
                <h2>
                <Typography gutterBottom variant='h5' component="div" color='text.primary'
                                sx={{ cursor: 'pointer' }}
                                onClick={viewProfile}>
                                {instructor.first_name + " " + instructor.last_name}
                            </Typography>
                </h2>
                <div className="star-rating-Yizhou">
                    {[...Array(5)].map((star, index) => {
                        index += 1
                        return (
                            <div
                                type="text"
                                key={index}
                                className={
                                    index <= (instructor.rating)
                                        ? 'starOn-Yizhou'
                                        : 'starOff-Yizhou'
                                }
                            >
                                <span className="star-Yizhou">&#9733;</span>
                            </div>
                        )
                    })}
                </div>
                <p>
                    {instructor.description}
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
            </div>
        </div>
    )
}

export default TopRatingSliderCards
