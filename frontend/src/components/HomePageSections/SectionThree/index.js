import './index.scss'
import { useState } from 'react'
import Slider from 'react-slick'
import { v4 as uuidv4 } from 'uuid'
import astronaut from '../../../assets/images/jpg/IMG_1004.JPG'
import celebrating from '../../../assets/images/jpg/IMG_1001.JPG'
import education from '../../../assets/images/jpg/IMG_1003.JPG'
import taken from '../../../assets/images/jpg/IMG_1005.JPG'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

import { NavLink } from 'react-router-dom'

const images = [astronaut, celebrating, education, taken]

const TopRecommended = () => {
    const NextArrow = ({ onClick }) => {
        return (
            <div
                className="arrow_topRecommended next_topRecommended"
                onClick={onClick}
            >
                <FaArrowRight />
            </div>
        )
    }

    const PrevArrow = ({ onClick }) => {
        return (
            <div
                className="arrow_topRecommended prev_topRecommended"
                onClick={onClick}
            >
                <FaArrowLeft />
            </div>
        )
    }

    const [imageIndex, setImageIndex] = useState(0)

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 2000,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
    }

    return (
        <div className="TopRecommended">
            <div className="section_title pt-5">
                Top Recommended Instructors
                <div className="section_title_divider">
                    <div className="solid" />
                </div>
            </div>
            <Slider {...settings}>
                {images.map((img, idx) => (
                    <div
                        className={
                            idx === imageIndex
                                ? 'slide_topRecommended activeSlide'
                                : 'slide_topRecommended'
                        }
                        key={uuidv4()}
                    >
                        {/* <img src={img} alt={img} /> */}

                        {/* <ProfileCard
                            name={'Rick Astley'}
                            location={'UK'}
                            years={'10'}
                            rate={'5'}
                            imgSrc={
                                'https://img.apmcdn.org/768cb350c59023919f564341090e3eea4970388c/square/72dd92-20180309-rick-astley.jpg'
                            }
                        /> */}
                    </div>
                ))}
            </Slider>
            <div className="explore_more_div pb-5">
                <NavLink
                    to="/explore"
                    style={{ textDecoration: 'none' }}
                    className="button_explore"
                >
                    Explore
                </NavLink>
            </div>
        </div>
    )
}

export default TopRecommended
