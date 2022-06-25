// import './index.scss'
// import React from 'react'
// import { NavLink } from 'react-bootstrap'
// import styled from 'styled-components'
// import RateDisplay from '../RateDisplay'
// import CalendarSchedular from '../Calendar/CalendarSchedular'

// import { useEffect } from 'react'

// import { getInstructorsAsync } from '../../redux/instructors/thunks'
// import { useDispatch } from 'react-redux'

// const MessageActionButton = styled.button`
//     margin: 0 5px;
//     padding: 8px 14px;
//     background: #f4ca59;
//     color: #242327;
//     cursor: pointer;
//     // border: 2px solid #242327;
//     outline: 0;
//     font-weight: 700;
//     width: 100px;
//     display: flex;
//     border-radius: 5px;
//     text-align: center;
//     :hover {
//         opacity: 0.8;
//         font-weight: 800;
//         color: #fff;
//     }
// `
// const FollowActionButton = styled.button`
//   margin: 0 5px;
//   padding: 8px 14px;
//   background: #f4ca59;
//   color: #242327;
//   cursor: pointer;
//   // border: 2px solid #242327;
//   outline: 0;
//   font-weight: 700;
//   width: 90px;
//   padding-left: 10px
//   display: flex;
//   border-radius: 5px;
//   :hover {
//     opacity: 0.8;
//     font-weight: 800;
//     color: #fff;
// }`

// export default function ReviewProfile({ instructor }) {
//     // const dispatch = useDispatch()
//     // useEffect(() => {
//     //     dispatch(getInstructorsAsync())
//     // }, [dispatch])

//     return (
//         <div>
//             <div className="ReviewProfile">
//                 <div className="row">
//                     <div className="col-md-3">
//                         <div className="review-profile-row-left">
//                             <div className="col-12 p-0 px-3 py-3 mb-1 pt-4">
//                                 <div className="FollowActionButton d-flex flex-column align-items-center mt-4">
//                                     <img
//                                         className="photo"
//                                         src={instructor.photo}
//                                         alt=""
//                                         style={{
//                                             width: '200px',
//                                             height: '200px',
//                                             borderRadius: '50%',
//                                             objectFit: 'cover',
//                                         }}
//                                     />
//                                     <p className="fw-bold h4 mt-5">
//                                         {instructor.first_name}
//                                         {instructor.last_name}
//                                     </p>
//                                     <p className="text-muted">
//                                         {instructor.license}
//                                     </p>
//                                     <p className="text-muted mb-3">
//                                         {instructor.street}, {instructor.city},{' '}
//                                         {instructor.country}
//                                     </p>
//                                     <div className="FollowActionButton d-flex">
//                                         <FollowActionButton>
//                                             Follow
//                                         </FollowActionButton>
//                                         <MessageActionButton>
//                                             Message
//                                         </MessageActionButton>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-12 p-0 px-2 py-3 pb-3 mb-3 pt-3">
//                                 <div className="FollowActionButton d-flex justify-content-between border-bottom py-2 px-3">
//                                     <p className="review-profile-info">Email</p>
//                                     <a
//                                         className="review-profile-info-res"
//                                         href="/"
//                                     >
//                                         {instructor.email}
//                                     </a>
//                                 </div>
//                                 <div className="FollowActionButton d-flex justify-content-between border-bottom py-2 px-3">
//                                     <p className="review-profile-info">
//                                         Mobile
//                                     </p>
//                                     <p className="review-profile-info-res">
//                                         {instructor.phone}
//                                     </p>
//                                 </div>
//                                 <div className="FollowActionButton d-flex justify-content-between border-bottom py-2 px-3">
//                                     <p className="review-profile-info">
//                                         Company
//                                     </p>
//                                     <NavLink to="/">
//                                         {instructor.company}
//                                     </NavLink>
//                                 </div>
//                                 <div className="FollowActionButton d-flex justify-content-between border-bottom py-2 px-3">
//                                     <p className="review-profile-info">
//                                         Languages
//                                     </p>
//                                     <p className="review-profile-info-res">
//                                         {instructor.language}
//                                     </p>
//                                 </div>
//                                 <div className="FollowActionButton d-flex justify-content-between border-bottom py-2 px-3">
//                                     <p className="review-profile-info">
//                                         Year of Experience
//                                     </p>
//                                     <p className="review-profile-info-res">
//                                         {instructor.experience}
//                                     </p>
//                                 </div>
//                                 <div className="FollowActionButton d-flex justify-content-between border-bottom py-2 px-3">
//                                     <p className="review-profile-info">
//                                         Liscense
//                                     </p>
//                                     <p className="review-profile-info-res">
//                                         {instructor.license}
//                                     </p>
//                                 </div>
//                                 <div className="FollowActionButton d-flex justify-content-between py-2 px-3">
//                                     <p className="review-profile-info">
//                                         Description
//                                     </p>
//                                     <p className="review-profile-info-res">
//                                         {instructor.description}
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-md-9 ps-md-4">
//                         <div className="review-profile-row-right">
//                             <div className="col-12 px-3 pb-2">
//                                 <RateDisplay item={instructor.reviews} />
//                             </div>
//                             <div className="col-12 px-3 py-3 mb-3 pb-3 pt-4">
//                                 <CalendarSchedular page="reviewpage" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

import './index.scss'
import React from 'react'
import { NavLink } from 'react-bootstrap'
import styled from 'styled-components'
import RateDisplay from '../RateDisplay'
import CalendarSchedular from '../Calendar/CalendarSchedular'

import { useEffect } from 'react'

import { getInstructorsAsync } from '../../redux/instructors/thunks'
import { useDispatch } from 'react-redux'

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

export default function ReviewProfile() {
    
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
                                            'https://randomuser.me/api/portraits/men/21.jpg'
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
                                        {'Faulkner'}
                                        {'Schoffel'}
                                    </p>
                                    <p className="text-muted">
                                        {'Commercial license'}
                                    </p>
                                    <p className="text-muted mb-3">
                                        {'9308 Morning Terrace'}, {'Vancouver'},{' '}
                                        {'Canada'}
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
                                        {'fschoffel0@devhub.com'}
                                    </a>
                                </div>
                                <div className="FollowActionButton d-flex justify-content-between border-bottom py-2 px-3">
                                    <p className="review-profile-info">
                                        Mobile
                                    </p>
                                    <p className="review-profile-info-res">
                                        {'+1 (210) 148-2668'}
                                    </p>
                                </div>
                                <div className="FollowActionButton d-flex justify-content-between border-bottom py-2 px-3">
                                    <p className="review-profile-info">
                                        Company
                                    </p>
                                    <NavLink to="/">
                                        {'Wunsch, Kunde and Beer'}
                                    </NavLink>
                                </div>
                                <div className="FollowActionButton d-flex justify-content-between border-bottom py-2 px-3">
                                    <p className="review-profile-info">
                                        Languages
                                    </p>
                                    <p className="review-profile-info-res">
                                        {'English, French, Mandarin'}
                                    </p>
                                </div>
                                <div className="FollowActionButton d-flex justify-content-between border-bottom py-2 px-3">
                                    <p className="review-profile-info">
                                        Year of Experience
                                    </p>
                                    <p className="review-profile-info-res">
                                        {24}
                                    </p>
                                </div>
                                <div className="FollowActionButton d-flex justify-content-between border-bottom py-2 px-3">
                                    <p className="review-profile-info">
                                        Liscense
                                    </p>
                                    <p className="review-profile-info-res">
                                        {'Commercial license'}
                                    </p>
                                </div>
                                <div className="FollowActionButton d-flex justify-content-between py-2 px-3">
                                    <p className="review-profile-info">
                                        Description
                                    </p>
                                    <p className="review-profile-info-res">
                                        {
                                            'elementum nullam varius nulla facilisi cras non velit nec'
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 ps-md-4">
                        <div className="review-profile-row-right">
                            <div className="col-12 px-3 pb-2">
                                <RateDisplay
                                    item={[
                                        {
                                            reviewer_name: 'Ronni Keld',
                                            user_name: 'rkeld0',
                                            rating: 3,
                                            time: '1/2/2022',
                                            comment:
                                                'integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat',
                                        },
                                        {
                                            reviewer_name: 'Laverna Tummasutti',
                                            user_name: 'ltummasutti1',
                                            rating: 5,
                                            time: '6/18/2021',
                                            comment: 'blandit',
                                        },
                                        {
                                            reviewer_name: 'Towney Godbehere',
                                            user_name: 'tgodbehere2',
                                            rating: 5,
                                            time: '1/17/2022',
                                            comment:
                                                'et magnis dis parturient montes nascetur ridiculus',
                                        },
                                        {
                                            reviewer_name: 'Rubetta Giraudo',
                                            user_name: 'rgiraudo3',
                                            rating: 4,
                                            time: '4/28/2022',
                                            comment:
                                                'id nulla ultrices aliquet maecenas',
                                        },
                                        {
                                            reviewer_name: 'Sela Boorman',
                                            user_name: 'sboorman4',
                                            rating: 3,
                                            time: '2/1/2022',
                                            comment: 'mi asd ed oodk',
                                        },
                                    ]}
                                />
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
