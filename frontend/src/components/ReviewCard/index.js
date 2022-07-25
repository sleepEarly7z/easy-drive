import './index.scss'
import React from 'react'
import PropTypes from 'prop-types'
import RCard from '../RCardStyle/RCard'

const ReviewCard = ({ item }) => {
    return (
        <RCard className="ReviewCard">
            <div className="num-display">{item.rating}</div>
            <div className="text-display">
                <div className="text-display-review">
                    {item.comment}
                    <br />
                </div>
                <div className="text-display-name">
                    {' '}
                    -- {item.reviewer_name}
                </div>
                <div className="text-display-date">
                    Shared publicly - {item.time}
                </div>
            </div>
            <div></div>
        </RCard>
    )
}

ReviewCard.propTypes = {
    item: PropTypes.object.isRequired,
}

export default ReviewCard
