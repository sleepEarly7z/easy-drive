import React from 'react'
import './index.scss'

import RatingStar from './RatingStar'
import ProgressBar from './ProgressBar'

const ReviewRating = (props) => {
    const { rating, distribution } = props

    const numberToString = (number) => {
        switch (number) {
            case 0:
                return 'Zero'
            case 1:
                return 'One'
            case 2:
                return 'Two'
            case 3:
                return 'Three'
            case 4:
                return 'Four'
            case 5:
                return 'Five'
            default:
                return ''
        }
    }

    const renderProgressBar = () => {
        return (
            <>
                {[0, 1, 2, 3, 4, 5].map((number) => {
                    const text = numberToString(number)
                    const data = distribution?.find((x) => x.rating === number)
                    const ratio = data ? data.ratingRatio : 0
                    return (
                        <div key={number}>
                            <span> {`${text} stars`}</span>
                            <ProgressBar value={ratio * 100} />
                        </div>
                    )
                })}
            </>
        )
    }

    return (
        <div className="review-info-section">
            <div className="RateDisplay-left">
                <div className="ratedisplay-title">Student Reviews</div>
                <div className="ratedisplay-average">
                    {parseFloat(rating).toFixed(1)}{' '}/{' '}5.0
                </div>
                <div className="d-flex">
                    <div className="ratedisplay-text">Rating: </div>
                    <div className="ratedisplay-shape">
                        <RatingStar average={rating} />
                    </div>
                </div>
            </div>
            <div className="RateDisplay-right">{renderProgressBar()}</div>
        </div>
    )
}

export default ReviewRating
