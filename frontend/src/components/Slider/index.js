import './index.scss'
import Carousel from 'react-elastic-carousel'
import React from 'react'
import InstructorService from '../../redux/instructors/service'
import TopRatingSliderCards from '../TopRatingSliderCards'

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
    const [backgroundImg] = React.useState([
    'https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/167698/pexels-photo-167698.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/13038628/pexels-photo-13038628.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    'https://images.pexels.com/photos/12969306/pexels-photo-12969306.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
    ]);

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
            <div className="SliderMain">
                <Carousel breakPoints={breakPoints}>
                {instructors.map((x) => (
                        <TopRatingSliderCards
                        key={x._id}
                        instructor={x}
                        backgroundImg={backgroundImg[instructors.indexOf(x)]}
                        />

                    ))}
                </Carousel>
            </div>
        </>
    )
}

export default Slider
