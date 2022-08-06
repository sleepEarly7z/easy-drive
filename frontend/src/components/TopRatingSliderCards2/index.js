import './index.scss'
import React, { useState } from 'react'

function TopRatingSliderCards2() {
    return (
        <div className="profile-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="img1">
                                <img src={"https://images.pexels.com/photos/12538152/pexels-photo-12538152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt = "dsa"
                                />
                        </div>
                            <div className="img2"><img src={
                            'https://pinchaninch.co.uk/wp-content/uploads/2016/11/donald-trump-incapable-of-embarrassment-r_0.jpg'
                        } alt = ""/></div>
                            <div className="main-text">
                                <h2>Person One</h2>
                                <p>haaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                            </div>
                            <div className="socials">
                                <i className="fa fa-facebook"></i>
                                <i className="fa fa-linkedin"></i>
                                <i className="fa fa-dribbble"></i>
                                <i className="fa fa-twitter"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopRatingSliderCards2