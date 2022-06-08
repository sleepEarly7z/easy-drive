import './index.scss'
import React from 'react'
import PropTypes from 'prop-types'
import RCard from '../RCardStyle/RCard'
import ActionButton from '../RCardStyle/ActionButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'


const ReviewCard = ({ item }) => {
    return (
        <RCard className='ReviewCard'>
            {/* <RCard reverse='false'> */}
            <div className='text-display'>
                <h1>{item.reviewer}</h1>
                <h3>Rating: {item.rating} </h3>
                <div className='text-display-review'>
                    {item.comment}<br />
                </div>
            </div>
            <div className='action-button-group'>
                <ActionButton className='like-Action-Button'>
                    <FontAwesomeIcon icon={faThumbsUp} color="#ffffff" size="2x" className='likeIcon' /> 
                    <div className='like-text'>Like</div>
                </ActionButton>
                <ActionButton className='dislike-Action-Button'>
                    <FontAwesomeIcon icon={faThumbsDown} color="#ffffff" size="2x" className='dislikeIcon' /> 
                    <div className='dislike-text'>Dislike</div>
                </ActionButton>
            </div>
        </RCard>
    )
}

ReviewCard.propTypes = {
  item: PropTypes.object.isRequired,
}


export default ReviewCard