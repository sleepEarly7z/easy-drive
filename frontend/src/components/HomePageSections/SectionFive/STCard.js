import React from 'react'
import './STCard.scss'

const STCard = ({ props }) => {
    return (
        <div className="container_ST">
            <div className="card_ST">
                <img className="profile_picture_ST" src={props.image} alt="" />
                <div className="info_container_ST">
                    <span className="name_ST">{props.name}</span>
                    <span className="subtitle_ST">{props.subtitle}</span>
                    <span className="description_ST">{props.description}</span>
                </div>
            </div>
        </div>
    )
}

export default STCard
