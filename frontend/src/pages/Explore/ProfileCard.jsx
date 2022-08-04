import Card from '@mui/material/Card';
import * as React from 'react';
import Box from '@mui/material/Box';
import { Avatar, IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toggleFollowInstructorAsync } from '../../redux/authentication/thunks'
import Grid from '@mui/material/Grid';

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
        <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item sm={4} >
                {(profileUrl)
                    ? <Avatar alt={name} src={profileUrl} sx={{ width: 120, height: 120, cursor: 'pointer' }} onClick={viewProfile} />
                    : <Avatar sx={{ width: 120, height: 120, cursor: 'pointer' }} onClick={viewProfile}>{getInitial(name)}</Avatar>}
            </Grid>

            <Grid item container sm={4}>
                <Grid item container direction="column" spacing={2}>
                    <Grid item xs>
                        <Typography gutterBottom variant='h5' component="div" color='text.primary'
                            sx={{ cursor: 'pointer' }}
                            onClick={viewProfile}>
                            {name}
                            {(user && user.data.role === 'student') &&
                                <ToggleFollowButton instructorId={id} />
                            }
                        </Typography>

                        <Typography gutterBottom color='text.primary' variant='body1' > {year} years of experience</Typography>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'left', flexDirection: 'column' }}>
                            <Box sx={{ display: 'inline-flex' }} color="text.secondary">
                                <LocationOnIcon sx={{ pr: 1 }} />
                                <Typography component="span" > {location} </Typography>
                            </Box>
                            <Box sx={{ display: 'inline-flex' }} color="text.secondary">
                                <LanguageIcon sx={{ pr: 1 }} />
                                <Typography component="span"> {language} </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item sm={4}>
                <Typography variant="h3"  >
                    {rating}
                    <Typography variant="body1" display="inline" >/5</Typography>
                </Typography>
            </Grid>
        </Grid >

    );
}

export default ProfileCard;