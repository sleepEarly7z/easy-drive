import './index.scss'
import Carousel from 'react-elastic-carousel'
import ProfileCard from '../../pages/Explore/ProfileCard'
import React from 'react'
import InstructorService from '../../redux/instructors/service'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// https://www.youtube.com/watch?v=eBKcGAhkZUI&t=526s
// https://www.npmjs.com/package/react-elastic-carousel
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 860, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
]

const Slider = () => {
    const [instructors, setInstructors] = React.useState([]);

    React.useEffect(() => {

        const fetchTopInstructors = async () => {
            const results = await InstructorService.getInstructors({ sortBy: { sortBy: 'rating', sortDir: 'desc' } });
            console.log(results);
            const tops = results.data.slice(0, 5);
            setInstructors(tops);
        }

        fetchTopInstructors().catch(console.error);
    }, [])

    return (
        <>
            <Typography gutterBottom variant='h4' component="div" color='text.primary' sx={{ textAlign: 'center' }}>
                Top Rated Instructors
            </Typography>
            <div className="SliderMain">
                <Carousel breakPoints={breakPoints}>
                    {instructors.map((x) => (
                        <Box key={x._id} >
                            <ProfileCard
                                id={x._id}
                                name={`${x.first_name} ${x.last_name}`}
                                location={x.city}
                                year={x.experience}
                                rating={x.rating}
                                language={x.language}
                                profileUrl={x.photo}
                                instructorId={x._id}
                            />
                        </Box>
                    ))}
                </Carousel>
            </div>
        </>
    )
}

export default Slider
