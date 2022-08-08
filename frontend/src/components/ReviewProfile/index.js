import './index.scss'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, NavLink } from 'react-router-dom'

import { WEEK_DAYS, MONTHS, TIME_SLOTS } from '../../utils/constants'
import { getAppointmentsByInstructorIDAsync } from '../../redux/appointments/thunks'

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
// const appointmentsSample = [
//     {
//         title: 'AAAA',
//         startDate: new Date(2022, 8 - 1, 25, 9, 35),
//         endDate: new Date(2022, 8 - 1, 25, 11, 30),
//         id: 0,
//         location: 'Room 1',
//     },
//     {
//         title: 'BBBB',
//         startDate: new Date(2022, 8 - 1, 25, 9, 35),
//         endDate: new Date(2022, 8 - 1, 25, 11, 30),
//         id: 0,
//         location: 'Room 1',
//     },
//     {
//         title: 'CCC Re-Design Plan',
//         startDate: new Date(2022, 8 - 1, 23, 9, 35),
//         endDate: new Date(2022, 8 - 1, 23, 11, 30),
//         id: 0,
//         location: 'Room 1',
//     },
//     {
//         title: 'Book Flights to San Fran for Sales Trip',
//         startDate: new Date(2022, 8 - 1, 25, 12, 11),
//         endDate: new Date(2022, 8 - 1, 25, 13, 0),
//         id: 0,
//         location: 'Room 1',
//     },
//     {
//         title: 'Install New Router in Dev Room',
//         startDate: new Date(2022, 8 - 1, 25, 14, 30),
//         endDate: new Date(2022, 8 - 1, 25, 15, 35),
//         id: 0,
//         location: 'Room 2',
//     },
//     {
//         title: 'Website Re-Design Plan',
//         startDate: new Date(2022, 8 - 1, 2, 9, 30),
//         endDate: new Date(2022, 8 - 1, 2, 15, 30),
//         id: 0,
//         location: 'Room 1',
//     },
//     {
//         title: 'Upgrade Server Hardware',
//         startDate: new Date(2022, 8 - 1, 9, 14, 30),
//         endDate: new Date(2022, 8 - 1, 9, 16, 0),
//         id: 0,
//         location: 'Room 3',
//     },
//     {
//         title: 'Submit New Website Design',
//         startDate: new Date(2022, 8 - 1, 9, 16, 30),
//         endDate: new Date(2022, 8 - 1, 9, 18, 0),
//         id: 14,
//         location: 'Room 3',
//     },
//     {
//         title: 'Launch New Website',
//         startDate: new Date(2022, 8 - 1, 29, 12, 20),
//         endDate: new Date(2022, 8 - 1, 29, 14, 0),
//         id: 10,
//         location: 'Room 2',
//     },
// ]

function formatDate(list) {
    var appointments = []
    var index = 0
    for (const item of list) {
        const { _id, date, weekday, isBooked, range, student_lastname } = item

        // 2022-08-13T06:59:51.466Z
        var options = { year: 'numeric', month: 'long', day: 'numeric' }
        const date_array = new Date(date).toLocaleDateString([], options)
        const isCorrectWeekday = (element) => element === weekday
        const weekday_index = WEEK_DAYS.findIndex(isCorrectWeekday)

        const isCorrectMonth = (element) => element === date_array.split(' ')[0]
        const month_index = MONTHS.findIndex(isCorrectMonth)

        const isCorrectRange = (element) => element === range
        const range_index = TIME_SLOTS.findIndex(isCorrectRange) + 8

        const month = month_index + 1
        const day = Number(date_array.split(' ')[1].split(',')[0]) + 1
        const year = Number(date_array.split(' ')[2])

        // console.log('_id:' + _id)
        // console.log('weekday:' + weekday)
        // console.log('day:' + day)
        // console.log('month:' + month)
        // console.log('year:' + year)
        // console.log('isBooked:' + isBooked)
        // console.log('student_lastname:' + student_lastname)
        // console.log('item: ' + item)

        const appointment = {
            title:
                isBooked === true
                    ? `Booked by ${student_lastname}`
                    : `Available`,
            startDate: new Date(year, month - 1, day, range_index, 0),
            endDate: new Date(year, month - 1, day, range_index + 1, 0),
            id: 0,
            location: 'Room 1',
        }
        index = index + 1

        appointments.push(appointment)
    }

    // appointments.push({
    //     title: 'AAAA',
    //     startDate: new Date(2022, 8 - 1, 25, 9, 35),
    //     endDate: new Date(2022, 8 - 1, 25, 11, 30),
    //     id: 0,
    //     location: 'Room 1',
    // })

    // appointments.push({
    //     title: 'BBBB',
    //     startDate: new Date(2022, 8 - 1, 25, 9, 35),
    //     endDate: new Date(2022, 8 - 1, 25, 11, 30),
    //     id: 0,
    //     location: 'Room 1',
    // })

    return appointments
}

export default function ReviewProfile({ instructor }) {
    const dispatch = useDispatch()
    const params = useParams()

    const user = useSelector((state) => state.auth.user)
    // const list = useSelector((state) => state.appointments.list)
    const list = JSON.parse(localStorage.getItem('appointments'))
    // console.log('list.data: ' + list.data)
    // console.log('list.data.length: ' + list.data.length)
    // console.log('list.data[0]: ' + list.data[0].date)
    // console.log('list.data[0]: ' + list.data[0].isBooked)
    // console.log('list.data[0]: ' + list.data[0].student_lastname)
    // console.log('list.data[0]: ' + list.data[0]._id)

    const appointments = formatDate(list.data)
    // console.log('appointments: ' + appointments)

    const renderFollowButton = () => {
        if (!user)
            return (
                <NavLink to="/sign-in">
                    <FollowActionButton>Follow</FollowActionButton>
                </NavLink>
            )
        if (user && user.data.role === 'student')
            return <ToggleFollowButton instructorId={instructor._id} />
    }

    // a component for toggling follow instructor
    const ToggleFollowButton = ({ instructorId }) => {
        const followedInstructors = useSelector(
            (state) => state.auth.user.data.followedInstructors,
        )

        const [isFollowing, setIsFollowing] = React.useState(
            followedInstructors.includes(instructorId),
        )

        const toggleFollow = () => {
            // update redux store and db
            dispatch(toggleFollowInstructorAsync(instructorId))
        }

        // upon change of followedInstructors redux state, change ui
        React.useEffect(() => {
            setIsFollowing(followedInstructors.includes(instructorId))
        }, [followedInstructors, instructorId])

        return (
            <FollowActionButton onClick={toggleFollow}>
                {isFollowing ? 'Unfollow' : 'Follow'}
            </FollowActionButton>
        )
    }

    useEffect(() => {
        dispatch(getAppointmentsByInstructorIDAsync(params.instructorId))
    }, [])

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
                                    License
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

                    <CalendarSchedular appointments={appointments} />

                    {/* line breaker */}
                    <div className="line-breaker-1"></div>

                    <div className="review-info-section-title d-flex mt-4 mb-4">
                        <div className="review-info-section-title-0 mr-5"></div>
                        <div className="review-info-section-title-1">R</div>
                        <div className="review-info-section-title-2">
                            atings & Reviews
                        </div>
                    </div>
                    <RateDisplay
                        rating={instructor.rating}
                        distribution={instructor.ratingDistribution}
                    />

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
