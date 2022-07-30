import './index.scss'
import React from 'react'
import styled from 'styled-components'
import RateDisplay from '../ReviewRating/ReviewRating'
import CalendarSchedular from '../Calendar/CalendarSchedular'
import { toggleFollowInstructorAsync } from '../../redux/authentication/thunks'
import {
    AiFillMail,
    AiFillPhone,
    AiTwotoneBank,
    AiOutlineHighlight,
    AiFillIdcard,
    AiTwotoneSchedule,
} from 'react-icons/ai'

import Reviews from '../ReviewsList/Reviews'
import RatingStar from '../ReviewRating/RatingStar'

import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'


const MessageActionButton = styled.button`
    margin: 0 5px;
    padding: 8px 19px;
    background: #f4ca59;
    color: #242327;
    cursor: pointer;
    outline: 0;
    font-weight: 700;
    width: 100px;
    height: 40px;
    display: flex;
    border-radius: 5px;
    text-align: center;
    :hover {
        opacity: 0.8;
        font-weight: 800;
        color: #fff;
    }
`
const FollowActionButton = styled.button`
  margin: 0 5px;
  padding: 8px 14px;
  background: #f4ca59;
  color: #242327;
  cursor: pointer;
  outline: 0;
  font-weight: 700;
  width: 100px;
  height: 40px;
  padding-left: 10px
  display: flex;
  border-radius: 5px;
  :hover {
    opacity: 0.8;
    font-weight: 800;
    color: #fff;
}
`

export default function ReviewProfile({ instructor }) {
    const dispatch = useDispatch();

    const user = useSelector((state) => (state.auth.user));

    const renderFollowButton = () => {
        if (!user) return (
            <NavLink to="/sign-in">
                <FollowActionButton >
                    Follow
                </FollowActionButton>
            </NavLink>
        )
        if (user && user.data.role === 'student')
            return (<ToggleFollowButton instructorId={instructor._id} />)
    }

    // a component for toggling follow instructor
    const ToggleFollowButton = ({ instructorId }) => {
        const followedInstructors = useSelector((state) => (state.auth.user.data.followedInstructors));

        const [isFollowing, setIsFollowing] = React.useState(followedInstructors.includes(instructorId));

        const toggleFollow = () => {
            // update redux store and db
            dispatch(toggleFollowInstructorAsync(instructorId));
        }

        // upon change of followedInstructors redux state, change ui
        React.useEffect(() => {
            setIsFollowing(followedInstructors.includes(instructorId));
        }, [followedInstructors, instructorId])

        return (
            <FollowActionButton onClick={toggleFollow}>
                {isFollowing ? 'unfollow' : 'follow'}
            </FollowActionButton>
        );
    }

    return (
        <div>
            <div className="ReviewProfile">
                <div className="row">
                    <div className="d-flex col-12 p-0 px-3 py-3 pt-4">
                        <div className="d-flex flex-column align-items-center mt-4">
                            <img
                                className="photo"
                                src={instructor.photo}
                                alt=""
                                style={{
                                    width: '150px',
                                    height: '150px',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                }}
                            />
                        </div>
                        <div className="d-flex mx-5 pt-2 pb-2 w-75">
                            <div>
                                <div className="fw-bold h4 mt-5 mb-3">
                                    {instructor.first_name}{' '}
                                    {instructor.last_name}
                                </div>
                                <div className="text-muted mb-1">
                                    {instructor.license}
                                </div>
                                <div className="text-muted mb-1">
                                    {instructor.city}, {instructor.country}
                                </div>
                                <div className="d-flex text-muted d-flex mb-3">
                                    <RatingStar average={instructor.rating} />{' '}
                                    <div className="rating-number">
                                        {instructor.rating} / 5
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="FollowActionButton d-flex mt-5 ml-auto flex-column pt-3">
                            {renderFollowButton()}
                            <MessageActionButton className="">
                                Message
                            </MessageActionButton>
                        </div>
                    </div>

                    {/* line breaker */}
                    <div className="line-breaker-0"></div>

                    <div className="review-info-section-title d-flex mt-3 mb-4">
                        <div className="review-info-section-title-0 mr-5"></div>
                        <div className="review-info-section-title-1">A</div>
                        <div className="review-info-section-title-2">
                            bout Me
                        </div>
                    </div>

                    <div className="pl-0 w-75" style={{ color: '#7a7a7a' }}>
                        {instructor.description}
                    </div>

                    {/* line breaker */}
                    <div className="line-breaker-1"></div>

                    <div className="review-info-section-title d-flex mt-4 mb-4">
                        <div className="review-info-section-title-0 mr-5"></div>
                        <div className="review-info-section-title-1">B</div>
                        <div className="review-info-section-title-2">
                            asic Information
                        </div>
                    </div>

                    <div className="review-info-section">
                        <div className="col-12">
                            <div className="FollowActionButton d-flex justify-content-between border-bottom py-2 px-3">
                                <div className="review-profile-info">
                                    <AiFillMail className="review-profile-ai-icon" />
                                    Email
                                </div>
                                <a className="review-profile-info-res" href="/">
                                    {instructor.email}
                                </a>
                            </div>
                            <div className="FollowActionButton d-flex justify-content-between border-bottom py-2 px-3">
                                <div className="review-profile-info">
                                    <AiFillPhone className="review-profile-ai-icon" />
                                    Mobile
                                </div>
                                <div className="review-profile-info-res">
                                    {instructor.phone}
                                </div>
                            </div>
                            <div className="FollowActionButton d-flex justify-content-between border-bottom py-2 px-3">
                                <div className="review-profile-info">
                                    <AiTwotoneBank className="review-profile-ai-icon" />
                                    Company
                                </div>
                                <NavLink to="/">{instructor.company}</NavLink>
                            </div>
                            <div className="FollowActionButton d-flex justify-content-between border-bottom py-2 px-3">
                                <div className="review-profile-info">
                                    <AiOutlineHighlight className="review-profile-ai-icon" />
                                    Languages
                                </div>
                                <div className="review-profile-info-res">
                                    {instructor.language}
                                </div>
                            </div>
                            <div className="FollowActionButton d-flex justify-content-between border-bottom py-2 px-3">
                                <div className="review-profile-info">
                                    <AiTwotoneSchedule className="review-profile-ai-icon" />
                                    Year of Experience
                                </div>
                                <div className="review-profile-info-res">
                                    {instructor.experience}
                                </div>
                            </div>
                            <div className="FollowActionButton d-flex justify-content-between border-bottom py-2 px-3">
                                <div className="review-profile-info">
                                    <AiFillIdcard className="review-profile-ai-icon" />
                                    Liscense
                                </div>
                                <div className="review-profile-info-res">
                                    {instructor.license}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* line breaker */}
                    <div className="line-breaker-1"></div>

                    <div className="review-info-section-title d-flex mt-4 mb-4">
                        <div className="review-info-section-title-0 mr-5"></div>
                        <div className="review-info-section-title-1">S</div>
                        <div className="review-info-section-title-2 mb-2">
                            chedule Preview
                        </div>
                    </div>
                    <CalendarSchedular pageType="review" />
                    {/* <SandboxDemo /> */}

                    {/* line breaker */}
                    <div className="line-breaker-1"></div>

                    <div className="review-info-section-title d-flex mt-4 mb-4">
                        <div className="review-info-section-title-0 mr-5"></div>
                        <div className="review-info-section-title-1">R</div>
                        <div className="review-info-section-title-2">
                            atings & Reviews
                        </div>
                    </div>
                    <RateDisplay item={instructor.reviews} />

                    {/* line breaker */}
                    <div className="line-breaker-1"></div>

                    <div className="review-info-section-title d-flex mt-4 mb-4">
                        <div className="review-info-section-title-0 mr-5"></div>
                        <div className="review-info-section-title-1">R</div>
                        <div className="review-info-section-title-2">
                            eviews
                        </div>
                    </div>

                    <div className="d-flex mb-4">
                        <Reviews idType={'instructorId'} page={'reviewPage'} />
                    </div>
                </div>
            </div>
        </div>
    )
}
