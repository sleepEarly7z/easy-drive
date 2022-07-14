import './index.scss'
import React from 'react'
import { NavLink } from 'react-bootstrap'
import styled from 'styled-components'
import RateDisplay from '../ReviewRating/ReviewRating'
import CalendarSchedular from '../Calendar/CalendarSchedular'
import {
    AiFillMail,
    AiFillPhone,
    AiTwotoneBank,
    AiOutlineHighlight,
    AiFillIdcard,
    AiTwotoneSchedule,
} from 'react-icons/ai'

import Reviews from '../ReviewsList/Reviews'
import { useDispatch } from 'react-redux'
import { followInstructorAsync } from '../../redux/students/thunks';

const MessageActionButton = styled.button`
    margin: 0 5px;
    padding: 10px 17px;
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
  // border: 2px solid #242327;
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
    const dispatch = useDispatch()
    function followInstructor(instructorID) {
        let id = {
            _id: instructorID
        }
        dispatch(followInstructorAsync(id));
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
                                <p className="fw-bold h4 mt-5 mb-3">
                                    {instructor.first_name}{' '}
                                    {instructor.last_name}
                                </p>
                                <p className="text-muted mb-1">
                                    {instructor.license}
                                </p>
                                <p className="text-muted mb-1">
                                    {instructor.city}, {instructor.country}
                                </p>
                                <p className="text-muted mb-3">
                                    Rating: {instructor.Rating} / 5
                                </p>
                            </div>
                        </div>
                        <div className="FollowActionButton d-flex mt-5 ml-auto flex-column pt-3">
                            <FollowActionButton className="" onClick={() => followInstructor(instructor._id)}>
                                Follow
                            </FollowActionButton>
                            <MessageActionButton className="">
                                Message
                            </MessageActionButton>
                        </div>
                    </div>

                    {/* line breaker */}
                    <div
                        style={{
                            paddingTop: 20,
                        }}
                    ></div>

                    <div className="review-info-section-title d-flex mt-3 mb-4">
                        <div
                            className="review-info-section-title-0 mr-5"
                            style={{
                                backgroundColor: '#ffe599',
                                height: '80%',
                                width: '10px',
                                marginTop: '3px',
                                marginRight: '6px',
                            }}
                        ></div>
                        <div className="review-info-section-title-1">A</div>
                        <div className="review-info-section-title-2">
                            bout Me
                        </div>
                    </div>

                    <div className="pl-0 w-75" style={{ color: '#7a7a7a' }}>
                        {instructor.description}
                    </div>

                    {/* line breaker */}
                    <div
                        style={{
                            borderTop: '2px solid #EEEEEE ',
                            marginTop: 50,
                            paddingTop: 20,
                        }}
                    ></div>

                    <div className="review-info-section-title d-flex mt-4 mb-4">
                        <div
                            className="review-info-section-title-0 mr-5"
                            style={{
                                backgroundColor: '#ffe599',
                                height: '80%',
                                width: '10px',
                                marginTop: '3px',
                                marginRight: '6px',
                            }}
                        ></div>
                        <div className="review-info-section-title-1">B</div>
                        <div className="review-info-section-title-2">
                            asic Information
                        </div>
                    </div>

                    <div className="review-info-section">
                        <div className="col-12">
                            <div className="FollowActionButton d-flex justify-content-between border-bottom py-2 px-3">
                                <p className="review-profile-info">
                                    <AiFillMail style={{ marginRight: '10' }} />
                                    Email
                                </p>
                                <a className="review-profile-info-res" href="/">
                                    {instructor.email}
                                </a>
                            </div>
                            <div className="FollowActionButton d-flex justify-content-between border-bottom py-2 px-3">
                                <p className="review-profile-info">
                                    <AiFillPhone
                                        style={{ marginRight: '10' }}
                                    />
                                    Mobile
                                </p>
                                <p className="review-profile-info-res">
                                    {instructor.phone}
                                </p>
                            </div>
                            <div className="FollowActionButton d-flex justify-content-between border-bottom py-2 px-3">
                                <p className="review-profile-info">
                                    <AiTwotoneBank
                                        style={{ marginRight: '10' }}
                                    />
                                    Company
                                </p>
                                <NavLink to="/">{instructor.company}</NavLink>
                            </div>
                            <div className="FollowActionButton d-flex justify-content-between border-bottom py-2 px-3">
                                <p className="review-profile-info">
                                    <AiOutlineHighlight
                                        style={{ marginRight: '10' }}
                                    />
                                    Languages
                                </p>
                                <p className="review-profile-info-res">
                                    {instructor.language}
                                </p>
                            </div>
                            <div className="FollowActionButton d-flex justify-content-between border-bottom py-2 px-3">
                                <p className="review-profile-info">
                                    <AiTwotoneSchedule
                                        style={{ marginRight: '10' }}
                                    />
                                    Year of Experience
                                </p>
                                <p className="review-profile-info-res">
                                    {instructor.experience}
                                </p>
                            </div>
                            <div className="FollowActionButton d-flex justify-content-between border-bottom py-2 px-3">
                                <p className="review-profile-info">
                                    <AiFillIdcard
                                        style={{ marginRight: '10' }}
                                    />
                                    Liscense
                                </p>
                                <p className="review-profile-info-res">
                                    {instructor.license}
                                </p>
                            </div>
                            {/* <div className="FollowActionButton d-flex justify-content-between py-2 px-3">
                                <p className="review-profile-info">
                                    <AiFillProject style={{ marginRight: "10" }} />
                                    Description
                                </p>
                                <p className="review-profile-info-res">
                                    {instructor.description}
                                </p>
                            </div> */}
                        </div>
                    </div>

                    {/* line breaker */}
                    <div
                        style={{
                            borderTop: '2px solid #EEEEEE ',
                            marginTop: 50,
                            paddingTop: 20,
                        }}
                    ></div>

                    <div className="review-info-section-title d-flex mt-4 mb-4">
                        <div
                            className="review-info-section-title-0 mr-5"
                            style={{
                                backgroundColor: '#ffe599',
                                height: '80%',
                                width: '10px',
                                marginTop: '3px',
                                marginRight: '6px',
                            }}
                        ></div>
                        <div className="review-info-section-title-1">S</div>
                        <div className="review-info-section-title-2 mb-2">
                            chedule Preview
                        </div>
                    </div>
                    <CalendarSchedular
                        page="reviewpage"
                        instructorId={instructor._id}
                    />

                    {/* line breaker */}
                    <div
                        style={{
                            borderTop: '2px solid #EEEEEE ',
                            marginTop: 50,
                            paddingTop: 20,
                        }}
                    ></div>

                    <div className="review-info-section-title d-flex mt-4 mb-4">
                        <div
                            className="review-info-section-title-0 mr-5"
                            style={{
                                backgroundColor: '#ffe599',
                                height: '80%',
                                width: '10px',
                                marginTop: '3px',
                                marginRight: '6px',
                            }}
                        ></div>
                        <div className="review-info-section-title-1">R</div>
                        <div className="review-info-section-title-2">
                            atings & Reviews
                        </div>
                    </div>
                    <RateDisplay item={instructor.reviews} />

                    {/* line breaker */}
                    <div
                        style={{
                            borderTop: '2px solid #EEEEEE ',
                            marginTop: 50,
                            paddingTop: 20,
                        }}
                    ></div>

                    <div className="review-info-section-title d-flex mt-4 mb-4">
                        <div
                            className="review-info-section-title-0 mr-5"
                            style={{
                                backgroundColor: '#ffe599',
                                height: '80%',
                                width: '10px',
                                marginTop: '3px',
                                marginRight: '6px',
                            }}
                        ></div>
                        <div className="review-info-section-title-1">R</div>
                        <div className="review-info-section-title-2">
                            eviews
                        </div>
                    </div>

                    <div className="d-flex mb-4">
                        <Reviews instructorId={instructor._id} />
                    </div>
                </div>
            </div>
        </div>
    )
}
