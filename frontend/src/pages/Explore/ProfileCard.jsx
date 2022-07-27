import Card from '@mui/material/Card';
import * as React from 'react';
import Box from '@mui/material/Box';
import { Avatar, IconButton } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toggleFollowInstructorAsync } from '../../redux/authentication/thunks'

const ProfileCard = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {
        id,
        name,
        year,
        location,
        language,
        profileUrl,
        rating
    } = props;

    const user = useSelector((state) => (state.auth.user));

    // a component for toggling follow instructor
    const ToggleFollowButton = ({ instructorId }) => {
        const followedInstructors = useSelector((state) => (state.auth.user.data.followedInstructors));

        const [isFollowing, setIsFollowing] = React.useState(followedInstructors.includes(instructorId));

        const toggleFollow = () => {
            // update redux store, db, locals
            dispatch(toggleFollowInstructorAsync(instructorId));
        }

        // upon change of followedInstructors redux state, change ui
        React.useEffect(() => {
            setIsFollowing(followedInstructors.includes(instructorId));
        }, [followedInstructors, instructorId])

        return (
            <IconButton variant="text"
                onClick={toggleFollow}>
                {(isFollowing)
                    ? <BookmarkIcon />
                    : <BookmarkBorderIcon />}
            </IconButton>
        );
    }

    const getInitial = (name) => {
        return name.match(/(\b\S)?/g).join("").match(/(^\S|\S$)?/g).join("").toUpperCase()
    }

    const viewProfile = () => {
        navigate(`/showProfileRating/${id}`)
    }

    return (
        <Card variant="outlined">
            <CardContent sx={{ pb: 1 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                        {(profileUrl)
                            ? <Avatar alt={name} src={profileUrl} sx={{ width: 60, height: 60 }} />
                            : <Avatar sx={{ width: 60, height: 60 }}>{getInitial(name)}</Avatar>}
                        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 2 }}>
                            <Typography sx={{ fontSize: 20, fontWeight: 500 }}>{name}</Typography>
                            <Typography variant='caption'> {year} years of experience</Typography>
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'left', flexDirection: 'column', mt: 2 }}>
                        <Box sx={{ display: 'inline-flex' }}>
                            <LocationOnIcon sx={{ pr: 1 }} />
                            <Typography component="span"> {location} </Typography>
                        </Box>
                        <Box sx={{ display: 'inline-flex' }}>
                            <LanguageIcon sx={{ pr: 1 }} />
                            <Typography component="span"> {language} </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'left', flexDirection: 'row', mt: 2 }}>
                        <Box>
                            <Typography variant="h3">
                                {rating}
                                <Typography variant="body1" display="inline">/5</Typography>
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
                            <Button variant="text"
                                onClick={viewProfile}>profile</Button>
                            {(user && user.data.role === 'student') &&
                                <ToggleFollowButton instructorId={id} />
                            }

                        </Box>
                    </Box>
                </Box>
            </CardContent>
        </Card >
    );
}

export default ProfileCard;