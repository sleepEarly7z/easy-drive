import './index.scss'
import React from 'react'
import PropTypes from 'prop-types'
import RCard from '../RCardStyle/RCard'

const ReviewCard = ({ item }) => {
    return (
        <RCard className="ReviewCard">
            {/* <RCard reverse='false'> */}

            <div className='num-display'>{item.rating}</div>
            <div className='text-display'>
                <div className='text-display-review'>
                    {item.comment}<br />
                </div>
                <div className='text-display-name'> -- {item.reviewer}</div>
                <div className="text-display-date">Shared publicly - {item.datetime}</div>
                {/* <div className='text-display-rating'>Rating: {item.rating} </div> */}
            </div>
            {/* <div className='action-button-group'>
                <ActionButton className='like-Action-Button'>
                    <FontAwesomeIcon icon={faThumbsUp} color="#ffffff" size="2x" className='likeIcon' /> 
                    <div className='like-text'>Like</div>
                </ActionButton>
                <ActionButton className='dislike-Action-Button'>
                    <FontAwesomeIcon icon={faThumbsDown} color="#ffffff" size="2x" className='dislikeIcon' /> 
                    <div className='dislike-text'>Dislike</div>
                </ActionButton>
            </div> */}
            <div>
          </div>
        </RCard>
    )
}

ReviewCard.propTypes = {
  item: PropTypes.object.isRequired,
}


export default ReviewCard