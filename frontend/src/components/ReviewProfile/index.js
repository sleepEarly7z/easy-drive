import './index.scss'
import React from 'react'
import { NavLink } from 'react-bootstrap'
import styled from 'styled-components'
import RateDisplay from '../RateDisplay'
import CalendarSchedular from '../Calendar/CalendarSchedular'

import { useEffect } from 'react'

import { getInstructorsAsync } from '../../redux/instructors/thunks'

const MessageActionButton = styled.button`
    margin: 0 5px;
    padding: 8px 14px;
    background: #f4ca59;
    color: #242327;
    cursor: pointer;
    // border: 2px solid #242327;
    outline: 0;
    font-weight: 700;
    width: 100px;
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
  width: 90px;
  padding-left: 10px
  display: flex;
  border-radius: 5px;
  :hover {
    opacity: 0.8;
    font-weight: 800;
    color: #fff;
}`

export default function ReviewProfile({ instructor }) {
    // useEffect(() => {
    //     console.log('instructor')
    //     console.log(instructor.id.$oid)
    //     console.log(instructor.first_name)
    //     console.log(instructor.last_name)
    //     console.log(instructor.password)
    //     console.log(instructor.email)
    //     console.log(instructor.phone)
    // }, [dispatch])

    const reviews = [
        {
            reviewer: 'Phil James',
            datetime: '22-Oct, 2022',
            rating: 4,
            comment: 'An awesome instructor!',
        },
        {
            reviewer: 'Dave Norman',
            datetime: '12-Jun, 2021',
            rating: 5,
            comment: 'I really love this instructor! He is patient and funny',
        },
        {
            reviewer: 'Brian Lee',
            datetime: '07-May, 2022',
            rating: 3,
            comment:
                'Helpful, but he is a busy man and sometimes it`s hard to contact with him',
        },
    ]
    return (
        <div>
            <div className="ReviewProfile">
                <div className="row">
                    <div className="col-md-3">
                        <div className="review-profile-row-left">
                            <div className="col-12 p-0 px-3 py-3 mb-1 pt-4">
                                <div className="FollowActionButton d-flex flex-column align-items-center mt-4">
                                    <img
                                        className="photo"
                                        src={
                                            instructor.photo
                                        }
                                        alt=""
                                        style={{
                                            width: '200px',
                                            height: '200px',
                                            borderRadius: '50%',
                                            objectFit: 'cover',
                                        }}
                                    />
                                    <p className="fw-bold h4 mt-5">
                                        {instructor.first_name}
                                        {instructor.last_name}
                                    </p>
                                    <p className="text-muted">
                                        {instructor.license}
                                    </p>
                                    <p className="text-muted mb-3">
                                        {instructor.street}, {instructor.city},{' '}
                                        {instructor.country}
                                    </p>
                                    <div className="FollowActionButton d-flex">
                                        <FollowActionButton>
                                            Follow
                                        </FollowActionButton>
                                        <MessageActionButton>
                                            Message
                                        </MessageActionButton>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 p-0 px-2 py-3 pb-3 mb-3 pt-3">
                                <div className="FollowActionButton d-flex justify-content-between border-bottom py-2 px-3">
                                    <p className="review-profile-info">Email</p>
                                    <a
                                        className="review-profile-info-res"
                                        href="/"
                                    >
                                        {instructor.email}
                                    </a>
                                </div>
                                <div className="FollowActionButton d-flex justify-content-between border-bottom py-2 px-3">
                                    <p className="review-profile-info">
                                        Mobile
                                    </p>
                                    <p className="review-profile-info-res">
                                        {instructor.phone}
                                    </p>
                                </div>
                                <div className="FollowActionButton d-flex justify-content-between border-bottom py-2 px-3">
                                    <p className="review-profile-info">
                                        Company
                                    </p>
                                    <NavLink to="/">
                                        {instructor.company}
                                    </NavLink>
                                </div>
                                <div className="FollowActionButton d-flex justify-content-between border-bottom py-2 px-3">
                                    <p className="review-profile-info">
                                        Languages
                                    </p>
                                    <p className="review-profile-info-res">
                                        {instructor.language}
                                    </p>
                                </div>
                                <div className="FollowActionButton d-flex justify-content-between border-bottom py-2 px-3">
                                    <p className="review-profile-info">
                                        Year of Experience
                                    </p>
                                    <p className="review-profile-info-res">
                                        {instructor.experience}
                                    </p>
                                </div>
                                <div className="FollowActionButton d-flex justify-content-between border-bottom py-2 px-3">
                                    <p className="review-profile-info">
                                        Liscense
                                    </p>
                                    <p className="review-profile-info-res">
                                        {instructor.license}
                                    </p>
                                </div>
                                <div className="FollowActionButton d-flex justify-content-between py-2 px-3">
                                    <p className="review-profile-info">
                                        Description
                                    </p>
                                    <p className="review-profile-info-res">
                                        {instructor.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 ps-md-4">
                        <div className="review-profile-row-right">
                            <div className="col-12 px-3 pb-2">
                                <RateDisplay item={instructor.reviews} />
                            </div>
                            <div className="col-12 px-3 py-3 mb-3 pb-3 pt-4">
                                <CalendarSchedular page="reviewpage" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
