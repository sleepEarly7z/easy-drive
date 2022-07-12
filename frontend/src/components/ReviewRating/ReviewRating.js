import React from 'react'
import './index.scss'

import RatingStar from './RatingStar'
import ProgressBar from './ProgressBar'

const ReviewRating = ({ reviews }) => {
    const average = 4
    // TODO: set percentage

    return (
        <div className="review-info-section">
            <div className="RateDisplay-left">
                <div className="ratedisplay-title">Student reviews</div>
                <div className="ratedisplay-average">
                    {average.toFixed(1)}/5.0
                </div>
                <div className="d-flex">
                    <div className="ratedisplay-text">Rating: </div>
                    <div className="ratedisplay-shape">
                        <RatingStar average={average} />
                    </div>
                </div>
            </div>
            <div className="RateDisplay-right">
                Five stars
                <ProgressBar value={60} />
                Four stars
                <ProgressBar value={20} />
                Three stars
                <ProgressBar value={10} />
                Two stars
                <ProgressBar value={10} />
                One star
                <ProgressBar value={0} />
            </div>
        </div>
    )
}

export default ReviewRating
