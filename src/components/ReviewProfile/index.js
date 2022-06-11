import './index.scss'
import React from 'react'
import { NavLink } from 'react-bootstrap'
import styled from 'styled-components'
import RatingStar from '../RatingStar'

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
}`

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
        <div class="ReviewProfile">
            <div class="row">
                <div class="col-md-5">
                    <div className="row-left">
                        <div class="col-12 p-0 px-3 py-3 mb-3 pt-4">
                            <div class="d-flex flex-column align-items-center">
                                <img class="photo"
                                    src={'https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'}
                                    alt="" 
                                    style={{width:'100px', height: '100px', borderRadius: '50%', objectFit: 'cover'}}/>
                                <p class="fw-bold h4 mt-3">John Doe</p>
                                <p class="text-muted">Class 5 instructor</p>
                                <p class="text-muted mb-3">Soma,San Francisco, CA</p>
                                <div class="d-flex">
                                    <FollowActionButton>Follow</FollowActionButton>
                                    <MessageActionButton>Message</MessageActionButton>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 p-0 px-2 py-3 pb-3 mb-3 pt-5">
                            <div class="d-flex justify-content-between border-bottom py-2 px-3">
                                <p className="review-profile-info">Company</p>
                                <NavLink to="/">https://bootdey.com</NavLink>
                            </div>
                            <div class="d-flex justify-content-between border-bottom py-2 px-3">
                                <p className="review-profile-info">Languages</p>
                                <NavLink to="/">French, English</NavLink>
                            </div>
                            <div class="d-flex justify-content-between border-bottom py-2 px-3">
                                <p className="review-profile-info">Year of Experience</p>
                                <NavLink to="/">5</NavLink>
                            </div>
                            <div class="d-flex justify-content-between border-bottom py-2 px-3">
                                <p className="review-profile-info">Liscense</p>
                                <NavLink to="/">Class 5</NavLink>
                            </div>
                            <div class="d-flex justify-content-between py-2 px-3">
                                <p className="review-profile-info">Description</p>
                                <NavLink to="/">My name is John and I'm currently a driver instructor.</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-7 ps-md-4">
                    <div class="row-right">
                        <div class="col-12 px-3 py-3 mb-3 pb-3 pt-4">
                            <div class="d-flex align-items-center justify-content-between border-bottom">
                                <p class="py-2">Full Name</p>
                                <p class="py-2 text-muted">Kenneth valdez</p>
                            </div>
                            <div class="d-flex align-items-center justify-content-between border-bottom">
                                <p class="py-2">Email</p>
                                <p class="py-2 text-muted">fip@jukmuh.al</p>
                            </div>
                            <div class="d-flex align-items-center justify-content-between border-bottom">
                                <p class="py-2">Phone</p>
                                <p class="py-2 text-muted">(239) 816-9029</p>
                            </div>
                            <div class="d-flex align-items-center justify-content-between border-bottom">
                                <p class="py-2">Mobile</p>
                                <p class="py-2 text-muted">(320) 380-4539</p>
                            </div>
                            <div class="d-flex align-items-center justify-content-between">
                                <p class="py-2">Address</p>
                                <p class="py-2 text-muted"> Soma,San Francisco,CA</p>
                            </div>
                        </div>
                        <div class="col-12 px-3 pb-2 pt-4">
                            <h6 class="d-flex align-items-center mb-3 fw-bold py-3"><i
                                    class="text-info me-2">Rate</i>and
                                Review</h6>
                            <small>Five Stars</small>
                            <div class="progress mb-3" style={{height: '5px'}}>
                                <div class="progress-bar bg-primary" role="progressbar" style={{width: '60%'}}
                                    aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <small>Four Stars</small>
                            <div class="progress mb-3" style={{height: '5px'}}>
                                <div class="progress-bar bg-primary" role="progressbar" style={{width: '20%'}}
                                    aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <small>Three Stars</small>
                            <div class="progress mb-3" style={{height: '5px'}}>
                                <div class="progress-bar bg-primary" role="progressbar" style={{width: '10%'}}
                                    aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <small>Two Stars</small>
                            <div class="progress mb-3" style={{height: '5px'}}>
                                <div class="progress-bar bg-primary" role="progressbar" style={{width: '10%'}}
                                    aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <small>One Stars</small>
                            <div class="progress mb-3" style={{height: '5px'}}>
                                <div class="progress-bar bg-primary" role="progressbar" style={{width: '0%'}}
                                    aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
