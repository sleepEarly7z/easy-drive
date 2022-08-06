import './index.scss'
import Carousel from 'react-elastic-carousel'
import ProfileCard from '../ProfileCard'
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
    return (
        <>
            {/* <h1 style={{ textAlign: 'center' }}>Top Rated Instructors</h1> */}
            <div className="SliderMain">
                <Carousel breakPoints={breakPoints}>
                    <TopRatingSliderCards
                        name={'Rick Astley'}
                        location={'UK'}
                        years={'10+'}
                        rate={'5'}
                        backgroundImg={
                            'https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        }
                        iconImg={
                            'https://img.apmcdn.org/768cb350c59023919f564341090e3eea4970388c/square/72dd92-20180309-rick-astley.jpg'
                        }
                    />
                    <TopRatingSliderCards
                        name={'John Depp'}
                        location={'USA'}
                        years={'3'}
                        rate={'5'}
                        backgroundImg={
                            'https://images.pexels.com/photos/167698/pexels-photo-167698.jpeg?auto=compress&cs=tinysrgb&w=1600'
                        }
                        iconImg={
                            'https://media.npr.org/assets/img/2022/04/20/depp-heard_sq-f026b0bd73a37ba94e5f2f66275b1f20ab10e7cc-s800-c85.jpg'
                        }
                    />
                    <TopRatingSliderCards
                        name={'Donald Trump'}
                        location={'USA'}
                        years={'3'}
                        rate={'2'}
                        backgroundImg={
                            'https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg?auto=compress&cs=tinysrgb&w=600'
                        }
                        iconImg={
                            'https://pinchaninch.co.uk/wp-content/uploads/2016/11/donald-trump-incapable-of-embarrassment-r_0.jpg'
                        }
                    />
                    <TopRatingSliderCards
                        name={'Donald Trump'}
                        location={'USA'}
                        years={'3'}
                        rate={'2'}
                        backgroundImg={
                            'https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        }
                        iconImg={
                            'https://pinchaninch.co.uk/wp-content/uploads/2016/11/donald-trump-incapable-of-embarrassment-r_0.jpg'
                        }
                    />
                    <TopRatingSliderCards
                        name={'Donald Trump'}
                        location={'USA'}
                        years={'3'}
                        rate={'2'}
                        backgroundImg={
                            'https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        }
                        iconImg={
                            'https://pinchaninch.co.uk/wp-content/uploads/2016/11/donald-trump-incapable-of-embarrassment-r_0.jpg'
                        }
                    />
                    <TopRatingSliderCards
                        name={'Donald Trump'}
                        location={'USA'}
                        years={'3'}
                        rate={'2'}
                        backgroundImg={
                            'https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        }
                        iconImg={
                            'https://pinchaninch.co.uk/wp-content/uploads/2016/11/donald-trump-incapable-of-embarrassment-r_0.jpg'
                        }
                    />
                </Carousel>
            </div>
        </>
    )
}

export default Slider
